import MessageWindow from "../../../../Common/Windows/MessageWindow/MessageWindow";
import { useDispatch, useSelector } from "react-redux";
import { GetRobloxStatus } from "../../../../../redux/reducers/Auth/AuthSelector";
import RadioButton from "../../../../Common/Inputs/RadioButton/RadioButton";
import { Form, Formik } from "formik";
import PasswordField from "../LoginWindow/Fields/PasswordField/PasswordField";
import RobloxStatusField from "../LoginWindow/Fields/RobloxStatusField/RobloxStatusField";
import { GetPasswordForgottenStatus } from "../../../../../redux/reducers/Auth/PasswordForgotReducer/PasswordForgotSelector";
import {
  PasswordForgotActions,
  ResetPassword,
} from "../../../../../redux/reducers/Auth/PasswordForgotReducer/PasswordForgotReducer";

/*====================*/

const PasswordForgotWindow = function () {
  const isPasswordForgotten = useSelector(GetPasswordForgottenStatus);
  const status = useSelector(GetRobloxStatus);

  /*====================*/

  const dispatch = useDispatch();

  /*====================*/

  function toggleOpen(value: boolean) {
    dispatch(PasswordForgotActions.setPasswordForgotten(value));
  }

  /*====================*/

  return (
    <MessageWindow isOpened={isPasswordForgotten} toggleOpen={toggleOpen}>
      <div className="paddinged small-container">
        <Formik
          onSubmit={(values) => {
            toggleOpen(false);
            dispatch(ResetPassword({ password: values.password, reset: !!+values.reset }));
          }}
          initialValues={{
            code: "",
            reset: "1",
            password: "",
          }}
        >
          {({ handleSubmit, errors, touched }) => {
            return (
              <Form onSubmit={handleSubmit}>
                <div className="form-part">
                  <h2 className="gradient-text align-center">Забыли пароль?</h2>
                  <div className="line">
                    <p className="gradient-text line">1. Введите этот код в вашем профиле Roblox</p>
                    <RobloxStatusField status={status} touched={false} />
                  </div>
                  <div className="line">
                    <p className="gradient-text line">2. Выберите способ входа</p>
                    <div className="line">
                      <div className="flex-container line">
                        <RadioButton name="reset" value="1" id="reset-true" checked={true} />
                        <p>Ввести новый пароль</p>
                      </div>
                      <PasswordField shouldValidating={false} error={errors.password} touched={touched.password} />
                    </div>
                    <div className="flex-container line">
                      <RadioButton name="reset" value="0" id="reset-false" />
                      <p>Просто войти</p>
                    </div>

                    <div className="flex-container content-center">
                      <button type="submit">Войти</button>
                    </div>
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </MessageWindow>
  );
};

/*====================*/

export default PasswordForgotWindow;
