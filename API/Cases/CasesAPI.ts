import Http from "../Http";
import JSONResponse from "../../types-interfaces/Response/ResponsesTypes";
import ICase from "../../types-interfaces/Content/Cases/ICase";
import IDrop from "../../types-interfaces/Content/Cases/IDrop";

/*====================*/

type OpenCaseResponseType = {
  cardsPool: Array<IDrop>;
  balance: number;
};

/*====================*/

const CasesAPI = {
  async getCases(): Promise<JSONResponse<Array<ICase>>> {
    return Http.request("GET", `/api/cases`);
  },

  async getCaseById(id: number): Promise<JSONResponse<ICase>> {
    return Http.request("GET", `/api/cases/${id}`);
  },

  async openCase(
    caseId: number,
    selectedCardsId: Array<number>,
    mode: number
  ): Promise<JSONResponse<OpenCaseResponseType>> {
    return Http.request("POST", `/api/cases/${caseId}/open`, { mode, cards: selectedCardsId });
  },
};

/*====================*/

export default CasesAPI;
