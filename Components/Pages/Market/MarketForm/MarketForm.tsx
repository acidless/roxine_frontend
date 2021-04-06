import { Form, Formik } from "formik";
import RobuxSymbol from "../../../Common/Images/RobuxSymbol/RobuxSymbol";
import RobuxField from "./Fields/RobuxField/RobuxField";
import RublesField from "./Fields/RublesField/RublesField";
import {
  GetQIWINumberSelector,
  GetRobuxCourseSelector,
} from "../../../../redux/reducers/APanel/APanelMainReducer/APanelMainSelector";
import { useSelector } from "react-redux";
import { GetMarketBalanceSelector } from "../../../../redux/reducers/Market/MarketSelector";
import useDispatchOnMount from "../../../../Hooks/useDispatchOnMount/useDispatchOnMount";
import { GetLoadingStatus } from "../../../../redux/reducers/App/AppSelector";
import Loader from "../../../Common/Loaders/Loader/Loader";
import paymentLinkGenerator from "../../../../utils/paymentLinkGenerator";
import GamePass from "../../../Layout/Headers/Header/HeaderStates/AccountBlock/Balance/WithdrawWindow/GamePass/GamePass";
import { GetMarketBalance } from "../../../../redux/reducers/Market/MarketReducer";

/*====================*/

export type MarketFormFieldType = {
  handleChange: Function;
  setFieldValue: (field: string, value: any) => any;
  course: number;
};

/*====================*/

function MarketForm() {
  const currency = useSelector(GetMarketBalanceSelector);
  const course = useSelector(GetRobuxCourseSelector);
  const isLoading = useSelector(GetLoadingStatus);
  const qiwiNumber = useSelector(GetQIWINumberSelector);

  /*====================*/

  useDispatchOnMount(GetMarketBalance);

  /*====================*/

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="flex-container column">
      <Formik
        initialValues={{ robux: 0, rub: 0, link: "" }}
        onSubmit={(values) => {
          const match = values.link.match(/(\d+)/);

          location.href = paymentLinkGenerator(qiwiNumber, values.rub, {
            type: 1,
            gp_id: match ? +match[1] : 0,
          });
        }}
      >
        {({ errors, touched, setFieldValue, handleChange, handleSubmit, values }) => {
          return (
            <Form className="block market-form" onSubmit={handleSubmit}>
              <GamePass touched={touched.link} error={errors.link} />
              <div className="market-form__values line flex-container">
                <RobuxField
                  touched={touched.robux}
                  error={errors.robux}
                  maxRobux={currency}
                  handleChange={handleChange}
                  setFieldValue={setFieldValue}
                  course={course}
                  robuxVal={values.robux}
                />
                <span className="market-form__values-convert material-icons gradient-text animated-icon">
                  swap_horiz
                </span>
                <RublesField
                  handleChange={handleChange}
                  setFieldValue={setFieldValue}
                  course={course}
                  rublesVal={values.rub}
                />
              </div>
              {!!values.robux && (
                <>
                  <hr className="market-form__game-pass-sep" />
                  <p className="market-form__game-pass-notify line align-center text--bright">
                    Ваш Game Pass <span className="text--bright bold">обязан</span> стоить {values.robux}{" "}
                    <RobuxSymbol />!
                  </p>
                </>
              )}
              <div className="flex-container content-center">
                <button type="submit">Купить</button>
              </div>
              <hr />
              <div>
                <p className="text--bright">
                  Курс: 1<span className="robux bold">&#8381;</span> = {course}
                  <RobuxSymbol /> (Комиссия 30%)
                </p>
                <p className="text--bright">
                  Доступно: {currency || 0} <RobuxSymbol />
                </p>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

/*====================*/

export default MarketForm;
