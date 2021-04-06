import IUser from "../../../../types-interfaces/Content/Users/IUser";
import { Dispatch, Reducer } from "redux";
import ActionsType, { DispatchActions } from "../../../Types";
import IBadge from "../../../../types-interfaces/Content/Badge/IBadge";
import catchThunk from "../../../../utils/redux/catchThunk";
import UsersAPI from "../../../../../../react/roxine_frontend/API/Users/UsersAPI";
import ResponseHandler from "../../../../utils/ResponseHandler";
import { CreateMessage } from "../../App/AppReducer";

/*====================*/

const SET_CURRENT_USER = "Roxine/User/SET-CURRENT-USER";
const SET_CURRENT_USER_BADGE = "Roxine/User/SET-CURRENT-USER-BADGE";
const SET_CURRENT_USER_BALANCE = "Roxine/User/SET-CURRENT-USER-BALANCE";
const SET_BALANCE_DIFFERENCE = "Roxine/User/SET-BALANCE-DIFFERENCE";
const SET_WITHDRAW_LOADING = "Roxine/User/SET-WITDRAW-LOADING";

/*====================*/

const initState = {
  currentUser: null as IUser | null,
  balanceDifference: null as number | null,
  isWithdrawLoading: false,
};
export type UsersStateType = typeof initState;

/*====================*/

type Actions = ActionsType<typeof UsersActions>;

/*====================*/

const UsersReducer: Reducer<UsersStateType, Actions> = function (state = initState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload.user,
      };
    case SET_CURRENT_USER_BADGE:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          badge: action.payload.badge,
        },
      };
    case SET_CURRENT_USER_BALANCE:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          balance: action.payload.balance,
        },
      };
    case SET_BALANCE_DIFFERENCE:
      return {
        ...state,
        balanceDifference: action.payload.balanceDifference,
      };
    case SET_WITHDRAW_LOADING:
      return {
        ...state,
        isWithdrawLoading: action.payload.value,
      };
    default:
      return state;
  }
};

/*====================*/

export const UsersActions = {
  setCurrentUser(user: IUser) {
    return <const>{ type: SET_CURRENT_USER, payload: { user } };
  },

  setCurrentUserBadge(badge: IBadge) {
    return <const>{ type: SET_CURRENT_USER_BADGE, payload: { badge } };
  },

  setCurrentUserBalance(balance: number) {
    return <const>{ type: SET_CURRENT_USER_BALANCE, payload: { balance } };
  },

  setBalanceDifference(balanceDifference: number) {
    return <const>{ type: SET_BALANCE_DIFFERENCE, payload: { balanceDifference } };
  },

  setWitdrawLoading(value: boolean) {
    return <const>{ type: SET_WITHDRAW_LOADING, payload: { value } };
  },
};

/*====================*/

export function ChangeBalance(newBalance: number) {
  return function ChangeBalanceThunk(dispatch: Dispatch<DispatchActions<Actions>>, getState: Function) {
    dispatch(UsersActions.setBalanceDifference(newBalance - getState().users.users.currentUser.balance));
    dispatch(UsersActions.setCurrentUserBalance(newBalance));
  };
}

export function CreateWithdraw(gpId: number) {
  return catchThunk(async (dispatch) => {
    dispatch(UsersActions.setWitdrawLoading(true));

    const response = await UsersAPI.createWithdraw(gpId);

    new ResponseHandler(response, dispatch, () => {
      dispatch(CreateMessage("Робуксы успешно выведены!", false));
    });

    dispatch(UsersActions.setWitdrawLoading(false));
  });
}

/*====================*/

export default UsersReducer;
