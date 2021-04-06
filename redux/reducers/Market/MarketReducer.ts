import ActionsType from "../../Types";
import { Reducer } from "redux";
import catchThunk from "../../../utils/redux/catchThunk";
import withLoading from "../../../utils/redux/withLoading";
import MarketAPI from "../../../../../react/roxine_frontend/API/Market/MarketAPI";
import ResponseHandler from "../../../utils/ResponseHandler";

/*====================*/

const SET_BALANCE = "Roxine/Market/SET_BALANCE";

/*====================*/

const initState = {
  balance: 0,
};
type MarketStateType = typeof initState;

/*====================*/

type Actions = ActionsType<typeof MarketActions>;

/*====================*/

const MarketReducer: Reducer<MarketStateType, Actions> = function (state = initState, action) {
  switch (action.type) {
    case SET_BALANCE:
      return {
        ...state,
        balance: action.payload.balance,
      };
    default:
      return state;
  }
};

/*====================*/

export const MarketActions = {
  setBalance(balance: number) {
    return <const>{ type: SET_BALANCE, payload: { balance } };
  },
};

/*====================*/

export function GetMarketBalance() {
  return catchThunk(async (dispatch) => {
    withLoading(dispatch, async () => {
      const response = await MarketAPI.getMarketBalance();

      new ResponseHandler(response, dispatch, () => {
        dispatch(MarketActions.setBalance(response.data.currency));
      });
    });
  });
}

/*====================*/

export default MarketReducer;
