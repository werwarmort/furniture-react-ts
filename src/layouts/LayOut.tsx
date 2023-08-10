import menuSvg from "../images/icon_menu.svg";

import React, { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";

import RightSideMenu from "../components/menu";

import bigLogo from "../images/BigLogo.svg";

const Layout = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <>
      <div className="wrapper">
        <header className="header">
          <div className="container">
            <div className="header__inner">
              <nav className="menu">
                <ul className="menu__list">
                  <li className="menu__list-item">
                    <NavLink className="menu__list-link" to="/about">
                      About
                    </NavLink>
                  </li>
                  <li className="menu__list-item">
                    <NavLink className="menu__list-link" to="/gallery">
                      Gallery
                    </NavLink>
                  </li>
                </ul>
              </nav>
              <NavLink className="logo" to="/">
                <img className="smallDeviceWidth" src={bigLogo} alt="" />
                <img
                  className="highDeviceWidth"
                  src={require("../images/logo.png")}
                  alt="logo"
                />
              </NavLink>
              <nav className="menu">
                <ul className="menu__list">
                  <li className="menu__list-item">
                    <NavLink className="menu__list-link" to="/blog">
                      Blog
                    </NavLink>
                  </li>
                  <li className="menu__list-item">
                    <NavLink className="menu__list-link" to="/contact">
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </nav>
              <img
                className="btn"
                src={menuSvg}
                onClick={() => setMenuActive(!menuActive)}
                alt="icon menu"
              />
            </div>
          </div>
        </header>

        <Outlet />

        <footer className="footer">
          <div className="footer__content">
            <div className="container">
              <div className="footer__inner">
                <div className="footer__info">
                  <h6 className="footer__info-title">Contact Us</h6>
                  <p className="footer__info-text">
                    Keffiyeh poutine etsy, paleo cray put a bird on it
                    microdosing schlitz you probably occupy
                  </p>
                  <a className="info-email" href="mailto:stark.ts645@gmail.com">
                    stark.ts645@gmail.com
                  </a>
                  <form className="footer__form">
                    <input
                      className="footer__form-input"
                      type="email"
                      placeholder="Subscribe by email"
                    />
                    <button className="footer__form-button" type="submit">
                      Send
                    </button>
                  </form>
                </div>
                <ul className="footer__social">
                  <li className="footer__social-item">
                    <a
                      className="footer__social-link footer__social-link--facebook"
                      href="#"
                    >
                      Facebook
                    </a>
                  </li>
                  <li className="footer__social-item">
                    <a
                      className="footer__social-link footer__social-link--instagram"
                      href="#"
                    >
                      Instagram
                    </a>
                  </li>
                  <li className="footer__social-item">
                    <a
                      className="footer__social-link footer__social-link--pinterest"
                      href="#"
                    >
                      Pinterest
                    </a>
                  </li>
                  <li className="footer__social-item">
                    <a
                      className="footer__social-link footer__social-link--whatsapp"
                      href="#"
                    >
                      WhatsApp
                    </a>
                  </li>
                  <li className="footer__social-item">
                    <a
                      className="footer__social-link footer__social-link--youtube"
                      href="#"
                    >
                      YouTube
                    </a>
                  </li>
                </ul>
                <nav className="footer__menu">
                  <ul className="footer__menu-list">
                    <li className="footer__menu-item">
                      <a className="footer__menu-link" href="#">
                        Delivery
                      </a>
                    </li>
                    <li className="footer__menu-item">
                      <a className="footer__menu-link" href="#">
                        FAQ
                      </a>
                    </li>
                    <li className="footer__menu-item">
                      <a className="footer__menu-link" href="#">
                        Help
                      </a>
                    </li>
                    <li className="footer__menu-item">
                      <a className="footer__menu-link" href="#">
                        More About Us
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className="footer__copyright">
            <div className="container">
              <p>674 Gonzales Drive. Washington, PA 15301</p>
            </div>
          </div>
        </footer>
      </div>

      <div
        onClick={() => {
          setMenuActive(false);
        }}
        className={menuActive ? "blur active" : "blur"}
      />
      <RightSideMenu active={menuActive} setActive={setMenuActive} />
    </>
  );
};

export default Layout;
