import { Form, Formik } from "formik";
import FieldContainer from "../../../../../../../Common/Inputs/FieldContainer/FieldContainer";
import runValidators from "../../../../../../../../utils/Validators/runValidators";
import { maxValue, minValue, required } from "../../../../../../../../utils/Validators/validators";
import { useSelector } from "react-redux";
import {
  GetQIWINumberSelector,
  GetRobuxCourseSelector,
} from "../../../../../../../../redux/reducers/APanel/APanelMainReducer/APanelMainSelector";
import paymentLinkGenerator from "../../../../../../../../utils/paymentLinkGenerator";
import { GetCurrentUser } from "../../../../../../../../redux/reducers/Users/CurrentUserReducer/UsersSelector";
import MessageWindow, { IMessageWindow } from "../../../../../../../Common/Windows/MessageWindow/MessageWindow";

/*====================*/

const AddBalanceCreate: React.FC<IMessageWindow> = function ({ isOpened, toggleOpen }) {
  function validateSum(value: string) {
    return runValidators(value, [required, minValue(10), maxValue(10000)]);
  }

  /*====================*/

  const course = useSelector(GetRobuxCourseSelector);
  const currentUser = useSelector(GetCurrentUser);
  const qiwiNumber = useSelector(GetQIWINumberSelector);

  /*====================*/

  return (
    <MessageWindow isOpened={isOpened} toggleOpen={toggleOpen}>
      <div className="small-container paddinged">
        <Formik
          onSubmit={(values) => {
            location.href = paymentLinkGenerator(qiwiNumber, values.sum, {
              type: 0,
              user: currentUser.id,
            });
          }}
          initialValues={{ sum: 10 }}
        >
          {({ values, handleSubmit, errors, touched }) => {
            return (
              <Form onSubmit={handleSubmit}>
                <h2 className="gradient-text align-center line">Пополнение баланса</h2>
                <div className="line">
                  <FieldContainer
                    name="sum"
                    placeholder="Введите сумму"
                    type="number"
                    validate={validateSum}
                    error={errors.sum}
                    touched={touched.sum}
                  />
                </div>

                <div className="flex-container content-center line">
                  <p>
                    {values.sum || 0} &#8381; = {+(values.sum * course).toFixed(2)}
                  </p>
                  <img
                    style={{ marginLeft: "0.5em" }}
                    className="animated-icon small-icon"
                    src="/imgs/dollar.svg"
                    alt=""
                  />
                </div>

                <div className="flex-container content-center">
                  <button type="submit">Попополнить</button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </MessageWindow>
  );
};

/*====================*/

export default AddBalanceCreate;
