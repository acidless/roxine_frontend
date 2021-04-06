import ActionsType from "../../../Types";
import { Reducer } from "redux";
import AdminPanelTypes from "../../../../types-interfaces/Forms/AdminPanelTypes";
import catchThunk from "../../../../utils/redux/catchThunk";
import withLoading from "../../../../utils/redux/withLoading";
import ResponseHandler from "../../../../utils/ResponseHandler";
import APanelAuthAPI from "../../../../../../react/roxine_frontend/API/APanel/APanelAuthAPI";

/*====================*/

const SET_ADMIN_STATUS = "Roxine/APanel/SET_ADMIN_STATUS";

/*====================*/

const initState = {
  isAdmin: false,
};
type APanelAuthStateType = typeof initState;

/*====================*/

type Actions = ActionsType<typeof APanelAuthActions>;

/*====================*/

const APanelAuthReducer: Reducer<APanelAuthStateType, Actions> = function (state = initState, action) {
  switch (action.type) {
    case SET_ADMIN_STATUS:
      return {
        ...state,
        isAdmin: action.payload.status,
      };
    default:
      return state;
  }
};

/*====================*/

export const APanelAuthActions = {
  setAdminStatus(status: boolean) {
    return <const>{ type: SET_ADMIN_STATUS, payload: { status } };
  },
};

/*====================*/

export function AdminLogin(data: AdminPanelTypes) {
  return catchThunk(async (dispatch) => {
    withLoading(dispatch, async () => {
      const response = await APanelAuthAPI.login(data);

      new ResponseHandler(response, dispatch, () => {
        dispatch(APanelAuthActions.setAdminStatus(true));
      });
    });
  });
}

export function AdminAuth() {
  return catchThunk(async (dispatch) => {
    const response = await APanelAuthAPI.auth();

    new ResponseHandler(response, undefined, (err) => {
      if (!err) {
        dispatch(APanelAuthActions.setAdminStatus(true));
      }
    });
  });
}

/*====================*/

export default APanelAuthReducer;
