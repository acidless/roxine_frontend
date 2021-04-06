import MessageWindow, { IMessageWindow } from "../../../../../../../Common/Windows/MessageWindow/MessageWindow";
import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { CreateWithdraw } from "../../../../../../../../redux/reducers/Users/CurrentUserReducer/UsersReducer";
import SmallLoader from "../../../../../../../Common/Loaders/SmallLoader/SmallLoader";
import { GetWithdrawLoadingStatus } from "../../../../../../../../redux/reducers/Users/CurrentUserReducer/UsersSelector";
import { useEffect } from "react";
import GamePass from "./GamePass/GamePass";

/*====================*/

const WithdrawWindow: React.FC<IMessageWindow> = function ({ isOpened, toggleOpen }) {
  const dispatch = useDispatch();

  /*====================*/

  const isLoading = useSelector(GetWithdrawLoadingStatus);

  /*====================*/

  useEffect(() => {
    if (!isLoading) {
      toggleOpen(false);
    }
  }, [isLoading]);

  /*====================*/

  return (
    <MessageWindow toggleOpen={toggleOpen} isOpened={isOpened}>
      <Formik
        onSubmit={(values) => {
          const match = values.link.match(/(\d+)/);

          dispatch(CreateWithdraw(match ? +match[1] : 0));
        }}
        initialValues={{ link: "" }}
      >
        {({ handleSubmit, errors, touched }) => {
          return (
            <Form className="paddinged" onSubmit={handleSubmit}>
              <h2 className="gradient-text align-center line">Вывод робуксов</h2>
              <GamePass touched={touched.link} error={errors.link} />
              <div className="flex-container content-center">
                <button>Продолжить</button>
              </div>
              <SmallLoader isActive={isLoading} />
            </Form>
          );
        }}
      </Formik>
    </MessageWindow>
  );
};

/*====================*/

export default WithdrawWindow;
