function CoinFlipRules() {
  return (
    <div className="game-rules align-center">
      <div className="animated-icon line game-rules__game-icon">
        <img className="large-icon" src="/imgs/dollar.svg" alt="" />
      </div>
      <div className="game-rules__game-name line">
        <h3 className="text--bright bold">Монетка</h3>
      </div>
      <div className="game-rules__description">
        <p className="text--bright">Правила игры очень просты.</p>
        <ul className="text--bright">
          <li>Игрок создает лобби, а второй игрок подключается.</li>
          <li>Победителя выбирает рандом 50 на 50.</li>
        </ul>
      </div>
    </div>
  );
}

/*====================*/

export default CoinFlipRules;
