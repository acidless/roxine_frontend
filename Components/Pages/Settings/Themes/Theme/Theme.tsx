import { ThemeType } from "../../../../../types-interfaces/Content/Settings/Settings";
import { useContext } from "react";
import { CurrentTheme } from "../Themes";

/*====================*/

type PropsType = {
  theme: ThemeType;
};

/*====================*/

const Theme: React.FC<PropsType> = function ({ theme }) {
  const [currentTheme, setTheme] = useContext(CurrentTheme);

  /*====================*/

  return (
    <button
      onClick={() => {
        setTheme(theme);
      }}
      className={`${theme === currentTheme ? "active " : ""}${theme} theme-example default-btn`}
    >
      <div className="theme-example__selected flex-container full-size-block">
        <span className="material-icons text--bright">done</span>
      </div>
    </button>
  );
};

/*====================*/

export default Theme;
