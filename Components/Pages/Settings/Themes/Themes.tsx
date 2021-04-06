import { SettingsActions } from "../../../../redux/reducers/Settings/SettingsReducer";
import { ThemeType } from "../../../../types-interfaces/Content/Settings/Settings";
import { useDispatch, useSelector } from "react-redux";
import { GetCurrentTheme } from "../../../../redux/reducers/Settings/SettingsSelector";
import Theme from "./Theme/Theme";
import React from "react";

/*====================*/

type ContextType = [string, (theme: ThemeType) => void];
export const CurrentTheme = React.createContext<ContextType>(["dark", () => {}]);

/*====================*/

function Themes() {
  const theme = useSelector(GetCurrentTheme);
  /*====================*/

  const dispatch = useDispatch();

  /*====================*/

  function setTheme(theme: ThemeType) {
    dispatch(SettingsActions.setTheme(theme));
  }

  /*====================*/

  return (
    <div className="settings__line">
      <div className="settings__title flex-container line">
        <span className="material-icons gradient-text">palette</span>
        <p className="text--bright">Тема</p>
      </div>
      <div className="settings__content paddinged block">
        <CurrentTheme.Provider value={[theme, setTheme]}>
          <div className="themes">
            <Theme theme="dark" />
            <Theme theme="ocean" />
            <Theme theme="light-ocean" />
          </div>
        </CurrentTheme.Provider>
      </div>
    </div>
  );
}

/*====================*/

export default Themes;
