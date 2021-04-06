import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import CasesReducer from "./reducers/Cases/CasesReducer";
import AuthReducer from "./reducers/Auth/AuthReducer";
import SettingsReducer from "./reducers/Settings/SettingsReducer";
import AppReducer from "./reducers/App/AppReducer";
import CoinFlipReducer from "./reducers/CoinFlip/CoinFlipReducer";
import LiveRowReducer from "./reducers/LiveRow/LiveRowReducer";
import APanelCombinedReducer from "./reducers/APanel/APanelCombinedReducer";
import UsersCombinedReducer from "./reducers/Users/UsersCombinedReducer";
import WebSocketReducer from "./reducers/WebSocket/WebSocketReducer";
import MarketReducer from "./reducers/Market/MarketReducer";

/*====================*/

const rootReducer = combineReducers({
  app: AppReducer,
  auth: AuthReducer,
  liveRow: LiveRowReducer,
  cases: CasesReducer,
  users: UsersCombinedReducer,
  coinFlip: CoinFlipReducer,
  settings: SettingsReducer,
  aPanel: APanelCombinedReducer,
  webSocket: WebSocketReducer,
  market: MarketReducer,
});
export type AppStateType = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, applyMiddleware(thunk));

/*====================*/

export default store;
