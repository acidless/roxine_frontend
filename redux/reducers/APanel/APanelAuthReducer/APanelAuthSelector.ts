import { Selector } from "react-redux";
import { AppStateType } from "../../../store";

/*====================*/

export const GetAdminStatus: Selector<AppStateType, boolean> = (state) => state.aPanel.auth.isAdmin;
