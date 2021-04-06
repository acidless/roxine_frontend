import { useSelector } from "react-redux";
import { GetBalanceDifference } from "../../../../../../../redux/reducers/Users/CurrentUserReducer/UsersSelector";

/*====================*/

function BalanceDifference() {
  const balanceDifference = useSelector(GetBalanceDifference);

  /*====================*/

  return balanceDifference !== null ? (
    <div className={`${balanceDifference >= 0 ? "positive " : "negative "} balance-difference`}>
      <p className="bold">
        {balanceDifference > 0 ? "+" : ""}
        {balanceDifference}
      </p>
    </div>
  ) : (
    <></>
  );
}

/*====================*/

export default BalanceDifference;
