import OpenModeButton from "./OpenModeInput/OpenModeInput";

/*====================*/

export type OpenModePropsType = {
  currentMode: number;
  setCurrentMode: any;
};

/*====================*/

const CaseOpenMode: React.FC<OpenModePropsType> = function ({ currentMode, setCurrentMode }) {
  return (
    <div className="case__mode-buttons">
      <OpenModeButton currentMode={currentMode} setCurrentMode={setCurrentMode} value={1} />
      <OpenModeButton currentMode={currentMode} setCurrentMode={setCurrentMode} value={2} />
      <OpenModeButton currentMode={currentMode} setCurrentMode={setCurrentMode} value={3} />
    </div>
  );
};

/*====================*/

export default CaseOpenMode;
