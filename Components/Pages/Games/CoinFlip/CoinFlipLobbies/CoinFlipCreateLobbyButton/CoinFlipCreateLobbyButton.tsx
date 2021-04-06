import { useSelector } from "react-redux";
import { GetAuthStatus } from "../../../../../../redux/reducers/Auth/AuthSelector";
import { useState } from "react";
import CoinFlipCreateLobbyWindow from "./CoinFlipCreateLobbyWindow/CoinFlipCreateLobbyWindow";

/*====================*/

function CoinFlipCreateLobbyButton() {
  const [isCreatingFormActive, setCreatingFormActive] = useState(false);

  /*====================*/

  const isAuth = useSelector(GetAuthStatus);

  /*====================*/

  function openCreatingWindow() {
    setCreatingFormActive(true);
  }

  /*====================*/

  return (
    <>
      <div className="lobby-create flex-container">
        {isAuth ? (
          <button onClick={openCreatingWindow}>Создать лобби</button>
        ) : (
          <p className="full-size-block gradient-text">Авторизуйтесь для создания лобби.</p>
        )}
      </div>
      <CoinFlipCreateLobbyWindow isOpened={isCreatingFormActive} toggleOpen={setCreatingFormActive} />
    </>
  );
}

/*====================*/

export default CoinFlipCreateLobbyButton;
