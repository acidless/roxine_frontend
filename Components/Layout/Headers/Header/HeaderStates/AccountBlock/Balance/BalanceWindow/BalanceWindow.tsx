import MessageWindow, { IMessageWindow } from "../../../../../../../Common/Windows/MessageWindow/MessageWindow";
import { useState } from "react";
import AddBalanceWindow from "../AddBalanceWindow/AddBalanceWindow";
import WithdrawWindow from "../WithdrawWindow/WithdrawWindow";

/*====================*/

const BalanceWindow: React.FC<IMessageWindow> = function ({ isOpened, toggleOpen }) {
  const [isAddBalanceWindowActive, setAddBalanceWindowActive] = useState(false);
  const [isWithdrawWindowActive, setWithdrawWindowActive] = useState(false);

  /*====================*/

  function setAddBalanceWindowOpened() {
    setAddBalanceWindowActive(true);
    toggleOpen(false);
  }

  function setWithdrawWindowOpened() {
    setWithdrawWindowActive(true);
    toggleOpen(false);
  }

  /*====================*/

  return (
    <>
      <MessageWindow toggleOpen={toggleOpen} isOpened={isOpened}>
        <div className="paddinged flex-container content-space-between">
          <button onClick={setAddBalanceWindowOpened} className="button_dark button-with-icon">
            <p className="flex-container column text--bright">
              <span className="material-icons">add_circle_outline</span>
              Пополнить
            </p>
          </button>
          <button onClick={setWithdrawWindowOpened} className="button-with-icon button_dark">
            <p className="flex-container column text--bright">
              <span className="material-icons rotated">reply_all</span>
              Вывести
            </p>
          </button>
        </div>
      </MessageWindow>
      <AddBalanceWindow isOpened={isAddBalanceWindowActive} toggleOpen={setAddBalanceWindowActive} />
      <WithdrawWindow isOpened={isWithdrawWindowActive} toggleOpen={setWithdrawWindowActive} />
    </>
  );
};

/*====================*/

export default BalanceWindow;
