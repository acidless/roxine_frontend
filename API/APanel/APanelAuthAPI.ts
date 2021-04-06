import JSONResponse from "../../types-interfaces/Response/ResponsesTypes";
import Http from "../Http";
import AdminPanelTypes from "../../types-interfaces/Forms/AdminPanelTypes";

/*====================*/

const APanelAuthAPI = {
  async login(data: AdminPanelTypes): Promise<JSONResponse<any>> {
    return Http.request("POST", `/api/apanel/auth`, data);
  },

  async auth(): Promise<JSONResponse<any>> {
    return Http.request("GET", "/api/apanel/access");
  },
};

/*====================*/

export default APanelAuthAPI;
