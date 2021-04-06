import ILobby from "../../../../../../types-interfaces/Content/Lobbies/Lobbies";
import { useDispatch } from "react-redux";
import { CoinFlipActions } from "../../../../../../redux/reducers/CoinFlip/CoinFlipReducer";
import CoinFlipLobbyAvatar from "./CoinFlipLobbyAvatar/CoinFlipLobbyAvatar";
import CoinFlipLobbyValue from "./CoinFlipLobbyValue/CoinFlipLobbyValue";

/*====================*/

type PropsType = {
  lobby: ILobby;
  onEnter: (event: React.MouseEvent) => any;
};

/*====================*/

const CoinFlipLobby: React.FC<PropsType> = function ({ onEnter, lobby }) {
  const dispatch = useDispatch();

  /*====================*/

  function onClick(event: React.MouseEvent) {
    onEnter(event);
    dispatch(CoinFlipActions.setCurrentLobby(lobby));
  }

  return (
    <div className="lobbies__lobby relative">
      <button onClick={onClick} className="default-btn column full-size-block flex-container">
        <CoinFlipLobbyAvatar avatar={lobby.creator.avatar} />
        <CoinFlipLobbyValue bet={lobby.bet} />
      </button>
    </div>
  );
};

/*====================*/

export default CoinFlipLobby;
