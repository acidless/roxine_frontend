import JSONResponse from "../../types-interfaces/Response/ResponsesTypes";
import Http from "../Http";

/*====================*/

const WithdrawAPI = {
  createWithdraw(amount: number): Promise<JSONResponse<{ id: number }>> {
    return Http.request("POST", "/api/me/withdraw/create", { amount });
  },
};

/*====================*/

export default WithdrawAPI;
