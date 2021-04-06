import { Selector } from "react-redux";
import { AppStateType } from "../../../store";

/*====================*/

export const GetPasswordForgottenStatus: Selector<AppStateType, boolean> = (state) =>
  state.auth.passwordForgot.isPasswordForgotten;
