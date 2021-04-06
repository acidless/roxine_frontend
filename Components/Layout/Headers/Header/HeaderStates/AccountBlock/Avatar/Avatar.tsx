import Link from "next/link";

/*====================*/

type PropsType = {
  avatar: string;
  currentUserId: number;
};

/*====================*/

const Avatar: React.FC<PropsType> = function ({ currentUserId, avatar }) {
  return (
    <Link href={`/profile/${currentUserId}`}>
      <a aria-label="Profile" className="header__profile-avatar relative">
        <img
          className="medium-icon roundy-icon"
          src={`https://tr.rbxcdn.com/${avatar}/180/180/AvatarHeadshot/Png`}
          alt=""
        />
      </a>
    </Link>
  );
};

/*====================*/

export default Avatar;
