import FieldContainer, { IFieldInfo } from "../FieldContainer/FieldContainer";
import runValidators from "../../../../utils/Validators/runValidators";
import { required } from "../../../../utils/Validators/validators";

/*====================*/

type PropsType = IFieldInfo & {
  name: string;
  type: string;
};

/*====================*/

const RequiredField: React.FC<PropsType> = function ({ error, touched, name, type }) {
  function validateRequired(value: string) {
    return runValidators(value, [required]);
  }

  /*====================*/

  return (
    <FieldContainer validate={validateRequired} id={name} error={error} touched={touched} name={name} type={type} />
  );
};

/*====================*/

export default RequiredField;
