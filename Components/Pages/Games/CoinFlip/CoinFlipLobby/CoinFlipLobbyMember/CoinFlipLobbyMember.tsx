import Link from "next/link";
import LazyImg from "../../../../../Common/Images/LazyImg/LazyImg";
import IUser from "../../../../../../types-interfaces/Content/Users/IUser";

/*====================*/

type PropsType = {
  isEnded: boolean;
  isWin: boolean;
  isCreator?: boolean;
  member: IUser;
};

/*====================*/

const CoinFlipLobbyMember: React.FC<PropsType> = function ({ member, isWin, isEnded, isCreator }) {
  return (
    <div className={`${isEnded && isWin ? "win " : ""}${isCreator ? "coin-flip__creator" : "coin-flip__joined"} `}>
      <h3 className="gradient-text bold">Победитель</h3>
      <Link href={`/profile/${member.id}`}>
        <a className="flex-container">
          <LazyImg src={`https://tr.rbxcdn.com/${member.avatar}/150/150/AvatarHeadshot/Png`} />
          <div className="flex-container align-items-center column">
            <p>{member.name}</p>
            <img src="/imgs/dollar.svg" alt="" />
          </div>
        </a>
      </Link>
    </div>
  );
};

/*====================*/

export default CoinFlipLobbyMember;
