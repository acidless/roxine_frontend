type PropsType = {
  iconName: string;
  text: string;
  value: string | number;
  isActive?: boolean;
};

/*====================*/

const AdminCurrentUserStat: React.FC<PropsType> = function ({ isActive = true, text, value, iconName }) {
  return isActive ? (
    <p className="flex-container text--bright">
      <span className="material-icons animated-icon">{iconName}</span>
      {text} {value}
    </p>
  ) : (
    <></>
  );
};

/*====================*/

export default AdminCurrentUserStat;
