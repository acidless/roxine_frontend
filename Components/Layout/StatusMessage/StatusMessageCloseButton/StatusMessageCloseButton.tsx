type PropsType = {
  onClick: (value: boolean) => void;
};

/*====================*/

const StatusMessageCloseButton: React.FC<PropsType> = function ({ onClick }) {
  return (
    <button
      onClick={() => {
        onClick(false);
      }}
      className="default-btn global-info__close"
    >
      <span className="material-icons">close</span>
    </button>
  );
};

/*====================*/

export default StatusMessageCloseButton;
