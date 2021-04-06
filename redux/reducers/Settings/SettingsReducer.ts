import { ThemeType } from "../../../types-interfaces/Content/Settings/Settings";
import ActionsType from "../../Types";
import { Reducer } from "redux";
import IBadge from "../../../types-interfaces/Content/Badge/IBadge";
import catchThunk from "../../../utils/redux/catchThunk";
import { AppActions, CreateMessage } from "../App/AppReducer";
import BadgesAPI from "../../../../../react/roxine_frontend/API/Badges/BadgesAPI";
import ResponseHandler from "../../../utils/ResponseHandler";
import { UsersActions } from "../Users/CurrentUserReducer/UsersReducer";

/*====================*/

const SET_THEME = "Roxine/Settings/SET-THEME";
const SET_SETTINGS = "Roxine/Settings/SET-SETTINGS";
const SET_BADGES = "Roxine/Settings/SET-BADGES";
const SET_ACTVIE_BADGE = "Roxine/Settings/SET-ACTIVE-BADGE";

/*====================*/

const initState = {
  settings: {
    theme: "dark" as ThemeType,
  },
  badges: [] as Array<IBadge>,
  activeBadgeId: -1,
};
type SettingsStateType = typeof initState;

/*====================*/

type Actions = ActionsType<typeof SettingsActions>;

/*====================*/

const SettingsReducer: Reducer<SettingsStateType, Actions> = function (state = initState, action) {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        settings: {
          ...state.settings,
          theme: action.payload.theme,
        },
      };
    case SET_SETTINGS:
      return {
        ...state,
        settings: action.payload.settings,
      };
    case SET_BADGES:
      return {
        ...state,
        badges: action.payload.badges,
      };
    case SET_ACTVIE_BADGE:
      return {
        ...state,
        activeBadgeId: action.payload.badgeId,
      };
    default:
      return state;
  }
};

/*====================*/

export const SettingsActions = {
  setTheme(theme: ThemeType) {
    return <const>{ type: SET_THEME, payload: { theme } };
  },

  setSettings(settings: any) {
    return <const>{ type: SET_SETTINGS, payload: { settings } };
  },

  setActiveBadge(badgeId: number) {
    return <const>{ type: SET_ACTVIE_BADGE, payload: { badgeId } };
  },

  setBadges(badges: Array<IBadge>) {
    return <const>{ type: SET_BADGES, payload: { badges } };
  },
};

/*====================*/

export function SetBadge(id: number) {
  return catchThunk(async (dispatch, getState) => {
    const response = await BadgesAPI.setBadge(id);

    new ResponseHandler(response, dispatch, (error) => {
      if (error) dispatch(CreateMessage(error));
      dispatch(SettingsActions.setActiveBadge(id));
      dispatch(UsersActions.setCurrentUserBadge(getState().settings.badges.find((badge) => badge.id === id)));
    });
  });
}

export function GetAllBadges() {
  return catchThunk(async (dispatch) => {
    dispatch(AppActions.setLoadingStatus(true));

    const response = await BadgesAPI.getBadges();

    new ResponseHandler(response, dispatch, () => {
      dispatch(SettingsActions.setBadges(response.data));
    });

    dispatch(AppActions.setLoadingStatus(false));
  });
}

/*====================*/

export default SettingsReducer;
