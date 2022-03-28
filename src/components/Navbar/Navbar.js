import React, { useState } from 'react';
import './Navbar.scss';

import {
  RiHome3Line,
  RiMoneyDollarCircleLine,
  RiNewspaperLine,
} from 'react-icons/ri';
import { FaHamburger } from 'react-icons/fa';
import { SiWebmoney } from 'react-icons/si';
import { ImCancelCircle } from 'react-icons/im';
import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => setSidebar(!sidebar);

  return (
    <div className="navbar">
      <div className="logo">
        <SiWebmoney size="3rem" />
        <Link to="/">
          <h1>CryptVerse</h1>
        </Link>
      </div>
      {/* MOBILE VIEW */}
      <div className="mobile-view">
        <div className="hamburger" onClick={toggleSidebar}>
          {sidebar ? (
            <ImCancelCircle size="2rem" />
          ) : (
            <FaHamburger size="2rem" />
          )}
        </div>
        {sidebar ? (
          <motion.div
            className="sidebar"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="navbar-menu">
              <Link to="/" onClick={toggleSidebar}>
                <div className="navbar-menu-option">
                  <RiHome3Line color="white" />
                  <p>Home</p>
                </div>
              </Link>
              <Link to="/coins" onClick={toggleSidebar}>
                <div className="navbar-menu-option">
                  <RiMoneyDollarCircleLine color="white" />
                  <p>Coins</p>
                </div>
              </Link>
              <Link to="/news" onClick={toggleSidebar}>
                <div className="navbar-menu-option">
                  <RiNewspaperLine color="white" />
                  <p>Latest News</p>
                </div>
              </Link>
            </div>
          </motion.div>
        ) : null}
      </div>
      {/* DESKTOP VIEW */}
      <div className="desktop-nav">
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
