import "./navbar.css";
import Logo from "../../assets/logoo-blue.svg";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
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
            <SearchIcon />
          </div>
          <div className="languages">
            <LanguageIcon />
            <h4>LANG</h4>
          </div>
          <div className="notification">
            <NotificationsNoneIcon />
          </div>
          <div className="hamburger-menu">
            <Menu />
            <PersonIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
