import { Selector } from "react-redux";
import { AppStateType } from "../../store";
import { LoginFormStates } from "../../../types-interfaces/Forms/RegisterTypes";

/*====================*/

export const GetRegisteredStatus: Selector<AppStateType, boolean> = (state) => state.auth.authMain.isRegistered;

export const GetRobloxStatus: Selector<AppStateType, string> = (state) => state.auth.authMain.robloxStatus;

export const GetAuthStatus: Selector<AppStateType, boolean> = (state) => state.auth.authMain.isAuth;

export const GetAuthLoadingStatus: Selector<AppStateType, boolean> = (state) => state.auth.authMain.isLoading;

export const GetAuthFormState: Selector<AppStateType, LoginFormStates> = (state) =>
  state.auth.authMain.currentAuthFormState;
