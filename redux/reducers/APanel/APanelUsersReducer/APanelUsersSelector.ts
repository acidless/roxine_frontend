import { Selector } from "react-redux";
import { AppStateType } from "../../../store";
import IUser from "../../../../types-interfaces/Content/Users/IUser";

/*====================*/

export const GetApanelUsersSelector: Selector<AppStateType, Array<IUser>> = (state) => state.aPanel.users.users;

export const GetCurrentApanelUser: Selector<AppStateType, IUser | null> = (state) => state.aPanel.users.currentUser;
