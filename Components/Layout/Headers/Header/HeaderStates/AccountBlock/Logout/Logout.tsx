import { useState } from "react";
import CorrectionWindow from "../../../../../../Common/Windows/CorrectionWindow/CorrectionWindow";

type PropsType = {
  onClick: (event: React.MouseEvent) => any;
};

/*====================*/

const Logout: React.FC<PropsType> = function ({ onClick }) {
  const [isLogoutWindowActive, setLogoutWindowActive] = useState(false);

  /*====================*/

  return (
    <>
      <button
        onClick={() => {
          setLogoutWindowActive(true);
        }}
        className="header__logout relative default-btn"
      >
        <span className="material-icons">exit_to_app</span>
      </button>
      <CorrectionWindow
        title="Выход"
        text="Вы действительно хотите выйти из аккаунта?"
        isOpened={isLogoutWindowActive}
        toggleOpen={setLogoutWindowActive}
        onAccept={onClick}
      />
    </>
  );
};

/*====================*/

export default Logout;
