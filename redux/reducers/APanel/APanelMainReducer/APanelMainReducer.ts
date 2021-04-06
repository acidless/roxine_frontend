import IRobloxAccount from "../../../../types-interfaces/Content/Roblox/IRobloxAccount";
import ActionsType from "../../../Types";
import { Reducer } from "redux";
import catchThunk from "../../../../utils/redux/catchThunk";
import withLoading from "../../../../utils/redux/withLoading";
import ResponseHandler from "../../../../utils/ResponseHandler";
import { AddAccountViaCookieTypes } from "../../../../types-interfaces/Forms/AddRobloxAccountTypes";
import APanelMainAPI from "../../../../../../react/roxine_frontend/API/APanel/APanelMainAPI";
import { CreateMessage } from "../../App/AppReducer";

/*====================*/

const SET_ROBLOX_ACCOUNTS = "Roxine/APanel/SET_ROBLOX_ACCOUNTS";
const SET_ROBUX_COURSE = "Roxine/APanel/SET_ROBUX_COURSE";
const SET_QIWI_NUMBER = "Roxine/APanel/SET_QIWI_NUMBER";

/*====================*/

const initState = {
  robloxAccounts: [] as Array<IRobloxAccount>,
  robuxCourse: 0,
  qiwiNumber: 0,
};
type APanelMainStateType = typeof initState;

/*====================*/

type Actions = ActionsType<typeof APanelMainActions>;

/*====================*/

const APanelMainReducer: Reducer<APanelMainStateType, Actions> = function (state = initState, action) {
  switch (action.type) {
    case SET_ROBLOX_ACCOUNTS:
      return {
        ...state,
        robloxAccounts: action.payload.accounts,
      };
    case SET_ROBUX_COURSE:
      return {
        ...state,
        robuxCourse: action.payload.value,
      };
    case SET_QIWI_NUMBER:
      return {
        ...state,
        qiwiNumber: action.payload.value,
      };
    default:
      return state;
  }
};

/*====================*/

export const APanelMainActions = {
  setRobloxAccounts(accounts: Array<IRobloxAccount>) {
    return <const>{ type: SET_ROBLOX_ACCOUNTS, payload: { accounts } };
  },
  setRobuxCourse(value: number) {
    return <const>{ type: SET_ROBUX_COURSE, payload: { value } };
  },
  setQIWINumber(value: number) {
    return <const>{ type: SET_QIWI_NUMBER, payload: { value } };
  },
};

/*====================*/

export function GetRobloxAccounts() {
  return catchThunk(async (dispatch) => {
    withLoading(dispatch, async () => {
      const response = await APanelMainAPI.getRobloxAccounts();

      new ResponseHandler(response, dispatch, () => {
        dispatch(APanelMainActions.setRobloxAccounts(response.data));
      });
    });
  });
}

export function RefreshRobloxGroups() {
  return catchThunk(async (dispatch) => {
    const response = await APanelMainAPI.refreshRobloxGroups();

    new ResponseHandler(response, dispatch, () => {
      dispatch(APanelMainActions.setRobloxAccounts([]));
      dispatch(GetRobloxAccounts());
    });
  });
}

export function AddRobloxAccountCookie(data: AddAccountViaCookieTypes) {
  return catchThunk(async (dispatch) => {
    const response = await APanelMainAPI.addAccountViaCookie(data);

    new ResponseHandler(response, dispatch, () => {
      dispatch(RefreshRobloxGroups());
    });
  });
}

export function DeleteRobloxAccount(id: number) {
  return catchThunk(async (dispatch) => {
    const response = await APanelMainAPI.deleteRobloxAccount(id);

    new ResponseHandler(response, dispatch, () => {
      dispatch(RefreshRobloxGroups());
    });
  });
}

export function SetRobuxCourse(value: number) {
  return catchThunk(async (dispatch) => {
    const response = await APanelMainAPI.setRobuxCourse(value);

    new ResponseHandler(response, dispatch, () => {
      dispatch(APanelMainActions.setRobuxCourse(value));
      dispatch(CreateMessage("Курс робуксов установлен!", false));
    });
  });
}

export function GetQIWINumber() {
  return catchThunk(async (dispatch) => {
    const response = await APanelMainAPI.getQIWINumber();

    new ResponseHandler(response, dispatch, () => {
      dispatch(APanelMainActions.setQIWINumber(response.data.number));
    });
  });
}

export function SetQIWINumber(value: number) {
  return catchThunk(async (dispatch) => {
    const response = await APanelMainAPI.setQIWINumber(value);

    new ResponseHandler(response, dispatch, () => {
      dispatch(APanelMainActions.setQIWINumber(value));
      dispatch(CreateMessage("Номер QIWI установлен!", false));
    });
  });
}

export function GetRobuxCourse() {
  return catchThunk(async (dispatch) => {
    const response = await APanelMainAPI.getRobuxCourse();

    new ResponseHandler(response, dispatch, () => {
      dispatch(APanelMainActions.setRobuxCourse(response.data.course));
    });
  });
}

/*====================*/

export default APanelMainReducer;
