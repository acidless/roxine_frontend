import { Field } from "formik";

/*====================*/

type PropsType = {
  checked?: boolean;
  name: string;
  value: string;
  id: string;
};

/*====================*/

const RadioButton: React.FC<PropsType> = function ({ id, name, checked, value }) {
  return (
    <div className="radio-button">
      <Field id={id} type="radio" name={name} value={value} checked={checked} />
      <label htmlFor={id} />
    </div>
  );
};

/*====================*/

export default RadioButton;
