import FieldContainer from "../../../../../Common/Inputs/FieldContainer/FieldContainer";
import { MarketFormFieldType } from "../../MarketForm";

/*====================*/

type PropsType = MarketFormFieldType & {
  rublesVal: number;
};

/*====================*/

const RublesField: React.FC<PropsType> = function ({ course, handleChange, setFieldValue, rublesVal }) {
  return (
    <div className="flex-container column">
      <p className="robux bold">&#8381;</p>
      <FieldContainer
        onChange={(e) => {
          handleChange(e);
          setFieldValue("robux", e.target.value * course);
        }}
        value={rublesVal}
        name="rub"
        type="number"
        id="rub"
      />
    </div>
  );
};

/*====================*/

export default RublesField;
