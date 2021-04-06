import JSONResponse from "../../types-interfaces/Response/ResponsesTypes";
import Http from "../Http";
import IWithdraw from "../../types-interfaces/Content/Withdraw/IWithdraw";

/*====================*/

const APanelWithdrawsAPI = {
  async getWithdraws(page: number): Promise<JSONResponse<Array<IWithdraw>>> {
    return Http.request("GET", `/api/apanel/withdraws?p=${page}`);
  },
};

/*====================*/

export default APanelWithdrawsAPI;
