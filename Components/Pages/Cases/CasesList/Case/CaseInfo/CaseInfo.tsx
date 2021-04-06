type PropsType = {
  name: string;
  price: number;
};

/*====================*/

const CaseInfo: React.FC<PropsType> = function ({ name, price }) {
  return (
    <div className="case__info">
      <p className="case__name">{name}</p>
      <div className="flex-container case__price content-center">
        <img className="small-icon" src="/imgs/dollar.svg" alt="" />
        <span className="gradient-text">{price}</span>
      </div>
    </div>
  );
};

/*====================*/

export default CaseInfo;
