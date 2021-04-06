import LiveRowItems from "./LiveRowItems/LiveRowItems";
import { SetItemWSHandler } from "../../../../../../redux/reducers/LiveRow/LiveRowReducer";
import { useDispatch, useSelector } from "react-redux";
import { GetWebSocket } from "../../../../../../redux/reducers/WebSocket/WebSocketSelector";
import { useEffect } from "react";

/*====================*/

function LiveRow() {
  const ws = useSelector(GetWebSocket);

  /*====================*/

  const dispatch = useDispatch();

  /*====================*/

  useEffect(() => {
    dispatch(SetItemWSHandler());
  }, [ws]);

  /*====================*/

  return (
    <div className="header__live-row">
      <hr />
      <div className="flex-container live-row__content align-items-stretch">
        <h2 className="text--bright align-center">Live Лента</h2>
        <LiveRowItems />
      </div>
    </div>
  );
}

/*====================*/

export default LiveRow;
