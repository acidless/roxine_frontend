import { OpenModePropsType } from "../CaseOpenMode";

/*====================*/

type PropsType = OpenModePropsType & {
  value: number;
};

/*====================*/

const OpenModeButton: React.FC<PropsType> = function ({ currentMode, setCurrentMode, value }) {
  function HandleCurrentMode() {
    setCurrentMode(value);
  }

  /*====================*/

  return (
    <button
      className={`${currentMode === value ? "active text--bright" : ""}button button_dark`}
      onClick={HandleCurrentMode}
    >
      <span className="text--bright">{value}</span>
    </button>
  );
};

/*====================*/

export default OpenModeButton;
