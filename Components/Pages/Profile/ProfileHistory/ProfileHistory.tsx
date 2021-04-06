import { useDispatch, useSelector } from "react-redux";
import { GetLoadingStatus } from "../../../../redux/reducers/App/AppSelector";
import { useEffect, useState } from "react";
import Loader from "../../../Common/Loaders/Loader/Loader";
import IUser from "../../../../types-interfaces/Content/Users/IUser";
import ProfileHistoryItem from "./ProfileHistoryItem/ProfileHistoryItem";
import HistoryAnyObject from "../../../../types-interfaces/Content/HistoryObjects/HistoryAnyObject";
import { GetHistory } from "../../../../redux/reducers/Users/ProfileReducer/ProfileReducer";
import useIdForDispatch from "../../../../Hooks/UseIdForDispatch/UseIdForDispatch";
import { GetHistoryPageStatus } from "../../../../redux/reducers/Users/ProfileReducer/ProfileSelector";

/*====================*/

type PropsType = {
  userId: any;
  currentProfile: null | IUser;
  currentProfileHistory: Array<HistoryAnyObject>;
};

/*====================*/

const ProfileHistory: React.FC<PropsType> = function ({ userId, currentProfile, currentProfileHistory }) {
  const [page, setPage] = useState(0);

  /*====================*/

  const isLoading = useSelector(GetLoadingStatus);
  const isLastPage = useSelector(GetHistoryPageStatus);

  /*====================*/

  const dispatch = useDispatch();

  /*====================*/

  useIdForDispatch(userId, GetHistory);

  useEffect(() => {
    setPage(0);
  }, [userId]);

  function nextPage() {
    dispatch(GetHistory(userId, page + 1));
    setPage(page + 1);
  }

  /*====================*/

  return (
    <>
      {currentProfileHistory.length > 0 && (
        <section className="profile__last-drops full-size-block column flex-container">
          <h2 className="custom-heading">Последние дропы</h2>
          <div className="profile__drops content-center wide-line">
            {currentProfileHistory.map((item, index) => {
              return <ProfileHistoryItem key={index} historyItem={item} />;
            })}
          </div>
          {!isLastPage && <button onClick={nextPage}>Загрузить больше</button>}
        </section>
      )}
      {isLoading && currentProfile ? <Loader /> : <></>}
    </>
  );
};

/*====================*/

export default ProfileHistory;
