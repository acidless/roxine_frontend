import FieldContainer, { IFieldInfo } from "../../../../../../Common/Inputs/FieldContainer/FieldContainer";
import runValidators from "../../../../../../../utils/Validators/runValidators";
import { maxLength, minLength, required } from "../../../../../../../utils/Validators/validators";

/*====================*/

const RobloxLoginField: React.FC<IFieldInfo> = function ({ error, touched }) {
  function validateName(value: string) {
    return runValidators(value, [required, minLength(3), maxLength(20)]);
  }

  /*====================*/

  return (
    <FieldContainer
      error={error}
      touched={touched}
      type="text"
      name="robloxLogin"
      id="robloxLogin"
      validate={validateName}
    />
  );
};

/*====================*/

export default RobloxLoginField;
