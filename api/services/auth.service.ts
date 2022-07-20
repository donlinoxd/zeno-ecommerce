import { DocumentDefinition } from "mongoose";
import UserDocument from "../interfaces/user.interface";
import User from "../models/user.model";

export const createUser = async (input: DocumentDefinition<UserDocument>) => {
  const { firstName, lastName, username, email, password } = input;

  try {
    const user = new User({ firstName, lastName, username, email, password });

    const savedUser = await user.save();

    const { password: pass, ...userInfo } = JSON.parse(
      JSON.stringify(savedUser)
    ) as DocumentDefinition<UserDocument>;

    return userInfo;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const authenticateUser = async ({
  username,
  password,
}: {
  username: UserDocument["username"];
  password: string;
}) => {
  try {
    const user = await User.findOne({ username });

    if (!user) return Promise.reject("Username does not exists");

    const isValid = await user.comparePassword(password);

    if (!isValid) return Promise.reject("Username and Password did not match");

    const { password: Pass, ...userInfo } = JSON.parse(
      JSON.stringify(user)
    ) as DocumentDefinition<UserDocument>;

    return userInfo;
  } catch (error) {
    return Promise.reject(error);
  }
};
