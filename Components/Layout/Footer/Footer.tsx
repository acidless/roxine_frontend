import Link from "next/link";
import SocialMedia from "../../Common/SocialMedia/SocialMedia";

/*====================*/

function Footer() {
  return (
    <footer className="footer content-space-between flex-container">
      <p className="align-center text--bright">Copyright &copy; 2021 Roxine | RGWS</p>
      <div className="flex-container content-center">
        <Link href="/user-agreement">
          <a className="footer__terms-of-use relative text--bright">Пользовательское соглашение</a>
        </Link>
        <SocialMedia />
      </div>
    </footer>
  );
}

/*====================*/

export default Footer;
