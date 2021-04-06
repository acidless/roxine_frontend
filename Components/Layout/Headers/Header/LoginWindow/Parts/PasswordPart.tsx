import { useEffect } from "react";
import FormPartType from "../../../../../../types-interfaces/Forms/FormPartType";
import { setPassword } from "../../../../../../redux/reducers/Auth/AuthReducer";
import { useDispatch } from "react-redux";
import PasswordField from "../Fields/PasswordField/PasswordField";
import { ForgotPassword } from "../../../../../../redux/reducers/Auth/PasswordForgotReducer/PasswordForgotReducer";

/*====================*/

type PropsType = FormPartType & {
  isRegistered: boolean;
  password: string;
  name: string;
};

/*====================*/

const PasswordPart: React.FC<PropsType> = function ({ changeFormEvents, name, password, isRegistered, fieldValues }) {
  /*====================*/

  const dispatch = useDispatch();

  /*====================*/

  function passwordForgotClick() {
    dispatch(ForgotPassword(name));
  }

  /*====================*/

  useEffect(() => {
    changeFormEvents({
      onNextClick: () => {
        dispatch(setPassword(password));
      },
    });
  }, [password]);

  /*====================*/
  return (
    <div>
      <h2 className="gradient-text align-center line">{isRegistered ? "Мы нашли вас!" : "Прекрасно!"}</h2>
      <div className="line">
        <label htmlFor="password line">
          {isRegistered ? "Введите пароль от учетной записи" : "Теперь введите пароль от вашей новой учётной записи!"}
        </label>
        <PasswordField error={fieldValues.error} touched={fieldValues.touched} />
      </div>
      {isRegistered && (
        <button type="button" onClick={passwordForgotClick} className="default-btn link-in-text">
          Забыли пароль?
        </button>
      )}
    </div>
  );
};

/*====================*/

export default PasswordPart;
