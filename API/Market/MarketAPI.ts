import JSONResponse from "../../types-interfaces/Response/ResponsesTypes";
import Http from "../Http";
import IRobloxGroup from "../../types-interfaces/Content/Roblox/IRobloxGroup";

/*====================*/

const MarketAPI = {
  getMarketBalance(): Promise<JSONResponse<{ currency: number }>> {
    return Http.request("GET", `/api/live/balance`);
  },
};

/*====================*/

export default MarketAPI;
