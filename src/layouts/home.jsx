import menuSvg from "../images/icon_menu.svg";
import RightSideMenu from "./menu";
import React, { useState } from "react";

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
          <div className="container">
            <p className="test">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              odio fuga inventore dolore perspiciatis modi atque aliquid a,
              explicabo repellat libero iure esse illum et nisi minus, vero
              laboriosam est rem! Nobis labore laboriosam fugiat officia
              temporibus voluptate sint quos et, consectetur harum quo possimus
              nihil mollitia commodi facere suscipit nam magnam deleniti velit
              incidunt? Nesciunt recusandae, non doloribus perspiciatis
              voluptatem consequatur aspernatur fugit illo, molestiae sint
              dolorem? Molestiae error saepe incidunt alias id, illum ut iure
              iste rem reprehenderit voluptatibus quae at neque quasi beatae
              omnis culpa ratione quisquam vitae labore. Nobis consequuntur,
              delectus molestiae voluptates consectetur quidem obcaecati!
            </p>
            <p className="test">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              odio fuga inventore dolore perspiciatis modi atque aliquid a,
              explicabo repellat libero iure esse illum et nisi minus, vero
              laboriosam est rem! Nobis labore laboriosam fugiat officia
              temporibus voluptate sint quos et, consectetur harum quo possimus
              nihil mollitia commodi facere suscipit nam magnam deleniti velit
              incidunt? Nesciunt recusandae, non doloribus perspiciatis
              voluptatem consequatur aspernatur fugit illo, molestiae sint
              dolorem? Molestiae error saepe incidunt alias id, illum ut iure
              iste rem reprehenderit voluptatibus quae at neque quasi beatae
              omnis culpa ratione quisquam vitae labore. Nobis consequuntur,
              delectus molestiae voluptates consectetur quidem obcaecati!
            </p>
            <p className="test">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              odio fuga inventore dolore perspiciatis modi atque aliquid a,
              explicabo repellat libero iure esse illum et nisi minus, vero
              laboriosam est rem! Nobis labore laboriosam fugiat officia
              temporibus voluptate sint quos et, consectetur harum quo possimus
              nihil mollitia commodi facere suscipit nam magnam deleniti velit
              incidunt? Nesciunt recusandae, non doloribus perspiciatis
              voluptatem consequatur aspernatur fugit illo, molestiae sint
              dolorem? Molestiae error saepe incidunt alias id, illum ut iure
              iste rem reprehenderit voluptatibus quae at neque quasi beatae
              omnis culpa ratione quisquam vitae labore. Nobis consequuntur,
              delectus molestiae voluptates consectetur quidem obcaecati!
            </p>
            <p className="test">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              odio fuga inventore dolore perspiciatis modi atque aliquid a,
              explicabo repellat libero iure esse illum et nisi minus, vero
              laboriosam est rem! Nobis labore laboriosam fugiat officia
              temporibus voluptate sint quos et, consectetur harum quo possimus
              nihil mollitia commodi facere suscipit nam magnam deleniti velit
              incidunt? Nesciunt recusandae, non doloribus perspiciatis
              voluptatem consequatur aspernatur fugit illo, molestiae sint
              dolorem? Molestiae error saepe incidunt alias id, illum ut iure
              iste rem reprehenderit voluptatibus quae at neque quasi beatae
              omnis culpa ratione quisquam vitae labore. Nobis consequuntur,
              delectus molestiae voluptates consectetur quidem obcaecati!
            </p>
            <p className="test">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              odio fuga inventore dolore perspiciatis modi atque aliquid a,
              explicabo repellat libero iure esse illum et nisi minus, vero
              laboriosam est rem! Nobis labore laboriosam fugiat officia
              temporibus voluptate sint quos et, consectetur harum quo possimus
              nihil mollitia commodi facere suscipit nam magnam deleniti velit
              incidunt? Nesciunt recusandae, non doloribus perspiciatis
              voluptatem consequatur aspernatur fugit illo, molestiae sint
              dolorem? Molestiae error saepe incidunt alias id, illum ut iure
              iste rem reprehenderit voluptatibus quae at neque quasi beatae
              omnis culpa ratione quisquam vitae labore. Nobis consequuntur,
              delectus molestiae voluptates consectetur quidem obcaecati!
            </p>
            <p className="test">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              odio fuga inventore dolore perspiciatis modi atque aliquid a,
              explicabo repellat libero iure esse illum et nisi minus, vero
              laboriosam est rem! Nobis labore laboriosam fugiat officia
              temporibus voluptate sint quos et, consectetur harum quo possimus
              nihil mollitia commodi facere suscipit nam magnam deleniti velit
              incidunt? Nesciunt recusandae, non doloribus perspiciatis
              voluptatem consequatur aspernatur fugit illo, molestiae sint
              dolorem? Molestiae error saepe incidunt alias id, illum ut iure
              iste rem reprehenderit voluptatibus quae at neque quasi beatae
              omnis culpa ratione quisquam vitae labore. Nobis consequuntur,
              delectus molestiae voluptates consectetur quidem obcaecati!
            </p>
            <p className="test">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              odio fuga inventore dolore perspiciatis modi atque aliquid a,
              explicabo repellat libero iure esse illum et nisi minus, vero
              laboriosam est rem! Nobis labore laboriosam fugiat officia
              temporibus voluptate sint quos et, consectetur harum quo possimus
              nihil mollitia commodi facere suscipit nam magnam deleniti velit
              incidunt? Nesciunt recusandae, non doloribus perspiciatis
              voluptatem consequatur aspernatur fugit illo, molestiae sint
              dolorem? Molestiae error saepe incidunt alias id, illum ut iure
              iste rem reprehenderit voluptatibus quae at neque quasi beatae
              omnis culpa ratione quisquam vitae labore. Nobis consequuntur,
              delectus molestiae voluptates consectetur quidem obcaecati!
            </p>
            <p className="test">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              odio fuga inventore dolore perspiciatis modi atque aliquid a,
              explicabo repellat libero iure esse illum et nisi minus, vero
              laboriosam est rem! Nobis labore laboriosam fugiat officia
              temporibus voluptate sint quos et, consectetur harum quo possimus
              nihil mollitia commodi facere suscipit nam magnam deleniti velit
              incidunt? Nesciunt recusandae, non doloribus perspiciatis
              voluptatem consequatur aspernatur fugit illo, molestiae sint
              dolorem? Molestiae error saepe incidunt alias id, illum ut iure
              iste rem reprehenderit voluptatibus quae at neque quasi beatae
              omnis culpa ratione quisquam vitae labore. Nobis consequuntur,
              delectus molestiae voluptates consectetur quidem obcaecati!
            </p>
            <p className="test">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              odio fuga inventore dolore perspiciatis modi atque aliquid a,
              explicabo repellat libero iure esse illum et nisi minus, vero
              laboriosam est rem! Nobis labore laboriosam fugiat officia
              temporibus voluptate sint quos et, consectetur harum quo possimus
              nihil mollitia commodi facere suscipit nam magnam deleniti velit
              incidunt? Nesciunt recusandae, non doloribus perspiciatis
              voluptatem consequatur aspernatur fugit illo, molestiae sint
              dolorem? Molestiae error saepe incidunt alias id, illum ut iure
              iste rem reprehenderit voluptatibus quae at neque quasi beatae
              omnis culpa ratione quisquam vitae labore. Nobis consequuntur,
              delectus molestiae voluptates consectetur quidem obcaecati!
            </p>
          </div>
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
