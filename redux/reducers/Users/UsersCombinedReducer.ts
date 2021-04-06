import { combineReducers } from "redux";
import UsersReducer from "./CurrentUserReducer/UsersReducer";
import ProfileReducer from "./ProfileReducer/ProfileReducer";

/*====================*/

export default combineReducers({
  users: UsersReducer,
  profile: ProfileReducer,
});
