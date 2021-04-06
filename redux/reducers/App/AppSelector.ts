import { Selector } from "react-redux";
import { AppStateType } from "../../store";

/*====================*/

export const GetMessage: Selector<AppStateType, any> = (state) => state.app.message;

export const GetLoadingStatus: Selector<AppStateType, boolean> = (state) => state.app.isLoading;

export const GetMenuActive: Selector<AppStateType, boolean> = (state) => state.app.isMenuOpen;
