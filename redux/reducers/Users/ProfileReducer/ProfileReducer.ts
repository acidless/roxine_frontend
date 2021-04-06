import IUser from "../../../../types-interfaces/Content/Users/IUser";
import HistoryAnyObject from "../../../../types-interfaces/Content/HistoryObjects/HistoryAnyObject";
import ActionsType, { DispatchActions } from "../../../Types";
import { Dispatch, Reducer } from "redux";
import withLoading from "../../../../utils/redux/withLoading";
import UsersAPI from "../../../../../../react/roxine_frontend/API/Users/UsersAPI";
import ResponseHandler from "../../../../utils/ResponseHandler";
import catchThunk from "../../../../utils/redux/catchThunk";

/*====================*/

const SET_CURRENT_PROFILE = "Roxine/User/SET_CURRENT_PROFILE";
const SET_CURRENT_PROFILE_HISTORY = "Roxine/User/SET-CURRENT-PROFILE-HISTORY";
const SET_HISTORY_PAGE_STATUS = "Roxine/User/SET-HISTORY-PAGE-STATUS";

/*====================*/

const initState = {
  currentProfile: null as IUser | null,
  currentProfileHistory: [] as Array<HistoryAnyObject>,
  isHistoryPageLast: false,
};
export type ProfileStateType = typeof initState;

/*====================*/

type Actions = ActionsType<typeof ProfileActions>;

/*====================*/

const ProfileReducer: Reducer<ProfileStateType, Actions> = function (state = initState, action) {
  switch (action.type) {
    case SET_CURRENT_PROFILE:
      return {
        ...state,
        currentProfile: action.payload.profile,
      };
    case SET_CURRENT_PROFILE_HISTORY:
      return {
        ...state,
        currentProfileHistory: action.payload.history,
      };
    case SET_HISTORY_PAGE_STATUS:
      return {
        ...state,
        isHistoryPageLast: action.payload.value,
      };
    default:
      return state;
  }
};

/*====================*/

export const ProfileActions = {
  setCurrentProfile(profile: IUser) {
    return <const>{ type: SET_CURRENT_PROFILE, payload: { profile } };
  },

  setCurrentUserHistory(history: Array<HistoryAnyObject>) {
    return <const>{ type: SET_CURRENT_PROFILE_HISTORY, payload: { history } };
  },

  setHistoryPageStatus(value: boolean) {
    return <const>{ type: SET_HISTORY_PAGE_STATUS, payload: { value } };
  },
};

/*====================*/

export function GetProfile(profileId: number | "me") {
  return async function GetProfileThunk(dispatch: Dispatch<DispatchActions<Actions>>) {
    withLoading(dispatch, async () => {
      const response = await UsersAPI.getUser(profileId);

      new ResponseHandler(response, undefined, (err) => {
        if (err) {
          window.location.href = "/404";
        } else {
          dispatch(ProfileActions.setCurrentProfile(response.data));
        }
      });
    });
  };
}

export function GetHistory(profileId: number | "me", page: number = 0) {
  return catchThunk(async (dispatch: Dispatch<DispatchActions<Actions>>, getState) => {
    withLoading(dispatch, async () => {
      const response = await UsersAPI.getUserHistory(profileId, page);

      new ResponseHandler(response, dispatch, () => {
        dispatch(ProfileActions.setHistoryPageStatus(!response.data.length));

        if (page === 0) {
          dispatch(ProfileActions.setCurrentUserHistory(response.data));
        } else {
          dispatch(
            ProfileActions.setCurrentUserHistory([...getState().users.profile.currentProfileHistory, ...response.data])
          );
        }
      });
    });
  });
}

/*====================*/

export default ProfileReducer;
