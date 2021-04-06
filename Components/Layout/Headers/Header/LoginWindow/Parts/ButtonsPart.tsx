import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AuthActions } from "../../../../../../redux/reducers/Auth/AuthReducer";
import { LoginFormStates } from "../../../../../../types-interfaces/Forms/RegisterTypes";

/*====================*/

type ButtonsPropsType = {
  submitForm: Function;
  onNextClick: Function;
  setWindowEvents: (...args: any) => any;
  currentAuthFormState: LoginFormStates;
};

/*====================*/

const ButtonsPart: React.FC<ButtonsPropsType> = function ({
  currentAuthFormState,
  setWindowEvents,
  onNextClick,
  submitForm,
}) {
  useEffect(() => {
    setWindowEvents({
      onKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
        if (e.key === "Enter") {
          nextFormPart();
        }
      },
    });
  }, [onNextClick]);

  /*====================*/

  const dispatch = useDispatch();

  /*====================*/

  const [previousStates, setPreviousStates] = useState([]);

  /*====================*/

  async function prevFormPart() {
    if (previousStates.length) {
      dispatch(AuthActions.setAuthFormState(previousStates[-1]));
      setPreviousStates([...previousStates.slice(0, previousStates.length)]);
    }
  }

  /*====================*/

  async function nextFormPart() {
    onNextClick();

    if (currentAuthFormState === LoginFormStates.PASSWORD) {
      submitForm();
      setPreviousStates([]);
    } else {
      setPreviousStates([...previousStates, currentAuthFormState]);
    }
  }

  /*====================*/

  return (
    <div className="login-form__buttons content-space-between flex-container">
      <button type="button" onClick={prevFormPart} className="button_dark">
        <span className="text--bright">Назад</span>
      </button>
      <button type="button" onClick={nextFormPart} className="button_dark">
        <span className="text--bright">Далее</span>
      </button>
    </div>
  );
};

/*====================*/

export default ButtonsPart;
