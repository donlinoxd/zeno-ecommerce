import TUser from "./user.interface";

export default interface TUserDataResponse extends TUser {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
}
