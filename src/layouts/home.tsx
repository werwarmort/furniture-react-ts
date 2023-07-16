import menuSvg from "../images/icon_menu.svg";
import sliderImg from "../images/content/Group 1.png";
import RightSideMenu from "./menu";
import React, { useState } from "react";
import Carousel from "../components/carousel/carousel";

const HomePage = () => {
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
                    <a className="menu__list-link" href="#">
                      About
                    </a>
                  </li>
                  <li className="menu__list-item">
                    <a className="menu__list-link" href="#">
                      Gallery
                    </a>
                  </li>
                </ul>
              </nav>
              <a className="logo" href="#">
                <img src={require("../images/logo.png")} alt="logo" />
              </a>
              <nav className="menu">
                <ul className="menu__list">
                  <li className="menu__list-item">
                    <a className="menu__list-link" href="#">
                      Blog
                    </a>
                  </li>
                  <li className="menu__list-item">
                    <a className="menu__list-link" href="#">
                      Contact
                    </a>
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

        <main className="main">
          {/* <div className="top"> */}
          {/* <div className="container"> */}
          {/* <div className="top__inner"> */}
          {/* <div className="top__slider"> */}
          <Carousel>
            <div className="top__slider-item item-1">
              <img className="top__slider-img" src={sliderImg} alt="images" />
              <div className="top__slider-info">
                <h2 className="top__slider-title">Furniture collection 1</h2>
                <p className="top__slider-text">
                  Deep v you probably haven't heard of them banh mi synth
                  actually affogato. Aesthetic lyft ethical drinking vinegar
                  austint
                </p>
              </div>
            </div>
            <div className="top__slider-item item-2">
              <img className="top__slider-img" src={sliderImg} alt="images" />
              <div className="top__slider-info">
                <h2 className="top__slider-title">Furniture collection 2</h2>
                <p className="top__slider-text">
                  Deep v you probably haven't heard of them banh mi synth
                  actually affogato. Aesthetic lyft ethical drinking vinegar
                  austint
                </p>
              </div>
            </div>
            <div className="top__slider-item item-3">
              <img className="top__slider-img" src={sliderImg} alt="images" />
              <div className="top__slider-info">
                <h2 className="top__slider-title">Furniture collection 3</h2>
                <p className="top__slider-text">
                  Deep v you probably haven't heard of them banh mi synth
                  actually affogato. Aesthetic lyft ethical drinking vinegar
                  austint
                </p>
              </div>
            </div>
          </Carousel>
          {/* </div> */}
          {/* </div> */}
          {/* </div> */}
          {/* </div> */}
        </main>

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
                  <a
                    className="footer__info-email"
                    href="mailto:stark.ts645@gmail.com"
                  >
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

export default HomePage;
