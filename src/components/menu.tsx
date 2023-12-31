import bigLogo from "../images/BigLogo.svg";
import close from "../images/close.svg";
import rightsideImg from "../images/content/Rectangle.jpg";
import { NavLink, Link } from "react-router-dom";

const RightSideMenu = ({
  active,
  setActive,
}: {
  active: boolean;
  setActive: Function;
}) => {
  return (
    <div className={active ? "rightside-menu active" : "rightside-menu"}>
      <button className="rightside-menu__close">
        <img onClick={() => setActive(false)} src={close} alt="" />
      </button>
      <div className="rightside-menu__content">
        <Link className="rightside-menu__logo" to="/">
          <img src={bigLogo} alt="" />
        </Link>
        <h4 className="rightside-menu__title">Furniture for life</h4>
        <div className="menu-deviceWidth540">
          <h2>
            <NavLink className="menu-deviceWidth540__title" to="/">
              Home
            </NavLink>
          </h2>
          <h2>
            <NavLink className="menu-deviceWidth540__title" to="/about">
              About
            </NavLink>
          </h2>
          <h2>
            <NavLink className="menu-deviceWidth540__title" to="/gallery">
              Gallery
            </NavLink>
          </h2>
          <h2>
            <NavLink className="menu-deviceWidth540__title" to="/blog">
              Blog
            </NavLink>
          </h2>
          <h2>
            <NavLink className="menu-deviceWidth540__title" to="/contact">
              Contact
            </NavLink>
          </h2>
        </div>
        <div className="rightside-menu__line" />
        <h3 className="rightside-menu__list">Обратная связь</h3>
        <h3 className="rightside-menu__list">Заказы</h3>
        <p className="rightside-menu__text">
          Sustainable hot chicken skateboard, dreamcatcher meggings actually
          squid. Slow-carb everyday carry +1 art party microdosing, put a bird
          on it brooklyn
        </p>
        <img
          className="rightside-menu__images"
          src={rightsideImg}
          alt="images"
        />
      </div>
    </div>
  );
};

export default RightSideMenu;
