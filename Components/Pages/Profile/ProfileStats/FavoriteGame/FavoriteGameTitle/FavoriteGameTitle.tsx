import { useEffect, useState } from "react";

/*====================*/

type PropsType = {
  action_id: number;
};

/*====================*/

const FavoriteGameTitle: React.FC<PropsType> = function ({ action_id }) {
  const [title, setTitle] = useState("");

  /*====================*/

  useEffect(() => {
    switch (action_id) {
      default:
      case 0:
        setTitle("Кейсы");
        break;
      case 1:
        setTitle("Coin Flip");
        break;
      case -1:
        setTitle("Отсутствует");
    }
  }, [action_id]);

  /*====================*/

  return <p className="profile__drop-value bold line robux">{title}</p>;
};

/*====================*/

export default FavoriteGameTitle;
