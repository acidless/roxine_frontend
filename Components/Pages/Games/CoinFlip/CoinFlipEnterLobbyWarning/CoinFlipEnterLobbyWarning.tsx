import Link from "next/link";
import MessageWindow, { IMessageWindow } from "../../../../Common/Windows/MessageWindow/MessageWindow";
import ILobby from "../../../../../types-interfaces/Content/Lobbies/Lobbies";
import { useSelector } from "react-redux";
import { GetCurrentUser } from "../../../../../redux/reducers/Users/CurrentUserReducer/UsersSelector";

/*====================*/

type PropsType = IMessageWindow & {
  currentLobby: null | ILobby;
};

/*====================*/

const CoinFlipEnterLobbyWarning: React.FC<PropsType> = function ({ currentLobby, isOpened, toggleOpen }) {
  const currentUser = useSelector(GetCurrentUser);

  /*====================*/

  return (
    <MessageWindow toggleOpen={toggleOpen} isOpened={isOpened}>
      <div className="flex-container small-container paddinged column full-size-block">
        {!currentUser ? (
          <p className="text--white alig-left">Вы должны войти в аккаунт, чтобы сыграть.</p>
        ) : currentLobby && currentUser.id === currentLobby.creator.id ? (
          <p className="text--white alig-left">
            Это ваше лобби. После того, как к вам зайдет второй игрок, мы пришлем уведомление о результате игры.
          </p>
        ) : (
          <>
            <p className="line text--white">
              После того, как вы продолжите, игра сразу начнется. Вы уверены, что хотите начать игру?
            </p>
            <Link href={`/games/coinflip/${currentLobby?.id}`}>
              <a className="button">Продолжить</a>
            </Link>
          </>
        )}
      </div>
    </MessageWindow>
  );
};

/*====================*/

export default CoinFlipEnterLobbyWarning;
