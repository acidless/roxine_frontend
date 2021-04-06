import ActionsType from "../../../Types";
import { Reducer } from "redux";
import catchThunk from "../../../../utils/redux/catchThunk";
import withLoading from "../../../../utils/redux/withLoading";
import IUser from "../../../../types-interfaces/Content/Users/IUser";
import ResponseHandler from "../../../../utils/ResponseHandler";
import APanelUsersAPI from "../../../../../../react/roxine_frontend/API/APanel/APanelUsersAPI";

/*====================*/

const SET_USERS = "Roxine/APanel/SET_USERS";
const SET_CURRENT_USER = "Roxine/APanel/SET_CURRENT_USER";
const SET_CURRENT_USER_BALANCE = "Roxine/APanel/SET_CURRENT_USER_BALANCE";

/*====================*/

const initState = {
  users: [] as Array<IUser>,
  currentUser: null as null | IUser,
};
type APanelUsersStateType = typeof initState;

/*====================*/

type Actions = ActionsType<typeof APanelUsersActions>;

/*====================*/

const APanelUsersReducer: Reducer<APanelUsersStateType, Actions> = function (state = initState, action) {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.payload.users,
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload.user,
      };
    case SET_CURRENT_USER_BALANCE:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          balance: action.payload.balance,
        },
      };
    default:
      return state;
  }
};

/*====================*/

export const APanelUsersActions = {
  setUsers(users: Array<IUser>) {
    return <const>{ type: SET_USERS, payload: { users } };
  },
  setUser(user: IUser) {
    return <const>{ type: SET_CURRENT_USER, payload: { user } };
  },
  setCurrentUserBalance(balance: number) {
    return <const>{ type: SET_CURRENT_USER_BALANCE, payload: { balance } };
  },
};

/*====================*/

export function GetApanelUsers(page: number = 0, search?: string) {
  return catchThunk(async (dispatch) => {
    withLoading(dispatch, async () => {
      const response = await APanelUsersAPI.getUsers(page, search);

      new ResponseHandler(response, dispatch, () => {
        dispatch(APanelUsersActions.setUsers(response.data));
      });
    });
  });
}

export function GetApanelUser(id: number) {
  return catchThunk(async (dispatch) => {
    const response = await APanelUsersAPI.getUserById(id);

    new ResponseHandler(response, dispatch, () => {
      dispatch(APanelUsersActions.setUser(response.data));
    });
  });
}

export function DeleteCurrentAPanelUser(id: number) {
  return catchThunk(async (dispatch) => {
    const response = await APanelUsersAPI.deleteUser(id);

    new ResponseHandler(response, dispatch, () => {
      dispatch(GetApanelUsers());
    });
  });
}

export function SetApanelUserBalance(id: number, balance: number) {
  return catchThunk(async (dispatch) => {
    const response = await APanelUsersAPI.setUserBalance(id, balance);

    new ResponseHandler(response, dispatch, () => {
      dispatch(APanelUsersActions.setCurrentUserBalance(balance));
    });
  });
}

/*====================*/

export default APanelUsersReducer;
