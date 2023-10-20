import "./navbar.css";
import Logo from "../../assets/logo/logo.svg";
import { AiOutlineSearch } from "react-icons/ai";
import { CiGlobe } from "react-icons/ci";
import PersonIcon from "../../assets/user/users.png";
import Bll from "../../assets/icons/brll.png";
import Menu from "../Hamburger/menu";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="logo">
          <img src={Logo} alt="blue kingdom" />
        </div>
        <div className="nav-links">
          <div className="search-icon">
            <AiOutlineSearch className="search_i" />
          </div>
          <div className="languages">
            <CiGlobe className="earth" />
            <h4>عربي</h4>
          </div>
          <div className="notification">
            <img className="noti" src={Bll} alt="notification" />
          </div>
          <div className="hamburger-menu">
            <div className="menu_icon">
              <Menu />
            </div>
            <img src={PersonIcon} alt="user" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
