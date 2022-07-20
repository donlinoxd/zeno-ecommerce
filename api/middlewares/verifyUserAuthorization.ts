import { reIssueAccessToken } from "./../services/session.service";
import { decodeToken } from "./../utils/jwt.utils";
import { NextFunction, Request, Response } from "express";
import UserDocument from "../interfaces/user.interface";
import logger from "./logger";

const verifyUserAuthorization = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // get access token
  const accessToken = req.cookies.authorization as string;
  const refreshToken = req.cookies["x-refresh"] as string;

  // no access token, user shouldn't attach to req object
  if (!accessToken) return next();

  // verify the access token
  const decoded = await decodeToken<UserDocument>(accessToken);

  /**
   * * check whether the token is valid, expired, or not
   * * if: valid -> attach user to request object,
   * *     expired -> re-issue new tokens
   * * else: clear the tokens
   */

  if (decoded.valid && decoded.payload?.username) {
    req.user = decoded.payload;

    return next();
  } else if (decoded.expired && refreshToken) {
    try {
      const { newAccessToken, newRefreshToken } = await reIssueAccessToken(
        refreshToken
      );
      res.setHeader("authorization", newAccessToken);

      const { payload } = await decodeToken<UserDocument>(newAccessToken);

      res.cookie("authorization", newAccessToken, {
        maxAge: 1000 * 60 * 60 * 24 * 365,
      });
      res.cookie("x-refresh", newRefreshToken, {
        maxAge: 1000 * 60 * 60 * 24 * 365,
      });
      // @ts-ignore
      req.user = payload;

      return next();
    } catch (error) {
      logger.error(error);
      res.cookie("authorization", "", { maxAge: 1 });
      res.cookie("x-refresh", "", { maxAge: 1 });

      return next();
    }
  } else {
    res.cookie("authorization", "", { maxAge: 1 });
    res.cookie("x-refresh", "", { maxAge: 1 });

    return next();
  }
};

export default verifyUserAuthorization;
