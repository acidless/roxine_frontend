import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SettingsActions } from "../redux/reducers/Settings/SettingsReducer";
import { AppActions, OnStart } from "../redux/reducers/App/AppReducer";
import { GetWebSocket } from "../redux/reducers/WebSocket/WebSocketSelector";
import { SetCoinFlipNotificationHandler } from "../redux/reducers/CoinFlip/CoinFlipReducer";

/*====================*/

const App: React.FC = function ({ children }) {
  /*====================*/

  const ws = useSelector(GetWebSocket);

  /*====================*/

  const dispatch = useDispatch();

  /*====================*/

  useEffect(() => {
    dispatch(SetCoinFlipNotificationHandler());
  }, [ws]);

  useEffect(() => {
    const settings = localStorage.getItem("settings");
    if (settings) {
      dispatch(SettingsActions.setSettings(JSON.parse(settings)));
    }

    dispatch(OnStart());
  }, []);

  useEffect(() => {
    if (window.innerWidth > 600) {
      dispatch(AppActions.setMenuActive(true));
    }
  }, []);

  /*====================*/

  return <>{children}</>;
};

/*====================*/

export default App;
