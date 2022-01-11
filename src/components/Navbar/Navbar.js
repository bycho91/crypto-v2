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
        <Link to="/">
          <div className="navbar-menu-option">
            <RiHome3Line color="white" />
            <p>Home</p>
          </div>
        </Link>
        <Link to="/coins">
          <div className="navbar-menu-option">
            <RiMoneyDollarCircleLine color="white" />
            <p>Coins</p>
          </div>
        </Link>
        <Link to="/news">
          <div className="navbar-menu-option">
            <RiNewspaperLine color="white" />
            <p>Latest News</p>
          </div>
        </Link>
        {/* <div className="navbar-menu-option">
          <RiUserSettingsLine />
          <p>Settings</p>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
