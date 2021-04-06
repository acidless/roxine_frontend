import ActionsType from "../../../Types";
import { Reducer } from "redux";
import catchThunk from "../../../../utils/redux/catchThunk";
import withLoading from "../../../../utils/redux/withLoading";
import IWithdraw from "../../../../types-interfaces/Content/Withdraw/IWithdraw";
import ResponseHandler from "../../../../utils/ResponseHandler";
import APanelWithdrawsAPI from "../../../../../../react/roxine_frontend/API/APanel/APanelWithdrawsAPI";

/*====================*/

const SET_WITHDRAWS = "Roxine/APanel/SET_WITHDRAWS";

/*====================*/

const initState = {
  withdraws: [] as Array<IWithdraw>,
};
type APanelWithdrawsStateType = typeof initState;

/*====================*/

type Actions = ActionsType<typeof APanelWithdrawsActions>;

/*====================*/

const APanelWithdrawsReducer: Reducer<APanelWithdrawsStateType, Actions> = function (state = initState, action) {
  switch (action.type) {
    case SET_WITHDRAWS:
      return {
        ...state,
        withdraws: action.payload.withdraws,
      };
    default:
      return state;
  }
};

/*====================*/

export const APanelWithdrawsActions = {
  setWithdraws(withdraws: Array<IWithdraw>) {
    return <const>{ type: SET_WITHDRAWS, payload: { withdraws } };
  },
};

/*====================*/

export function GetWithdraws(page: number = 0) {
  return catchThunk((dispatch) => {
    withLoading(dispatch, async () => {
      const response = await APanelWithdrawsAPI.getWithdraws(page);

      new ResponseHandler(response, dispatch, () => {
        dispatch(APanelWithdrawsActions.setWithdraws(response.data));
      });
    });
  });
}

/*====================*/

export default APanelWithdrawsReducer;
