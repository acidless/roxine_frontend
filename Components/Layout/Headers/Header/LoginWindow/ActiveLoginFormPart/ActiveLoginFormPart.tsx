import RobloxLoginPart from "../Parts/RobloxLoginPart";
import RobloxStatusPart from "../Parts/RobloxStatusPart";
import PasswordPart from "../Parts/PasswordPart";
import { Dispatch, SetStateAction } from "react";
import { FormActions } from "../../../../../../types-interfaces/Forms/FormPartType";
import { useSelector } from "react-redux";
import { GetRobloxStatus } from "../../../../../../redux/reducers/Auth/AuthSelector";
import { LoginFormStates } from "../../../../../../types-interfaces/Forms/RegisterTypes";

/*====================*/

type PropsType = {
  isRegistered: boolean;
  values: any;
  errors: any;
  touched: any;
  changeFormEvents: Dispatch<SetStateAction<FormActions>>;
  currentAuthFormState: LoginFormStates;
};

/*====================*/

const ActiveLoginFormPart: React.FC<PropsType> = function ({
  changeFormEvents,
  values,
  errors,
  touched,
  isRegistered,
  currentAuthFormState,
}) {
  const status = useSelector(GetRobloxStatus);

  /*====================*/

  switch (currentAuthFormState) {
    case LoginFormStates.LOGIN:
    default:
      return (
        <RobloxLoginPart
          robloxLogin={values.robloxLogin}
          changeFormEvents={changeFormEvents}
          fieldValues={{ error: errors.robloxLogin, touched: touched.robloxLogin }}
        />
      );
    case LoginFormStates.CODE:
      return (
        <RobloxStatusPart
          changeFormEvents={changeFormEvents}
          fieldValues={{ error: errors.robloxStatus, touched: touched.robloxStatus }}
          status={status}
        />
      );
    case LoginFormStates.PASSWORD:
      return (
        <PasswordPart
          name={values.robloxLogin}
          password={values.password}
          changeFormEvents={changeFormEvents}
          fieldValues={{ error: errors.password, touched: touched.password }}
          isRegistered={isRegistered}
        />
      );
  }
};

/*====================*/

export default ActiveLoginFormPart;
