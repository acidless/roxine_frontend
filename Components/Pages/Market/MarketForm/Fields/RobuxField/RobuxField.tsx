import RobuxSymbol from "../../../../../Common/Images/RobuxSymbol/RobuxSymbol";
import FieldContainer, { IFieldInfo } from "../../../../../Common/Inputs/FieldContainer/FieldContainer";
import { MarketFormFieldType } from "../../MarketForm";
import runValidators from "../../../../../../utils/Validators/runValidators";
import { match, maxValue, minValue, required } from "../../../../../../utils/Validators/validators";

/*====================*/

type PropsType = MarketFormFieldType &
  IFieldInfo & {
    robuxVal: number;
    maxRobux: number;
  };

/*====================*/

const RobuxField: React.FC<PropsType> = function ({
  touched,
  error,
  maxRobux,
  handleChange,
  course,
  robuxVal,
  setFieldValue,
}) {
  function onChange(e) {
    handleChange(e);
    setFieldValue("rub", +(e.target.value / course).toFixed(2));
  }

  function validateRobux(value: string) {
    return runValidators(value, [required, minValue(5), match(/^\d+$/), maxValue(maxRobux)]);
  }

  /*====================*/

  return (
    <div className="flex-container column">
      <RobuxSymbol />
      <FieldContainer
        error={error}
        touched={touched}
        validate={validateRobux}
        onChange={onChange}
        value={robuxVal}
        name="robux"
        type="number"
        id="robux"
      />
    </div>
  );
};

/*====================*/

export default RobuxField;
