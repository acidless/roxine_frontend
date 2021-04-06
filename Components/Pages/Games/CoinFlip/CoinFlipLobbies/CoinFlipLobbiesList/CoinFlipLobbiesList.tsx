import Loader from "../../../../../Common/Loaders/Loader/Loader";
import CoinFlipLobby from "../CoinFlipLobby/CoinFlipLobby";
import ILobby from "../../../../../../types-interfaces/Content/Lobbies/Lobbies";
import { useSelector } from "react-redux";
import { GetCoinFlipLobbiesSelector } from "../../../../../../redux/reducers/CoinFlip/CoinFlipSelector";
import { GetLoadingStatus } from "../../../../../../redux/reducers/App/AppSelector";

/*====================*/

type PropsType = {
  setWarningFormActive: (value: boolean) => void;
};

/*====================*/

const CoinFlipLobbiesList: React.FC<PropsType> = function ({ setWarningFormActive }) {
  const coinFlipLobbies = useSelector(GetCoinFlipLobbiesSelector);
  const isLoading = useSelector(GetLoadingStatus);

  /*====================*/

  function sortLobbiesByTime(a: ILobby, b: ILobby) {
    return b.date - a.date;
  }

  function onLobbyClick() {
    setWarningFormActive(true);
  }

  /*====================*/

  return (
    <div className="lobbies grid-container content-center">
      {isLoading ? (
        <Loader />
      ) : (
        coinFlipLobbies.sort(sortLobbiesByTime).map((lobby) => {
          return <CoinFlipLobby onEnter={onLobbyClick} key={lobby.id} lobby={lobby} />;
        })
      )}
    </div>
  );
};

/*====================*/

export default CoinFlipLobbiesList;
