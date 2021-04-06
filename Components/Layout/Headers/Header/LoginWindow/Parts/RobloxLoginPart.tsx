import { useEffect } from "react";
import FormPartType from "../../../../../../types-interfaces/Forms/FormPartType";
import { useDispatch } from "react-redux";
import { checkLogin } from "../../../../../../redux/reducers/Auth/AuthReducer";
import RobloxLoginField from "../Fields/RobloxLoginField/RobloxLoginField";

/*====================*/

const RobloxLoginPart: React.FC<FormPartType & { robloxLogin: string }> = function ({
  changeFormEvents,
  robloxLogin,
  fieldValues,
}) {
  const dispatch = useDispatch();

  /*====================*/

  useEffect(() => {
    changeFormEvents({
      onNextClick: () => {
        dispatch(checkLogin(robloxLogin));
      },
    });
  }, [robloxLogin]);

  /*====================*/

  return (
    <div>
      <h2 className="gradient-text align-center line">Добро пожаловать!</h2>
      <div className="line">
        <label htmlFor="robloxLogin line">Введите ваше имя в роблоксе</label>
        <RobloxLoginField error={fieldValues.error} touched={fieldValues.touched} />
      </div>
    </div>
  );
};

/*====================*/

export default RobloxLoginPart;
