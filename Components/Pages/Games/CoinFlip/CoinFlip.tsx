import Link from "next/link";

/*====================*/

function CoinFlip() {
  return (
    <div className="games__game coin-flip">
      <Link href="/games/coinflip">
        <a className="flex-container column full-size-block">
          <p className="game__name line bold align-center gradient-text">Coin Flip</p>
          <div className="game__icon content-center coin-flip-icon flex-container">
            <img src="/imgs/dollar.svg" alt="" />
          </div>
        </a>
      </Link>
    </div>
  );
}

/*====================*/

export default CoinFlip;
