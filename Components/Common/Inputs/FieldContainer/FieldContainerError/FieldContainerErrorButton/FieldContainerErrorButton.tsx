type PropsType = {
  toggleError: (state: boolean) => void;
};

/*====================*/

const FieldContainerErrorButton: React.FC<PropsType> = function ({ toggleError }) {
  return (
    <button
      onClick={() => {
        toggleError(true);
      }}
      type="button"
      className="default-btn flex-container error-button"
    >
      <span className="material-icons">error_outline</span>
    </button>
  );
};

/*====================*/

export default FieldContainerErrorButton;
