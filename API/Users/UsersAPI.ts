import Http from "../Http";
import JSONResponse from "../../types-interfaces/Response/ResponsesTypes";
import IUser from "../../types-interfaces/Content/Users/IUser";
import HistoryAnyObject from "../../types-interfaces/Content/HistoryObjects/HistoryAnyObject";

/*====================*/

const UsersAPI = {
  async getUser(id: number | "me"): Promise<JSONResponse<IUser>> {
    const url = id === "me" ? `/api/me/info` : `/api/community/${id}`;

    return Http.request("GET", url);
  },

  async getUserHistory(id: number | "me", page: number): Promise<JSONResponse<Array<HistoryAnyObject>>> {
    const url = id === "me" ? `/api/me/history?p=${page}` : `/api/community/${id}/history?p=${page}`;

    return Http.request("GET", url);
  },

  async createWithdraw(gp_id: number): Promise<JSONResponse<any>> {
    return Http.request("POST", `/api/me/withdraw/create`, { gp_id });
  },
};

/*====================*/

export default UsersAPI;
