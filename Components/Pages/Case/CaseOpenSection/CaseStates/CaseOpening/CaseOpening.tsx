type PropsType = {
  currentOpenMode: number;
};

/*====================*/

const CaseOpening: React.FC<PropsType> = function ({ currentOpenMode }) {
  return (
    <p className="gradient-text">
      Выберите {currentOpenMode} карточк{currentOpenMode > 1 ? "и" : "y"}
    </p>
  );
};

/*====================*/

export default CaseOpening;
