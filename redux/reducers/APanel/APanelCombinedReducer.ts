import { combineReducers } from "redux";
import APanelMainReducer from "./APanelMainReducer/APanelMainReducer";
import APanelAuthReducer from "./APanelAuthReducer/APanelAuthReducer";
import APanelWithdrawsReducer from "./APanelWithdrawsReducer/APanelWithdrawsReducer";
import APanelUsersReducer from "./APanelUsersReducer/APanelUsersReducer";

/*====================*/

export default combineReducers({
  auth: APanelAuthReducer,
  main: APanelMainReducer,
  withdraws: APanelWithdrawsReducer,
  users: APanelUsersReducer,
});
