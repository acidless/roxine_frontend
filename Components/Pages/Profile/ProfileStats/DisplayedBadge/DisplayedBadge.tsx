import IBadge from "../../../../../types-interfaces/Content/Badge/IBadge";

/*====================*/

type PropsType = {
  badge: IBadge;
};

/*====================*/

const DisplayedBadge: React.FC<PropsType> = function ({ badge }) {
  return (
    <div className="profile__stats-block relative column flex-container profile__dispalyed-badge">
      <h2 className="text--bright">Отображаемый значок</h2>
      <p className="profile__drop-value bold line robux">
        {badge?.name || "Отсутствует"}
      </p>
      <div className="profile__drop-icon align-center full-size-block flex-container">
        {badge.url && badge.url !== "null" ? (
          <img src={`/imgs/badges/${badge.url}.svg`} alt="" />
        ) : (
          <span className="material-icons text--bright">crop_free</span>
        )}
      </div>
    </div>
  );
};

/*====================*/

export default DisplayedBadge;
