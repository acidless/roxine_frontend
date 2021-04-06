import MessageWindow from "../../../../../../Common/Windows/MessageWindow/MessageWindow";
import { useDispatch, useSelector } from "react-redux";
import { GetCurrentApanelUser } from "../../../../../../../redux/reducers/APanel/APanelUsersReducer/APanelUsersSelector";
import { useEffect, useState } from "react";
import Loader from "../../../../../../Common/Loaders/Loader/Loader";
import LazyImg from "../../../../../../Common/Images/LazyImg/LazyImg";
import AdminCurrentUserStat from "./AdminCurrentUserStat/AdminCurrentUserStat";
import Link from "next/link";
import CorrectionWindow from "../../../../../../Common/Windows/CorrectionWindow/CorrectionWindow";
import { DeleteCurrentAPanelUser } from "../../../../../../../redux/reducers/APanel/APanelUsersReducer/APanelUsersReducer";
import AdminCurrentUserSetBalance from "./AdminCurrentUserSetBalance/AdminCurrentUserSetBalance";

/*====================*/

function AdminCurrentUser() {
  const currentUser = useSelector(GetCurrentApanelUser);

  /*====================*/

  const dispatch = useDispatch();

  /*====================*/

  const [isOpened, setOpened] = useState(false);
  const [isWarningWindowOpened, setWarningWindowOpened] = useState(false);
  const [isSetBalanceWindowOpened, setBalanceWindowOpened] = useState(false);

  /*====================*/

  useEffect(() => {
    setOpened(!!currentUser);
  }, [currentUser]);

  /*====================*/

  return (
    <>
      <MessageWindow isScrollable isOpened={isOpened} toggleOpen={setOpened}>
        {currentUser ? (
          <div className="admin-users__current-user paddinged">
            <h2 className="align-center gradient-text">Досье</h2>
            <div className="current-user__main-info flex-container content-start line">
              <LazyImg
                className="medium-icon roundy-icon"
                src={`https://tr.rbxcdn.com/${currentUser.avatar}/150/150/AvatarHeadshot/Png`}
              />
              <p className="text--bright">{currentUser.name}</p>
            </div>
            <div className="current-user__info">
              <AdminCurrentUserStat
                isActive={!!currentUser.premium}
                text="Премиум: до "
                iconName="star_border"
                value={currentUser.premium ? new Date(currentUser.premium.expire_date).toLocaleDateString() : null}
              />
              <AdminCurrentUserStat iconName="local_atm" text="Баланс: " value={currentUser.balance} />
              <AdminCurrentUserStat
                isActive={!!currentUser.displayed_badge}
                iconName="military_tech"
                text="Значок: "
                value={currentUser.displayed_badge?.name}
              />
              <AdminCurrentUserStat iconName="perm_identity" text="Roblox ID: " value={currentUser.roblox_id} />
              <AdminCurrentUserStat iconName="done" text="Активность: " value={currentUser.total_activity} />
            </div>
            <div className="current-user__actions flex-container column content-stretch">
              <Link href={`https://www.roblox.com/users/${currentUser.roblox_id}/profile`}>
                <a target="_blank" className="button_dark" rel="noreferrer">
                  <span className="text--bright">Открыть профиль Roblox</span>
                </a>
              </Link>
              <button
                onClick={() => {
                  setBalanceWindowOpened(true);
                }}
                className="button_dark"
              >
                <span className="text--bright">Установить баланс</span>
              </button>
              <button className="button_dark">
                <span className="text--bright">Установить премиум</span>
              </button>
              <button
                onClick={() => {
                  setWarningWindowOpened(true);
                }}
                className="button--red"
              >
                Удалить
              </button>
            </div>
          </div>
        ) : (
          <Loader />
        )}
      </MessageWindow>
      <CorrectionWindow
        isOpened={isWarningWindowOpened}
        toggleOpen={setWarningWindowOpened}
        title="Удаление аккаунта"
        text="Вы действительно хотите удалить этот аккаунт?"
        onAccept={() => {
          dispatch(DeleteCurrentAPanelUser(currentUser.id));
          setOpened(false);
        }}
      />
      <AdminCurrentUserSetBalance
        isOpened={isSetBalanceWindowOpened}
        toggleOpen={setBalanceWindowOpened}
        userId={currentUser?.id}
      />
    </>
  );
}

/*====================*/

export default AdminCurrentUser;
