import React from 'react'
import { NavLink } from "react-router-dom";
import classes from "./MobileNav.module.css"

const MobileNav = (props) => {
  return (
    <div className={classes["side-nav"]}>
      <nav className={classes["side-nav__side-bar"]}>
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
      </nav>
      <div className={classes["side-nav__backdrop"]} onClick={props.onToggleMobileNav}>
      </div>
    </div>
  )
}

export default MobileNav
