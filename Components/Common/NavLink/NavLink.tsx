import Link from "next/link";
import { useRouter } from "next/router";
import RouterHelper from "../../../utils/Helpers/RouterHelper";

/*====================*/

interface ILink {
  href: string;
  className?: string;
}

/*====================*/

const NavLink: React.FC<ILink> = function ({ className, href, children }) {
  const router = useRouter();

  /*====================*/

  const isActive = RouterHelper.compare(href, router.pathname);

  /*====================*/

  return (
    <Link href={href}>
      <a className={`${className || ""}${isActive ? " active" : ""}`}>{children}</a>
    </Link>
  );
};

/*====================*/

export default NavLink;
