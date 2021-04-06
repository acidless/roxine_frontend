import FieldContainer, { IFieldInfo } from "../../../../../../Common/Inputs/FieldContainer/FieldContainer";
import runValidators from "../../../../../../../utils/Validators/runValidators";
import { maxLength, minLength, required } from "../../../../../../../utils/Validators/validators";
import { useState } from "react";

/*====================*/

type PropsType = IFieldInfo & {
  shouldValidating?: boolean;
};

/*====================*/

const PasswordField: React.FC<PropsType> = function ({ shouldValidating = true, error, touched }) {
  const [isPasswordVisible, setPasswordVisibility] = useState(false);

  /*====================*/

  function validatePassword(value: string) {
    const validators = [required, minLength(8), maxLength(32)];

    return shouldValidating ? runValidators(value, validators) : undefined;
  }

  /*====================*/

  return (
    <FieldContainer
      error={error}
      touched={touched}
      type={isPasswordVisible ? "text" : "password"}
      name="password"
      id="password"
      validate={validatePassword}
    >
      <button
        type="button"
        onClick={() => {
          setPasswordVisibility(!isPasswordVisible);
        }}
        className="default-btn content flex-container"
      >
        <span className="material-icons">{isPasswordVisible ? "visibility_off" : "visibility"}</span>
      </button>
    </FieldContainer>
  );
};

/*====================*/

export default PasswordField;
