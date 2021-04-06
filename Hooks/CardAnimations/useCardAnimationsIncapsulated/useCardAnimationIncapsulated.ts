import { useEffect, useState } from "react";
import useCardAnimation from "../useCardAnimation/useCardAnimation";

/*====================*/

function useCardAnimationIncapsulated(useItOn: any, element: HTMLElement) {
  const [isAnimationFinished, setAnimationFinished] = useState(true);

  /*====================*/

  useEffect(() => {
    useCardAnimation(element, setAnimationFinished, setAnimationFinished);
  }, [useItOn]);

  return isAnimationFinished;
}

/*====================*/

export default useCardAnimationIncapsulated;
