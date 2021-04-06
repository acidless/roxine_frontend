import MessageWindow, { IMessageWindow } from "../../../../../../../Common/Windows/MessageWindow/MessageWindow";
import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { SetApanelUserBalance } from "../../../../../../../../redux/reducers/APanel/APanelUsersReducer/APanelUsersReducer";
import FieldContainer from "../../../../../../../Common/Inputs/FieldContainer/FieldContainer";
import runValidators from "../../../../../../../../utils/Validators/runValidators";
import { required } from "../../../../../../../../utils/Validators/validators";

/*====================*/

type PropsType = IMessageWindow & {
  userId: number;
};

/*====================*/

const AdminCurrentUserSetBalance: React.FC<PropsType> = function ({ userId, isOpened, toggleOpen }) {
  const dispatch = useDispatch();

  /*====================*/

  function validateBalance(value: string) {
    return runValidators(value, [required]);
  }

  /*====================*/

  return (
    <MessageWindow toggleOpen={toggleOpen} isOpened={isOpened}>
      <Formik
        onSubmit={(values) => {
          dispatch(SetApanelUserBalance(userId, values.balance));
          toggleOpen(false);
        }}
        initialValues={{ balance: 0 }}
      >
        {({ handleSubmit, touched, errors }) => {
          return (
            <Form className="small-container paddinged" onSubmit={handleSubmit}>
              <h2 className="gradient-text align-center line">Установить баланс</h2>
              <div className="line">
                <FieldContainer
                  type="number"
                  name="balance"
                  validate={validateBalance}
                  touched={touched.balance}
                  error={errors.balance}
                />
              </div>
              <div className="flex-container content-center">
                <button type="submit">Установить</button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </MessageWindow>
  );
};

/*====================*/

export default AdminCurrentUserSetBalance;
