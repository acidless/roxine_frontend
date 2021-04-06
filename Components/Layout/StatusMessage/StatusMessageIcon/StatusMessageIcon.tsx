type PropsType = {
  isError: boolean;
};

/*====================*/

const StatusMessageIcon: React.FC<PropsType> = function ({ isError }) {
  return (
    <div className="global-info__icon flex-container">
      <span className="material-icons content-center">{isError ? "error_outline" : "check_circle_outline"} </span>
    </div>
  );
};

/*====================*/

export default StatusMessageIcon;
