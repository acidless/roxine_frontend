type PropsType = {
  bet: number;
};

/*====================*/

const CoinFlipLobbyValue: React.FC<PropsType> = function ({ bet }) {
  return (
    <div className="lobby__value align-items-center">
      <p className="text--bright bold">Ставка</p>
      <div className="flex-container content-center">
        <span className="gradient-text bold">{bet}</span>
        <img className="small-icon animated-icon" src="/imgs/dollar.svg" alt="" />
      </div>
    </div>
  );
};

/*====================*/

export default CoinFlipLobbyValue;
