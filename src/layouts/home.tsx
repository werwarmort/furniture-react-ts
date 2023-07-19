import menuSvg from "../images/icon_menu.svg";
import collection1 from "../images/content/collection-1.jpg";
import collection2 from "../images/content/collection-2.jpg";
import collection3 from "../images/content/collection-3.jpg";
import collection4 from "../images/content/collection-4.jpg";
import collection5 from "../images/content/collection-5.jpg";
import blogPicture1 from "../images/content/blog/1.jpg";
import blogPicture2 from "../images/content/blog/2.jpg";
import mesuringTape from "../images/measuring-tape.svg";
import sofa from "../images/sofa.svg";
import graphicTool from "../images/graphic-tool.svg";
import sliderImg from "../images/content/Group 1.png";
import RightSideMenu from "./menu";
import React, { useState } from "react";
import Carousel from "../components/carousel/carousel";
import Grid from "../components/flitteringGalley/grid";

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
          <div className="top">
            <Carousel>
              <div className="top__slider-item item-1">
                <img className="top__slider-img" src={sliderImg} alt="images" />
                <div className="top__slider-info">
                  <h2 className="top__slider-title">Furniture collection</h2>
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
                  <h2 className="top__slider-title">Furniture collection</h2>
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
                  <h2 className="top__slider-title">Furniture collection</h2>
                  <p className="top__slider-text">
                    Deep v you probably haven't heard of them banh mi synth
                    actually affogato. Aesthetic lyft ethical drinking vinegar
                    austint
                  </p>
                </div>
              </div>
            </Carousel>
          </div>

          <section className="new-collection">
            <div className="container-fluid">
              <h6 className="new-collection__title">
                Furniture new collection
              </h6>
              <p className="new-collection__text">
                Deep v you probably haven't heard of them banh mi synth actually
                affogato. Aesthetic lyft ethical drinking vinegar austint
              </p>
              <div className="collection">
                <div className="collection__item">
                  <img
                    className="collection__images"
                    src={collection1}
                    alt=""
                  />
                  <div className="collection__info">
                    <div className="collection__info-title">
                      Truffaut literally trust
                    </div>
                    <div className="collection__info-text">
                      Living room furntiture | Chair
                    </div>
                  </div>
                </div>

                <div className="collection__item">
                  <img
                    className="collection__images"
                    src={collection2}
                    alt=""
                  />
                  <div className="collection__info">
                    <div className="collection__info-title">
                      Truffaut literally trust
                    </div>
                    <div className="collection__info-text">
                      Living room furntiture | Chair
                    </div>
                  </div>
                </div>

                <div className="collection__item">
                  <img
                    className="collection__images"
                    src={collection3}
                    alt=""
                  />
                  <div className="collection__info">
                    <div className="collection__info-title">
                      Truffaut literally trust
                    </div>
                    <div className="collection__info-text">
                      Living room furntiture | Chair
                    </div>
                  </div>
                </div>

                <div className="collection__item">
                  <img
                    className="collection__images"
                    src={collection4}
                    alt=""
                  />
                  <div className="collection__info">
                    <div className="collection__info-title">
                      Truffaut literally trust
                    </div>
                    <div className="collection__info-text">
                      Living room furntiture | Chair
                    </div>
                  </div>
                </div>

                <div className="collection__item">
                  <img
                    className="collection__images"
                    src={collection5}
                    alt=""
                  />
                  <div className="collection__info">
                    <div className="collection__info-title">
                      Truffaut literally trust
                    </div>
                    <div className="collection__info-text">
                      Living room furntiture | Chair
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="decor">
            <div className="container">
              <h2 className="decor__title">Aesthetic ethical drinking</h2>
              <p className="decor__text">
                Deep v you probably haven't heard of them banh mi synth actually
                affogato. Artlyft ethical the one drinking vinegar austint
              </p>
            </div>
          </section>

          <section className="works-path">
            <div className="container">
              <h3 className="works-path__title">how it works</h3>
              <div className="works-path__items">
                <div className="works-path__items-box">
                  <div className="works-path__item  works-path__item--consultation">
                    <img
                      className="works-path__item-img"
                      src={graphicTool}
                      alt=""
                    />
                    <h6 className="works-path__item-title">
                      Designer Consultation
                    </h6>
                    <p className="works-path__item-text">
                      Kinfolk scenester authentic craft beer truffaut irony
                      intelligentsia YOLO lomo bushwick coloring book. Semiotics
                      man bun venmo viral cliche
                    </p>
                  </div>
                  <div className="works-path__item works-path__item--producton">
                    <img className="works-path__item-img" src={sofa} alt="" />
                    <h6 className="works-path__item-title">Production</h6>
                    <p className="works-path__item-text">
                      Intelligentsia YOLO lomo bushwick coloring book. Semiotics
                      man bun venmo viral cliche
                    </p>
                  </div>
                </div>
                <div className="works-path__item  works-path__item--measurements">
                  <img
                    className="works-path__item-img"
                    src={mesuringTape}
                    alt=""
                  />
                  <h6 className="works-path__item-title">Measurements</h6>
                  <p className="works-path__item-text">
                    Everyday carry actually neutra authentic kogi shabby chic
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="gallery">
            <Grid />
            {/* добавить картинок и въебать пагинацию */}
          </div>

          <section className="blog-box">
            <div className="container">
              <h3 className="blog-box__title">
                More inspiration ideas in our blog
              </h3>
              <div className="blog-box__items">
                <div className="blog-box__item">
                  <a href="" className="blog-box__img-link">
                    <img src={blogPicture1} alt="" className="blog-box__img" />
                  </a>
                  <div className="blog-box__links">
                    <span className="blog-box__date">March 12, 2020 </span>
                    <a href="" className="blog-box__author">
                      | by Ann Summers{" "}
                    </a>
                    <a href="" className="blog-box__theme">
                      | Inrerior{" "}
                    </a>
                  </div>
                  <a href="" className="blog-box__item-titleLink">
                    <h4 className="blog-box__item-title">
                      Listicle actually selvage activated charcoal for the
                      drinking vinegar{" "}
                    </h4>
                  </a>
                </div>

                <div className="blog-box__item">
                  <a href="" className="blog-box__img-link">
                    <img src={blogPicture2} alt="" className="blog-box__img" />
                  </a>
                  <div className="blog-box__links">
                    <span className="blog-box__date">September 28,2020 </span>
                    <a href="" className="blog-box__author">
                      | by Finnagan Morningstar{" "}
                    </a>
                    <a href="" className="blog-box__theme">
                      | Dining room interior
                    </a>
                  </div>
                  <a href="" className="blog-box__item-titleLink">
                    <h4 className="blog-box__item-title">
                      Red selfies edison bulb four dollar toast humblebrag
                    </h4>
                  </a>
                </div>
              </div>
            </div>
          </section>
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
