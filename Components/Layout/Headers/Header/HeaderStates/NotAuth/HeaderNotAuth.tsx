import LoginWindow from "../../LoginWindow/LoginWindow";
import { useEffect, useState } from "react";
import PasswordForgotWindow from "../../PasswordForgotWindow/PasswordForgotWindow";
import LoginButton from "./LoginButton/LoginButton";

/*====================*/

type PropsType = {
  isActive: boolean;
};

/*====================*/

const HeaderNotAuth: React.FC<PropsType> = function ({ isActive }) {
  const [isLoginWindowOpened, toggleLoginWindow] = useState(false);

  /*====================*/

  useEffect(() => {
    if (!isActive) {
      toggleLoginWindow(false);
    }
  }, [isActive]);

  /*====================*/

  return (
    <div className={isActive ? "active" : "inactive"}>
      <LoginButton onClick={toggleLoginWindow} />
      <PasswordForgotWindow />
      <LoginWindow toggleLoginWindow={toggleLoginWindow} isLoginWindowOpened={isLoginWindowOpened} />
    </div>
  );
};

/*====================*/

export default HeaderNotAuth;
