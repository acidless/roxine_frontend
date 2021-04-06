import FieldContainer, { IFieldInfo } from "../../../../../Common/Inputs/FieldContainer/FieldContainer";
import runValidators from "../../../../../../utils/Validators/runValidators";
import { maxLength, minLength, required } from "../../../../../../utils/Validators/validators";

/*====================*/

const NameField: React.FC<IFieldInfo> = function ({ error, touched }) {
  function validateName(value: string) {
    return runValidators(value, [required, minLength(3), maxLength(20)]);
  }

  /*====================*/

  return (
    <div className="line">
      <FieldContainer
        placeholder="Ваш ник в Roblox..."
        validate={validateName}
        error={error}
        touched={touched}
        name="name"
        type="text"
        id="name"
      />
    </div>
  );
};

/*====================*/

export default NameField;
