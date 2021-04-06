import {useEffect} from "react";
import {useSelector} from "react-redux";
import {GetCurrentTheme, GetSettings} from "../../redux/reducers/Settings/SettingsSelector";

/*====================*/

function useTheme(){
    const currentTheme = useSelector(GetCurrentTheme);
    const settings = useSelector(GetSettings);

    /*====================*/

    useEffect(() => {
        setTimeout(() => {
            localStorage.setItem("settings", JSON.stringify(settings));
        }, 200);
    }, [settings]);

    return currentTheme;
}

/*====================*/

export default useTheme;