import { Form, Formik } from "formik";
import MessageWindow from "../../../../Common/Windows/MessageWindow/MessageWindow";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ButtonsPart from "./Parts/ButtonsPart";
import {
  GetAuthFormState,
  GetAuthLoadingStatus,
  GetRegisteredStatus,
} from "../../../../../redux/reducers/Auth/AuthSelector";
import SmallLoader from "../../../../Common/Loaders/SmallLoader/SmallLoader";
import useCardAnimation from "../../../../../Hooks/CardAnimations/useCardAnimation/useCardAnimation";
import ActiveLoginFormPart from "./ActiveLoginFormPart/ActiveLoginFormPart";
import { GetPasswordForgottenStatus } from "../../../../../redux/reducers/Auth/PasswordForgotReducer/PasswordForgotSelector";
import { AuthActions } from "../../../../../redux/reducers/Auth/AuthReducer";
import { LoginFormStates } from "../../../../../types-interfaces/Forms/RegisterTypes";

/*====================*/

interface ILoginWindow {
  toggleLoginWindow: (state: boolean) => void;
  isLoginWindowOpened: boolean;
}

/*====================*/

const LoginWindow: React.FC<ILoginWindow> = function ({ toggleLoginWindow, isLoginWindowOpened }) {
  const [formActive, toggleForm] = useState(true);
  const [formEvents, changeFormEvents] = useState({
    onNextClick: () => {},
  });
  const [windowEvents, setWindowEvents] = useState({
    onKeyDown: () => {},
  });

  /*====================*/

  const isRegistered = useSelector(GetRegisteredStatus);
  const isLoading = useSelector(GetAuthLoadingStatus);
  const isPasswordForgotten = useSelector(GetPasswordForgottenStatus);
  const currentAuthFormState = useSelector(GetAuthFormState);

  /*====================*/

  const dispatch = useDispatch();

  /*====================*/

  useEffect(() => {
    if (isPasswordForgotten) {
      dispatch(AuthActions.setAuthFormState(LoginFormStates.LOGIN));
      toggleLoginWindow(false);
    }
  }, [isPasswordForgotten]);

  /*====================*/

  const window = useRef<HTMLDivElement>(null);

  /*====================*/

  useEffect(() => {
    const animation = useCardAnimation(window.current, toggleForm, toggleForm);

    return () => {
      animation.cancel();
    };
  }, [currentAuthFormState]);

  /*====================*/

  return (
    <MessageWindow
      onKeyDown={windowEvents.onKeyDown}
      window={window}
      toggleOpen={toggleLoginWindow}
      isOpened={isLoginWindowOpened}
    >
      <div className={`${formActive ? "active " : ""}form-container small-container`}>
        <Formik
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false);
          }}
          initialValues={{
            robloxLogin: "",
            robloxStatus: "",
            password: "",
          }}
        >
          {({ values, submitForm, handleSubmit, errors, touched }) => {
            return (
              <Form className="login-form active" onSubmit={handleSubmit}>
                <ActiveLoginFormPart
                  currentAuthFormState={currentAuthFormState}
                  isRegistered={isRegistered}
                  values={values}
                  errors={errors}
                  touched={touched}
                  changeFormEvents={changeFormEvents}
                />
                <ButtonsPart
                  setWindowEvents={setWindowEvents}
                  onNextClick={formEvents.onNextClick}
                  currentAuthFormState={currentAuthFormState}
                  submitForm={submitForm}
                />
                <SmallLoader isActive={isLoading} />
              </Form>
            );
          }}
        </Formik>
      </div>
    </MessageWindow>
  );
};

/*====================*/

export default LoginWindow;
