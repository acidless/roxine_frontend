import CaseImg from "../../../../../Common/Images/CaseImg";

/*====================*/

type PropsType = {
  action_id: number;
};

/*====================*/

const FavoriteGameIcon: React.FC<PropsType> = function ({ action_id }) {
  switch (action_id) {
    case 1:
      return <img src="/imgs/dollar.svg" alt="" />;
    case 0:
      return <CaseImg />;
  }
};

/*====================*/

export default FavoriteGameIcon;
