import { Reducer } from "redux";
import ActionsType, { DispatchActions } from "../../Types";
import { Dispatch } from "react";
import CasesAPI from "../../../../../react/roxine_frontend/API/Cases/CasesAPI";
import catchAsync from "../../../utils/redux/catchThunk";
import ResponseHandler from "../../../utils/ResponseHandler";
import ICase from "../../../types-interfaces/Content/Cases/ICase";
import IDrop from "../../../types-interfaces/Content/Cases/IDrop";
import { ChangeBalance } from "../Users/CurrentUserReducer/UsersReducer";
import withLoading from "../../../utils/redux/withLoading";

/*====================*/

const GET_CASES = "Roxine/Cases/GET-CASES";
const SET_CURRENT_CASE = "Roxine/Cases/SET-CURRENT-CASE";
const SET_CURRENT_DROPS = "Roxine/Cases/SET-CURRENT-DROP";

/*====================*/

const initState = {
  cases: [] as Array<ICase>,
  currentCase: null as ICase | null,
  currentDrops: [{ value: 0, rarity: 0, selected: true }] as Array<IDrop>,
};
export type CasesStateType = typeof initState;

/*====================*/

type Actions = ActionsType<typeof CasesActions>;

/*====================*/

const CasesReducer: Reducer<CasesStateType, Actions> = function (state = initState, action) {
  switch (action.type) {
    case GET_CASES:
      return {
        ...state,
        cases: action.payload.cases,
      };
    case SET_CURRENT_CASE:
      return {
        ...state,
        currentCase: action.payload.currentCase,
      };
    case SET_CURRENT_DROPS:
      return {
        ...state,
        currentDrops: action.payload.currentDrops,
      };
    default:
      return state;
  }
};

/*====================*/

export const CasesActions = {
  setCases(cases: Array<ICase>) {
    return <const>{ type: GET_CASES, payload: { cases } };
  },
  setCurrentCase(currentCase: ICase) {
    return <const>{ type: SET_CURRENT_CASE, payload: { currentCase } };
  },
  setCurrentDrops(currentDrops: Array<IDrop>) {
    return <const>{ type: SET_CURRENT_DROPS, payload: { currentDrops } };
  },
};
export function GetCases() {
  return catchAsync(async function (dispatch: Dispatch<DispatchActions<Actions>>) {
    withLoading(dispatch, async () => {
      const response = await CasesAPI.getCases();

      new ResponseHandler(response, dispatch, () => {
        dispatch(CasesActions.setCases(response.data));
      });
    });
  });
}

export function GetCurrentCase(id: number) {
  return catchAsync(async function (dispatch: Dispatch<DispatchActions<Actions>>) {
    withLoading(dispatch, async () => {
      const response = await CasesAPI.getCaseById(id);

      new ResponseHandler(response, undefined, (error) => {
        if (error) window.location.href = "/404";
        else dispatch(CasesActions.setCurrentCase(response.data));
      });
    });
  });
}

export async function OpenCase(caseId: number, selectedCardsId: Array<number>, openMode: number, dispatch: any) {
  const response = await CasesAPI.openCase(caseId, selectedCardsId, openMode);

  new ResponseHandler(response, dispatch, () => {
    dispatch(CasesActions.setCurrentDrops(response.data.cardsPool));
    dispatch(ChangeBalance(response.data.balance));
  });
}

/*====================*/

export default CasesReducer;
