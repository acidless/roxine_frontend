import CaseOpenMode from "../../CaseOpenMode/CaseOpenMode";
import ICase from "../../../../../../types-interfaces/Content/Cases/ICase";

/*====================*/

type PropsType = {
  StartOpenCaseHandle: (event: React.MouseEvent) => any;
  currentOpenMode: number;
  setCurrentOpenMode: Function;
  currentCase: ICase;
};

/*====================*/

const CaseNotOpened: React.FC<PropsType> = function ({
  currentOpenMode,
  currentCase,
  setCurrentOpenMode,
  StartOpenCaseHandle,
}) {
  return (
    <>
      <div className="flex-container column align-items-stretch">
        <button onClick={StartOpenCaseHandle}>Открыть</button>
        <CaseOpenMode currentMode={currentOpenMode} setCurrentMode={setCurrentOpenMode} />
      </div>

      <p className="case__sum-price gradient-text flex-container">
        Общая стоимость: {currentCase.price * currentOpenMode}
        <img className="animated-icon small-icon" src="/imgs/dollar.svg" alt="" />
      </p>
    </>
  );
};

/*====================*/

export default CaseNotOpened;
