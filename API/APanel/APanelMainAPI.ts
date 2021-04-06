import JSONResponse from "../../types-interfaces/Response/ResponsesTypes";
import Http from "../Http";
import IRobloxAccount from "../../types-interfaces/Content/Roblox/IRobloxAccount";
import { AddAccountViaCookieTypes } from "../../types-interfaces/Forms/AddRobloxAccountTypes";

/*====================*/

const APanelMainAPI = {
  async getRobloxAccounts(): Promise<JSONResponse<Array<IRobloxAccount>>> {
    return Http.request("GET", `/api/apanel/roblox/list`);
  },
  async refreshRobloxGroups(): Promise<JSONResponse<any>> {
    return Http.request("POST", `/api/apanel/roblox/reload`);
  },

  async addAccountViaCookie(data: AddAccountViaCookieTypes): Promise<JSONResponse<any>> {
    return Http.request("POST", `/api/apanel/roblox/add/cookie`, data);
  },

  async deleteRobloxAccount(id: number): Promise<JSONResponse<any>> {
    return Http.request("POST", `/api/apanel/roblox/${id}/delete`);
  },

  async setRobuxCourse(value: number): Promise<JSONResponse<any>> {
    return Http.request("POST", `/api/apanel/course`, { value });
  },

  async getRobuxCourse(): Promise<JSONResponse<{ course: number }>> {
    return Http.request("GET", `/api/live/course`);
  },

  async setQIWINumber(value: number): Promise<JSONResponse<any>> {
    return Http.request("POST", `/api/apanel/qiwi-number`, { value });
  },

  async getQIWINumber(): Promise<JSONResponse<{ number: number }>> {
    return Http.request("GET", `/api/live/qiwi-number`);
  },
};

/*====================*/

export default APanelMainAPI;
