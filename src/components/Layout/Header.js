import { useState } from "react";
import { NavLink } from "react-router-dom";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";
import MobileNav from "./MobileNav";

const navMenu = (
      <ul>
        <li>
          <NavLink
            className={(linkStatus) =>
              linkStatus.isActive ? classes.active : ""
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(linkStatus) =>
              linkStatus.isActive ? classes.active : ""
            }
            to="/menu"
          >
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(linkStatus) =>
              linkStatus.isActive ? classes.active : ""
            }
            to="/contact-us"
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
);

const Header = (props) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const mobileNavToggle = () => {
    setIsMobileNavOpen(prevIsMobileNavOpen => !prevIsMobileNavOpen)
  }

  return (
    <>
      <header className={classes.header}>
        <button className={classes["mobile-nav-button"]} onClick={mobileNavToggle}>
          <span className={classes["mobile-nav-button__bar"]}></span>
          <span className={classes["mobile-nav-button__bar"]}></span>
          <span className={classes["mobile-nav-button__bar"]}></span>
        </button>
        <h1>
          <NavLink to="/">Tradicional</NavLink>
        </h1>
        <nav className={classes["desktop-nav-menu"]}>
        {navMenu}
        <HeaderCartButton onShowCart={props.onShowCart}/>
        </nav>
      </header>
      {isMobileNavOpen && <MobileNav onToggleMobileNav={mobileNavToggle}/>}
    </>
  );
};

export default Header;
