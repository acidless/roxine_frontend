import FieldContainer, { IFieldInfo } from "../../../../../../Common/Inputs/FieldContainer/FieldContainer";
import { useRef, useState } from "react";
import MessageBox from "../../../../../../Common/MessageBox/MessageBox";
import copyValue from "../../../../../../../utils/copyValue";

/*====================*/

type PropsType = IFieldInfo & {
  status: string;
};

/*====================*/

const RobloxStatusField: React.FC<PropsType> = function ({ status, error, touched }) {
  const [isNotificationActive, setNotificationActive] = useState(false);

  /*====================*/

  const statusField = useRef<HTMLInputElement>(null);

  /*====================*/

  function copyStatusHandler() {
    copyValue(statusField.current, setNotificationActive);
  }

  /*====================*/

  return (
    <FieldContainer
      value={status}
      innerRef={statusField}
      error={error}
      touched={touched}
      type="text"
      name="robloxStatus"
      id="robloxStatus"
      readOnly
    >
      <div className="relative flex-container content">
        <button onClick={copyStatusHandler} type="button" className="default-btn flex-container">
          <span className="material-icons">content_copy</span>
        </button>
        <MessageBox isRight isOpened={isNotificationActive} toggleOpen={setNotificationActive} message="Скопировано!" />
      </div>
    </FieldContainer>
  );
};

/*====================*/

export default RobloxStatusField;
