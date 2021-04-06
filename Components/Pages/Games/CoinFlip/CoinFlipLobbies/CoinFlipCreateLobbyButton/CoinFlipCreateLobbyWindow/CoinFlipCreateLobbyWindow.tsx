import MessageWindow, { IMessageWindow } from "../../../../../../Common/Windows/MessageWindow/MessageWindow";
import { Form, Formik } from "formik";
import FieldContainer from "../../../../../../Common/Inputs/FieldContainer/FieldContainer";
import runValidators from "../../../../../../../utils/Validators/runValidators";
import { maxValue, minValue, required } from "../../../../../../../utils/Validators/validators";
import { useDispatch } from "react-redux";
import { CreateCoinFlipLobby } from "../../../../../../../redux/reducers/CoinFlip/CoinFlipReducer";

/*====================*/

const CoinFlipCreateLobbyWindow: React.FC<IMessageWindow> = function ({ isOpened, toggleOpen }) {
  const dispatch = useDispatch();

  /*====================*/

  function validateBet(value: string) {
    return runValidators(value, [required, minValue(10), maxValue(10000)]);
  }

  /*====================*/

  return (
    <MessageWindow isOpened={isOpened} toggleOpen={toggleOpen}>
      <Formik
        onSubmit={(values) => {
          dispatch(CreateCoinFlipLobby(values.bet));
          toggleOpen(false);
        }}
        initialValues={{ bet: 0 }}
      >
        {({ handleSubmit, errors, touched }) => {
          return (
            <div className="paddinged">
              <Form className="coin-flip-form align-center" onSubmit={handleSubmit}>
                <h3 className="gradient-text line">Создание лобби</h3>
                <div className="line">
                  <FieldContainer
                    error={errors.bet}
                    touched={touched.bet}
                    validate={validateBet}
                    name="bet"
                    placeholder="Ставка"
                    type="number"
                  />
                </div>
                <button type="submit">Создать</button>
              </Form>
            </div>
          );
        }}
      </Formik>
    </MessageWindow>
  );
};

/*====================*/

export default CoinFlipCreateLobbyWindow;
