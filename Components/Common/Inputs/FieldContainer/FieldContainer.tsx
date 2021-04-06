import { Field } from "formik";
import { RangePropsType } from "../Range/Range";
import FieldContainerError from "./FieldContainerError/FieldContainerError";

/*====================*/

export type IFieldInfo = {
  error?: string;
  touched?: boolean;
};

type FieldContainerPropsType = IFieldInfo &
  RangePropsType & {
    value?: any;
    id?: string;
    type?: string;
    placeholder?: string;
    validate?: Function;
    readOnly?: boolean;
    innerRef?: React.Ref<HTMLInputElement>;
    pattern?: string;
  };

/*====================*/

const FieldContainer: React.FC<FieldContainerPropsType> = function ({ innerRef, children, error, touched, ...props }) {
  /*====================*/

  return (
    <div className={`${error && touched ? "error " : ""}${children ? "padding " : ""}relative input-wrapper`}>
      {children}
      <Field innerRef={innerRef} {...props} />
      {error && touched && <FieldContainerError error={error} />}
    </div>
  );
};

/*====================*/

export default FieldContainer;
