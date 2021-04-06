import BalanceDifference from "../BalanceDifference/BalanceDifference";
import { useState } from "react";
import BalanceWindow from "./BalanceWindow/BalanceWindow";

/*====================*/

type PropsType = {
  balance: number;
};

/*====================*/

const Balance: React.FC<PropsType> = function ({ balance }) {
  const [balanceWindowActive, setBalanceWindowActive] = useState(false);

  /*====================*/

  return (
    <div className="header__profile-balance relative flex-container">
      <span className="gradient-text bold">{balance || 0}</span>
      <img className="small-icon animated-icon" src="/imgs/dollar.svg" alt="" />
      <button
        onClick={() => {
          setBalanceWindowActive(true);
        }}
        className="profile-balance__add default-btn flex-container"
      >
        <span className="material-icons bold">add</span>
      </button>
      <BalanceDifference />
      <BalanceWindow isOpened={balanceWindowActive} toggleOpen={setBalanceWindowActive} />
    </div>
  );
};

/*====================*/

export default Balance;
