import ActionsType, { DispatchActions } from "../../../Types";
import { AuthActions } from "../AuthReducer";
import { Dispatch, Reducer } from "redux";
import catchAsync from "../../../../utils/redux/catchThunk";
import AuthAPI from "../../../../../../react/roxine_frontend/API/Auth/AuthAPI";
import ResponseHandler from "../../../../utils/ResponseHandler";
import PasswordResetType from "../../../../types-interfaces/Forms/PasswordResetTypes";
import { UsersActions } from "../../Users/CurrentUserReducer/UsersReducer";

/*====================*/

const SET_PASSWORD_FORGOTTEN = "Roxine/Auth/SET-PASSWORD-FORGOTTEN";

/*====================*/

const initState = {
  isPasswordForgotten: false,
};
type PasswordForgotStateType = typeof initState;

/*====================*/

type Actions = ActionsType<typeof PasswordForgotActions>;

/*====================*/

const PasswordForgotReducer: Reducer<PasswordForgotStateType, Actions> = function (state = initState, action) {
  switch (action.type) {
    case SET_PASSWORD_FORGOTTEN:
      return {
        ...state,
        isPasswordForgotten: action.payload.value,
      };
    default:
      return state;
  }
};

/*====================*/

export const PasswordForgotActions = {
  setPasswordForgotten(value: boolean) {
    return <const>{ type: SET_PASSWORD_FORGOTTEN, payload: { value } };
  },
};

/*====================*/

export function ForgotPassword(name: string) {
  return catchAsync(async (dispatch: Dispatch<DispatchActions<Actions>>) => {
    const response = await AuthAPI.forgotPassword(name);

    new ResponseHandler(response, dispatch, () => {
      dispatch(PasswordForgotActions.setPasswordForgotten(true));
      dispatch(AuthActions.setRobloxStatus(response.data.code));
    });
  });
}

export function ResetPassword(data: PasswordResetType) {
  return catchAsync(async (dispatch) => {
    const response = await AuthAPI.setPassword(data.password, data.reset);

    new ResponseHandler(response, dispatch, () => {
      dispatch(PasswordForgotActions.setPasswordForgotten(false));
      dispatch(AuthActions.setAuthStatus(true));
      dispatch(UsersActions.setCurrentUser(response.data));
    });
  });
}

/*====================*/

export default PasswordForgotReducer;
