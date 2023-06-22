import logo from "../../images/logo.png";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header>
      <img src={logo} alt="логотип" className="logo" />
      <form>
        <input type="text" className="header" placeholder="Поиск" />
      </form>
      <Navigation />
    </header>
  );
}
