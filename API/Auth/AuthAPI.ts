import Http from "../Http";
import JSONResponse from "../../types-interfaces/Response/ResponsesTypes";
import IUser from "../../types-interfaces/Content/Users/IUser";

/*====================*/

type RobloxLoginResponseType = {
  code: string | undefined;
};

/*====================*/

const AuthAPI = {
  async checkLogin(name: string): Promise<JSONResponse<RobloxLoginResponseType>> {
    return Http.request("POST", `/api/auth/login`, { name });
  },

  async verify(): Promise<JSONResponse<any>> {
    return Http.request("POST", `/api/auth/verify`);
  },

  async setPassword(password?: string, reset?: boolean): Promise<JSONResponse<IUser>> {
    return Http.request("POST", `/api/auth/password`, { password, reset });
  },

  async forgotPassword(name: string): Promise<JSONResponse<any>> {
    return Http.request("POST", `/api/auth/forgot-password`, { name });
  },

  async logout(): Promise<JSONResponse<undefined>> {
    return Http.request("POST", "/api/auth/logout");
  },
};

/*====================*/

export default AuthAPI;
