import React from "react";
import "./Navbar.scss";

import {
  RiHome3Line,
  RiMoneyDollarCircleLine,
  RiNewspaperLine,
  RiUserSettingsLine,
} from "react-icons/ri";
import { SiWebmoney } from "react-icons/si";
import { Avatar } from "@material-ui/core";
import userImg from "../../static/headshot.png";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo section-padding">
        <SiWebmoney size="3rem" />
        <Link to="/">
          <h1>Crypto.xyz</h1>
        </Link>
      </div>
      {/* <div className="user">
        <Avatar alt="user" src={userImg} sx={{ width: 24, height: 24 }} />
      </div> */}
      <div className="navbar-menu">
        <div className="navbar-menu-option">
          <RiHome3Line />
          <p>Home</p>
        </div>
        <div className="navbar-menu-option">
          <RiMoneyDollarCircleLine />
          <p>Coins</p>
        </div>
        <div className="navbar-menu-option">
          <RiNewspaperLine />
          <p>Latest News</p>
        </div>
        <div className="navbar-menu-option">
          <RiUserSettingsLine />
          <p>Settings</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
