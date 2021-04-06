import JSONResponse from "../../types-interfaces/Response/ResponsesTypes";
import Http from "../Http";
import IUser from "../../types-interfaces/Content/Users/IUser";

/*====================*/

const APanelUsersAPI = {
  async getUsers(page: number, search?: string): Promise<JSONResponse<Array<IUser>>> {
    return Http.request("GET", `/api/apanel/users?p=${page}${search ? `&&s=${search}` : ""}`);
  },

  async getUserById(id: number): Promise<JSONResponse<IUser>> {
    return Http.request("GET", `/api/apanel/users/${id}`);
  },

  async deleteUser(id: number): Promise<JSONResponse<any>> {
    return Http.request("POST", `/api/apanel/users/${id}/delete`);
  },

  async setUserBalance(id: number, balance: number): Promise<JSONResponse<any>> {
    return Http.request("POST", `/api/apanel/users/${id}/set/balance`, { balance });
  },
};

/*====================*/

export default APanelUsersAPI;
