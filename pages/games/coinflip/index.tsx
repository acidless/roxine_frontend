import Layout from "../../../../../react/roxine_frontend/Components/Layout/Layouts/Layout";
import { useState } from "react";
import { useSelector } from "react-redux";
import { GetCoinFlipLobbies } from "../../../redux/reducers/CoinFlip/CoinFlipReducer";
import { GetCoinFlipLobby } from "../../../redux/reducers/CoinFlip/CoinFlipSelector";
import CoinFlipEnterLobbyWarning from "../../../../../react/roxine_frontend/Components/Pages/Games/CoinFlip/CoinFlipEnterLobbyWarning/CoinFlipEnterLobbyWarning";
import useDispatchOnMount from "../../../../../react/roxine_frontend/Hooks/useDispatchOnMount/useDispatchOnMount";
import CoinFlipRules from "../../../../../react/roxine_frontend/Components/Pages/Games/CoinFlip/CoinFlipLobbies/CoinFlipRules/CoinFlipRules";
import CoinFlipCreateLobbyButton from "../../../../../react/roxine_frontend/Components/Pages/Games/CoinFlip/CoinFlipLobbies/CoinFlipCreateLobbyButton/CoinFlipCreateLobbyButton";
import CoinFlipLobbiesList from "../../../../../react/roxine_frontend/Components/Pages/Games/CoinFlip/CoinFlipLobbies/CoinFlipLobbiesList/CoinFlipLobbiesList";

/*====================*/

function CoinFlipLobbies() {
  const [isWarningFormActive, setWarningFormActive] = useState(false);

  /*====================*/

  const currentCoinFlipLobby = useSelector(GetCoinFlipLobby);

  /*====================*/

  useDispatchOnMount(GetCoinFlipLobbies);

  /*====================*/

  return (
    <Layout title="Coin Flip Lobbies">
      <section>
        <h2 className="custom-heading">Coin Flip лобби</h2>
        <div className="flex-container lobbies-wrapper align-items-start">
          <div className="left-block column align-items-stretch flex-container">
            <CoinFlipRules />
            <CoinFlipCreateLobbyButton />
          </div>
          <CoinFlipLobbiesList setWarningFormActive={setWarningFormActive} />
        </div>
      </section>
      <CoinFlipEnterLobbyWarning
        toggleOpen={setWarningFormActive}
        isOpened={isWarningFormActive}
        currentLobby={currentCoinFlipLobby}
      />
    </Layout>
  );
}

/*====================*/

export default CoinFlipLobbies;
