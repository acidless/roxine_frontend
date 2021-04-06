import JSONResponse from "../../types-interfaces/Response/ResponsesTypes";
import Http from "../Http";
import IBadge from "../../types-interfaces/Content/Badge/IBadge";

/*====================*/

const BadgesAPI = {
  async getBadges(): Promise<JSONResponse<Array<IBadge>>> {
    return Http.request("GET", `/api/me/badges`);
  },
  async setBadge(id: number): Promise<JSONResponse<any>> {
    return Http.request("POST", `/api/me/badges/${id}/set`);
  },
};

/*====================*/

export default BadgesAPI;
