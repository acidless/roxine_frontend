import { useEffect, useState } from "react";
import FormPartType from "../../../../../../types-interfaces/Forms/FormPartType";
import { useDispatch } from "react-redux";
import { verify } from "../../../../../../redux/reducers/Auth/AuthReducer";
import RobloxStatusField from "../Fields/RobloxStatusField/RobloxStatusField";
import MessageBox from "../../../../../Common/MessageBox/MessageBox";

/*====================*/

const RobloxStatusPart: React.FC<FormPartType & { status: string }> = function ({
  changeFormEvents,
  status,
  fieldValues,
}) {
  const [isForWhatMessageActive, setForWhatMessageActive] = useState(false);

  /*====================*/

  const dispatch = useDispatch();

  /*====================*/

  useEffect(() => {
    changeFormEvents({
      onNextClick: () => {
        dispatch(verify());
      },
    });
  }, []);

  /*====================*/

  return (
    <div>
      <h2 className="gradient-text align-center line">Вы у нас впервые?</h2>
      <div className="line">
        <label className="align-items-start flex-container column line" htmlFor="robloxStatus">
          <div className="line">Установите следующий статус в вашем профиле роблокс (Profile -{">"} About)</div>
          <div>
            <span className="text--bright">Не забудьте убрать этот статус позже!</span>
          </div>
        </label>
        <RobloxStatusField status={status} error={fieldValues.error} touched={fieldValues.touched} />
      </div>
      <div className="relative">
        <button
          onClick={() => {
            setForWhatMessageActive(true);
          }}
          type="button"
          className="default-btn link-in-text"
        >
          Зачем это нужно?
        </button>
        <MessageBox
          isOpened={isForWhatMessageActive}
          toggleOpen={setForWhatMessageActive}
          message="Таким образом вы доказываете, что аккаунт принадлeжит вам."
        />
      </div>
    </div>
  );
};

/*====================*/

export default RobloxStatusPart;
