import { useDispatch } from "react-redux";
import { useEffect } from "react";

/*====================*/

function useDispatchOnMount(action: Function) {
  const dispatch = useDispatch();

  /*====================*/

  useEffect(() => {
    dispatch(action());
  }, []);
}

/*====================*/

export default useDispatchOnMount;
