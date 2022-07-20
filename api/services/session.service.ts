import { DocumentDefinition } from "mongoose";
import { createToken, decodeToken } from "./../utils/jwt.utils";
import UserDocument from "../interfaces/user.interface";
import Session from "../models/session.model";
import User from "../models/user.model";
import SessionDocument from "../interfaces/session.interface";

export const createSession = async ({
  userId,
  userAgent,
}: {
  userId: UserDocument["_id"];
  userAgent?: string;
}) => {
  try {
    const session = new Session({ userId, userAgent });

    return await session.save();
  } catch (error) {
    return Promise.reject(error);
  }
};

export const reIssueAccessToken = async (token: string) => {
  try {
    /**
     * * refresh token is in invalid tokens of session object
     * * possibly, someone compromise/hacked your refresh token,
     * * so, session must ended
     */
    const endedSession = await Session.deleteOne({
      invalidTokens: { $all: [token] },
    });

    if (endedSession.deletedCount)
      return Promise.reject("session has been ended programmatically");

    const decoded = await decodeToken<SessionDocument>(token);
    if (!decoded.payload) throw new Error("token is expired or not valid");

    /**
     * * push old refresh token to invalidTokens as it is not valid anymore
     * * create new tokens then return
     */

    const { _id, userId, userAgent } = decoded.payload;
    await Session.updateOne({ _id }, { $push: { invalidTokens: token } });
    const user = await User.findOne({ _id: userId });

    const { password, ...userInfo } = JSON.parse(
      JSON.stringify(user)
    ) as DocumentDefinition<UserDocument>;

    const newAccessToken = await createToken(userInfo, { expiresIn: "15m" });
    const newRefreshToken = await createToken(
      { _id, userId, userAgent },
      { expiresIn: "1y" }
    );

    return { newAccessToken, newRefreshToken };
  } catch (error: any) {
    console.log(error);

    return Promise.reject(error);
  }
};

export const invalidateSession = async (sessionId: string) => {
  try {
    await Session.findByIdAndUpdate(sessionId, { valid: false });

    return;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const deleteSession = async (token: string) => {
  try {
    const decoded = await decodeToken(token);

    // @ts-ignore
    await Session.deleteOne({ _id: decoded._id });
  } catch (error) {
    return error;
  }
};
