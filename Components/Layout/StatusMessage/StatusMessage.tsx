import { useSelector } from "react-redux";
import { useState } from "react";
import { GetMessage } from "../../../redux/reducers/App/AppSelector";
import useTimeoutActive from "../../../Hooks/useTimeoutActive/useTimeoutActive";
import StatusMessageIcon from "./StatusMessageIcon/StatusMessageIcon";
import StatusMessageText from "./StatusMessageText/StatusMessageText";
import StatusMessageCloseButton from "./StatusMessageCloseButton/StatusMessageCloseButton";

/*====================*/

function StatusMessage() {
  const [isActive, setErrorActive] = useState(false);

  /*====================*/

  const message = useSelector(GetMessage);

  /*====================*/

  useTimeoutActive(message, message.text, setErrorActive, message.time);

  /*====================*/

  return (
    <div
      className={`${isActive ? "active " : ""}${
        message.isError ? "global-error" : "global-message"
      } global-info align-items-stretch flex-container`}
    >
      <StatusMessageIcon isError={message.isError} />
      <StatusMessageText title={message.title} text={message.text} />
      <StatusMessageCloseButton onClick={setErrorActive} />
    </div>
  );
}

/*====================*/

export default StatusMessage;
