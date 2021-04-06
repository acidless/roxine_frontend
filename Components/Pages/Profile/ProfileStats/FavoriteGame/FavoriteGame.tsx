import FavoriteGameIcon from "./FavoriteGameIcon/FavoriteGameIcon";
import FavoriteGameTitle from "./FavoriteGameTitle/FavoriteGameTitle";

/*====================*/

type PropsType = {
  action_id: number;
};

/*====================*/

const FavoriteGame: React.FC<PropsType> = function ({ action_id }) {
  return (
    <div className="column flex-container profile__stats-block relative profile__favorite-game">
      <h2 className="text--bright">Любимый режим</h2>
      <FavoriteGameTitle action_id={action_id} />
      <div className="profile__drop-icon align-center full-size-block flex-container">
        {action_id !== -1 ? (
          <FavoriteGameIcon action_id={action_id} />
        ) : (
          <span className="material-icons text--bright">crop_free</span>
        )}
      </div>
    </div>
  );
};

/*====================*/

export default FavoriteGame;
