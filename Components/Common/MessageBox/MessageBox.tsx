import useTimeoutActive from "../../../Hooks/useTimeoutActive/useTimeoutActive";
import { IMessageWindow } from "../Windows/MessageWindow/MessageWindow";

/*====================*/

type PropsType = IMessageWindow & {
  message: string;
  isRight?: boolean;
};

/*====================*/

const MessageBox: React.FC<PropsType> = function ({ isRight, message, isOpened, toggleOpen }) {
  useTimeoutActive(isOpened, isOpened, (value: boolean) => {
    toggleOpen(value);
  });

  /*====================*/

  return (
    <div className={`${isRight ? "right" : "left"} ${isOpened ? "active " : ""}message-box`}>
      <p className="text--bright">{message}</p>
    </div>
  );
};

/*====================*/

export default MessageBox;
