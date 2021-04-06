import Layout from "../../../../../react/roxine_frontend/Components/Layout/Layouts/Layout";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { GetCurrentUser } from "../../../redux/reducers/Users/CurrentUserReducer/UsersSelector";
import { GetCoinFlipLobby, GetCoinFlipResult } from "../../../redux/reducers/CoinFlip/CoinFlipSelector";
import { PlayCoinFlip } from "../../../redux/reducers/CoinFlip/CoinFlipReducer";
import CoinFlipSelfLobby from "../../../../../react/roxine_frontend/Components/Pages/Games/CoinFlip/CoinFlipGameStates/CoinFlipSelfLobby/CoinFlipSelfLobby";
import CoinFlipLobbyError from "../../../../../react/roxine_frontend/Components/Pages/Games/CoinFlip/CoinFlipGameStates/CoinFliplobbyError/CoinFlipLobbyError";
import CoinFlipLobbyMember from "../../../../../react/roxine_frontend/Components/Pages/Games/CoinFlip/CoinFlipLobby/CoinFlipLobbyMember/CoinFlipLobbyMember";
import NavLink from "../../../../../react/roxine_frontend/Components/Common/NavLink/NavLink";

/*====================*/

function CoinFlip() {
  const [isEnded, setEnded] = useState(false);

  /*====================*/

  const router = useRouter();
  const lobbyId = +router.query.id;

  const dispatch = useDispatch();

  /*====================*/

  const currentUser = useSelector(GetCurrentUser);
  const currentLobby = useSelector(GetCoinFlipLobby);
  const currentResult = useSelector(GetCoinFlipResult);

  /*====================*/

  const isSelfLobby = currentLobby && currentUser && currentUser.id === currentLobby.creator.id;
  const isWin = currentResult && currentResult.win;

  /*====================*/

  useEffect(() => {
    if (!isSelfLobby && currentLobby) {
      dispatch(PlayCoinFlip(lobbyId));
    }
  }, [lobbyId]);

  useEffect(() => {
    let timeout = setTimeout(() => {
      setEnded(true);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  /*====================*/

  return (
    <Layout centered title="Coin Flip">
      <section className="coin-flip full-size-block">
        <div className={`${isEnded ? "ended " : ""}coin-flip__status relative column full-size-block flex-container`}>
          {currentLobby && isSelfLobby ? (
            <CoinFlipSelfLobby />
          ) : !currentLobby || (!currentResult && isEnded) ? (
            <CoinFlipLobbyError />
          ) : (
            <>
              <div className="coin-flip__members content-space-between flex-container">
                <CoinFlipLobbyMember isEnded={isEnded} isWin={!isWin} isCreator member={currentLobby.creator} />
                <div className="coin-flip__versus">
                  <span className="gradient-text bold">VS</span>
                </div>
                <CoinFlipLobbyMember isEnded={isEnded} isWin={isWin} member={currentUser} />
              </div>
              <div className={`${isEnded && isWin ? "win " : ""}wide-line coin-flip__coin`}>
                <img src="/imgs/dollar.svg" alt="" />
              </div>
            </>
          )}

          <div className="flex-container content-center">
            <NavLink href="/games/coinflip">
              <a className="button">Назад</a>
            </NavLink>
          </div>
        </div>
      </section>
    </Layout>
  );
}

/*====================*/

export default CoinFlip;
