import FieldContainer, { IFieldInfo } from "../../../../../../../../Common/Inputs/FieldContainer/FieldContainer";
import runValidators from "../../../../../../../../../utils/Validators/runValidators";
import { match, required } from "../../../../../../../../../utils/Validators/validators";

/*====================*/

const GamePass: React.FC<IFieldInfo> = function ({ error, touched }) {
  function validateLink(value: string) {
    const regexp = /roblox.com\/game-pass\/\d+/;
    return runValidators(value, [required, match(regexp)]);
  }

  /*====================*/

  return (
    <>
      <div className="line">
        <label htmlFor="link">Введите ссылку на Game Pass</label>
        <FieldContainer validate={validateLink} id="link" error={error} touched={touched} name="link" type="text" />
      </div>
      <div className="line">
        <a href="https://vk.com/@rbxine-kak-vyvesti-robuksy" target="_blank" rel="noreferrer" className="link-in-text">
          Как создать Game Pass?
        </a>
      </div>
    </>
  );
};

/*====================*/

export default GamePass;
