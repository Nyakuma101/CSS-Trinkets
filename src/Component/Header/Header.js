import { Link } from "react-router-dom";
// import Button from "../Button/Button";
import "../Header/Header.scss";
// import Logo from "../../Assets/Logo/BrainFlix-logo.svg";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        {/* <img className="header__logo" src={Logo} alt="Logo Image" /> */}
      </Link>
      <div className="header__container">
        <input className="header__search" type="text" placeholder=" Search" />
        <div className="header__circular"></div>
      </div>
      <div className="header__box">
        {/* <Link to="/video-upload-page">
          <Button text="UPLOAD" />
        </Link> */}
        <div className="header__circular2"></div>
      </div>
    </div>
  );
}

export default Header;
