import { useEffect } from "react";
import { useDispatch } from "react-redux";

/*====================*/

function useIdForDispatch(id: any, action: Function, condition: boolean = true) {
  const dispatch = useDispatch();

  /*====================*/

  useEffect(() => {
    if (id && condition) {
      dispatch(action(id));
    }
  }, [id]);
}

/*====================*/

export default useIdForDispatch;
