import Link from "next/link";
import SocialMedia from "../../../../../Common/SocialMedia/SocialMedia";

/*====================*/

function HeaderTop() {
  return (
    <div className="flex-container header__top content-space-between">
      <Link href="/">
        <a className="header__logo">
          <h1 className="flex-container gradient-text">
            R
            <img className="logo__icon small-icon" src="/imgs/dollar.svg" alt="o" />
            xine
          </h1>
        </a>
      </Link>
      <SocialMedia />
    </div>
  );
}

/*====================*/

export default HeaderTop;
