import jwt_decode from "jwt-decode";
import axios from "axios";
import cookies from "../utils/cookie.utils";
import { removeUser, setUser } from "../redux/slices/user.slice";
import TUserDataResponse from "../interfaces/userDataReponse.interface";
import store from "../redux/store";

const http = axios.create({
  baseURL: "http://localhost:5000",
  // withCredentials: true,
});

http.interceptors.response.use(
  (response) => {
    try {
      const accessToken = cookies.get("authorization") as string;
      const user = jwt_decode<TUserDataResponse>(accessToken);
      store.dispatch(setUser(user));
      return response;
    } catch (error: any) {
      store.dispatch(removeUser());
      return response;
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default http;
