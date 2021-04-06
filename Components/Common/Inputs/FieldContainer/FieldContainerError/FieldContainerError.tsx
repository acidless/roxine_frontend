import { useState } from "react";
import useTimeoutActive from "../../../../../Hooks/useTimeoutActive/useTimeoutActive";
import FieldContainerErrorButton from "./FieldContainerErrorButton/FieldContainerErrorButton";

/*====================*/

type PropsType = {
  error?: string;
};

/*====================*/

const FieldContainerError: React.FC<PropsType> = function ({ error }) {
  const [isErrorShowing, toggleError] = useState(false);

  /*====================*/

  useTimeoutActive(isErrorShowing, isErrorShowing, toggleError);

  /*====================*/

  return (
    <>
      <FieldContainerErrorButton toggleError={toggleError} />
      <div className={`${isErrorShowing ? "active " : ""}error-block`}>{error}</div>
    </>
  );
};

/*====================*/

export default FieldContainerError;
