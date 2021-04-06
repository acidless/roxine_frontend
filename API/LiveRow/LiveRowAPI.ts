import JSONResponse from "../../types-interfaces/Response/ResponsesTypes";
import Http from "../Http";
import HistoryAnyObject from "../../types-interfaces/Content/HistoryObjects/HistoryAnyObject";

/*====================*/

const LiveRowAPI = {
  async getLiveRowItems(): Promise<JSONResponse<Array<HistoryAnyObject>>> {
    return Http.request("GET", `/api/live`);
  },
};

/*====================*/

export default LiveRowAPI;
