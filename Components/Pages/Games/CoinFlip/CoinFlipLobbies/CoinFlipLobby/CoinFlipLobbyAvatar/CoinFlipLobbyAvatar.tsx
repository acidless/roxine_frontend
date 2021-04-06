import LazyImg from "../../../../../../Common/Images/LazyImg/LazyImg";

/*====================*/

type PropsType = {
  avatar: string;
};

/*====================*/

const CoinFlipLobbyAvatar: React.FC<PropsType> = function ({ avatar }) {
  return (
    <div className="lobby__avatar">
      <LazyImg className="roundy-icon" src={`https://tr.rbxcdn.com/${avatar}/150/150/AvatarHeadshot/Png`} />
    </div>
  );
};

/*====================*/

export default CoinFlipLobbyAvatar;
