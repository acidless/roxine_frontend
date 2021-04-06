import { Selector } from "react-redux";
import { AppStateType } from "../../store";
import { ThemeType } from "../../../types-interfaces/Content/Settings/Settings";
import IBadge from "../../../types-interfaces/Content/Badge/IBadge";

/*====================*/

export const GetCurrentTheme: Selector<AppStateType, ThemeType> = (state) => state.settings.settings.theme;

export const GetSettings: Selector<AppStateType, any> = (state) => state.settings.settings;

export const GetBadges: Selector<AppStateType, Array<IBadge>> = (state) => state.settings.badges;

export const GetActiveBadgeId: Selector<AppStateType, number> = (state) => state.settings.activeBadgeId;
