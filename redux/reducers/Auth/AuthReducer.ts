import ActionsType, { DispatchActions } from "../../Types";
import { combineReducers, Dispatch, Reducer } from "redux";
import AuthAPI from "../../../../../react/roxine_frontend/API/Auth/AuthAPI";
import ResponseHandler from "../../../utils/ResponseHandler";
import UsersAPI from "../../../../../react/roxine_frontend/API/Users/UsersAPI";
import { UsersActions } from "../Users/CurrentUserReducer/UsersReducer";
import catchAsync from "../../../utils/redux/catchThunk";
import catchThunk from "../../../utils/redux/catchThunk";
import PasswordForgotReducer from "./PasswordForgotReducer/PasswordForgotReducer";
import { CreateMessage } from "../App/AppReducer";
import { LoginFormStates } from "../../../types-interfaces/Forms/RegisterTypes";

/*====================*/

const SET_REGISTERED = "Roxine/Auth/SET-REGISTERED";
const SET_ROBLOX_STATUS = "Roxine/Auth/SET-ROBLOX-STATUS";
const SET_AUTH_STATUS = "Roxine/Auth/SET-AUTH-STATUS";
const SET_LOADING_STATUS = "Roxine/Auth/SET-LOADING-STATUS";
const SET_AUTH_FORM_STATE = "Roxine/Auth/SET_AUTH_FORM_STATE";

/*====================*/

const initState = {
  isRegistered: false,
  isLoading: false,
  robloxStatus: "",
  isAuth: false,
  isPasswordForgotten: false,
  currentAuthFormState: LoginFormStates.LOGIN as LoginFormStates,
};
type AuthStateType = typeof initState;

/*====================*/

type Actions = ActionsType<typeof AuthActions>;

/*====================*/

const AuthReducer: Reducer<AuthStateType, Actions> = function (state = initState, action) {
  switch (action.type) {
    case SET_REGISTERED:
      return {
        ...state,
        isRegistered: action.payload.value,
      };
    case SET_ROBLOX_STATUS:
      return {
        ...state,
        robloxStatus: action.payload.robloxStatus,
      };
    case SET_AUTH_STATUS:
      return {
        ...state,
        isAuth: action.payload.value,
      };
    case SET_LOADING_STATUS:
      return {
        ...state,
        isLoading: action.payload.value,
      };
    case SET_AUTH_FORM_STATE:
      return {
        ...state,
        currentAuthFormState: action.payload.state,
      };
    default:
      return state;
  }
};

/*====================*/

export const AuthActions = {
  setRegistred(value: boolean) {
    return <const>{ type: SET_REGISTERED, payload: { value } };
  },
  setRobloxStatus(robloxStatus: string) {
    return <const>{ type: SET_ROBLOX_STATUS, payload: { robloxStatus } };
  },
  setAuthStatus(value: boolean) {
    return <const>{ type: SET_AUTH_STATUS, payload: { value } };
  },
  setLoadingStatus(value: boolean) {
    return <const>{ type: SET_LOADING_STATUS, payload: { value } };
  },
  setAuthFormState(state: LoginFormStates) {
    return <const>{ type: SET_AUTH_FORM_STATE, payload: { state } };
  },
};

/*====================*/

export function checkLogin(name: string) {
  return catchThunk(async (dispatch) => {
    dispatch(AuthActions.setLoadingStatus(true));

    const response = await AuthAPI.checkLogin(name);

    new ResponseHandler(response, undefined, (err) => {
      if (err) {
        dispatch(CreateMessage(err));
        dispatch(AuthActions.setAuthFormState(LoginFormStates.LOGIN));
      } else {
        const isCodeExists = response.data && response.data.code;
        dispatch(AuthActions.setRegistred(!isCodeExists));

        if (isCodeExists) {
          dispatch(AuthActions.setAuthFormState(LoginFormStates.CODE));
          dispatch(AuthActions.setRobloxStatus(response.data.code));
        } else {
          dispatch(AuthActions.setAuthFormState(LoginFormStates.PASSWORD));
        }
      }
    });

    dispatch(AuthActions.setLoadingStatus(false));
  });
}

export function verify() {
  return catchThunk(async (dispatch) => {
    dispatch(AuthActions.setLoadingStatus(true));

    const response = await AuthAPI.verify();
    new ResponseHandler(response, undefined, (err) => {
      if (err) {
        dispatch(CreateMessage(err));
        dispatch(AuthActions.setAuthFormState(LoginFormStates.LOGIN));
      } else {
        dispatch(AuthActions.setAuthFormState(LoginFormStates.PASSWORD));
      }
    });

    dispatch(AuthActions.setLoadingStatus(false));
  });
}

export function setPassword(password: string) {
  return catchThunk(async (dispatch) => {
    dispatch(AuthActions.setLoadingStatus(true));

    const response = await AuthAPI.setPassword(password);

    new ResponseHandler(response, undefined, (err) => {
      dispatch(AuthActions.setAuthFormState(LoginFormStates.LOGIN));

      if (err) {
        dispatch(CreateMessage(err));
      } else {
        dispatch(AuthActions.setAuthStatus(true));
        dispatch(UsersActions.setCurrentUser(response.data));
      }
    });

    dispatch(AuthActions.setLoadingStatus(false));
  });
}

export function Auth() {
  return catchAsync(async function AuthThunk(dispatch: Dispatch<DispatchActions<Actions>>) {
    const response = await UsersAPI.getUser("me");

    new ResponseHandler(response, undefined, (err) => {
      if (!err) {
        dispatch(AuthActions.setAuthStatus(true));
        dispatch(UsersActions.setCurrentUser(response.data));
      }
    });
  });
}
export function Logout() {
  return catchAsync(async function LogoutThunk(dispatch: Dispatch<DispatchActions<Actions>>) {
    const response = await AuthAPI.logout();

    new ResponseHandler(response, dispatch, () => {
      dispatch(AuthActions.setAuthStatus(false));
      dispatch(UsersActions.setCurrentUser(null));
    });
  });
}

/*====================*/

export default combineReducers({
  authMain: AuthReducer,
  passwordForgot: PasswordForgotReducer,
});
