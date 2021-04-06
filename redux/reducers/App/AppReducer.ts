import ActionsType from "../../Types";
import { Reducer } from "redux";
import catchThunk from "../../../utils/redux/catchThunk";
import { UsersActions } from "../Users/CurrentUserReducer/UsersReducer";
import { Auth } from "../Auth/AuthReducer";
import { GetLiveRowItems } from "../LiveRow/LiveRowReducer";
import { WebSocketConnect } from "../WebSocket/WebSocketReducer";
import { GetQIWINumber, GetRobuxCourse } from "../APanel/APanelMainReducer/APanelMainReducer";

/*====================*/

const SET_MESSAGE = "Roxine/App/SET-MESSAGE";
const SET_LOADING = "Roxine/App/SET_LOADING";
const SET_MENU_ACTIVE = "Roxine/App/SET_MENU_ACTIVE";

/*====================*/

type MessageType = {
  text: string | null;
  isError: boolean;
  time: number;
  title: string | null;
};

/*====================*/

const initState = {
  message: {
    text: null as string | null,
    isError: false,
    time: 0,
    title: null as string | null,
  },
  isMenuOpen: false,
  isLoading: false,
};
export type AppReducerStateType = typeof initState;

/*====================*/

type Actions = ActionsType<typeof AppActions>;

/*====================*/

const AppReducer: Reducer<AppReducerStateType, Actions> = function (state = initState, action) {
  switch (action.type) {
    case SET_MESSAGE:
      return {
        ...state,
        message: action.payload.message,
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload.value,
      };
    case SET_MENU_ACTIVE:
      return {
        ...state,
        isMenuOpen: action.payload.value,
      };
    default:
      return state;
  }
};

/*====================*/

export const AppActions = {
  setMessage(message: MessageType) {
    return <const>{ type: SET_MESSAGE, payload: { message } };
  },
  setLoadingStatus(value: boolean) {
    return <const>{ type: SET_LOADING, payload: { value } };
  },
  setMenuActive(value: boolean) {
    return <const>{ type: SET_MENU_ACTIVE, payload: { value } };
  },
};

/*====================*/

export function OnNewPage() {
  return catchThunk(async (dispatch) => {
    dispatch(UsersActions.setBalanceDifference(null));
    dispatch(AppActions.setMessage({ title: null, isError: false, text: null, time: 0 }));
  });
}

export function OnStart() {
  return catchThunk(async (dispatch) => {
    dispatch(WebSocketConnect());
    dispatch(Auth());
    dispatch(GetLiveRowItems());
    dispatch(GetRobuxCourse());
    dispatch(GetQIWINumber());
  });
}

export function CreateMessage(text: string, isError = true, title?: string, time = 5000) {
  return catchThunk((dispatch) => {
    if (!title) {
      title = isError ? "Ошибка!" : "Успех";
    }

    dispatch(AppActions.setMessage({ title, text, isError, time }));
  });
}

/*====================*/

export default AppReducer;
