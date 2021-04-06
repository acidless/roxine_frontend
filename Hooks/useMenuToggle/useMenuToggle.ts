import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { AppActions } from "../../redux/reducers/App/AppReducer";

/*====================*/

function useMenuToggle() {
  const dispatch = useDispatch();

  /*====================*/

  useEffect(() => {
    if (window.innerWidth <= 600) {
      dispatch(AppActions.setMenuActive(false));
    }
  }, []);
}

/*====================*/

export default useMenuToggle;
