import LiveRow from "./HeaderParts/LiveRow/LiveRow";
import HeaderTop from "./HeaderParts/HeaderTop/HeaderTop";
import HeaderBottom from "./HeaderParts/HeaderBottom/HeaderBottom";

/*====================*/

function Header() {
  return (
    <header className="header">
      <HeaderTop />
      <LiveRow />
      <HeaderBottom />
    </header>
  );
}

/*====================*/

export default Header;
