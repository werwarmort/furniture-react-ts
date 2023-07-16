import bigLogo from "../images/BigLogo.svg";
import close from "../images/close.svg";
import rightsideImg from "../images/content/Rectangle.jpg";

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
        <a className="rightside-menu__logo" href="#">
          <img src={bigLogo} alt="" />
        </a>
        <h4 className="rightside-menu__title">Furniture for life</h4>
        <div className="rightside-menu__line" />

        <h3 className="rightside-menu__list">Обратная связь</h3>
        <h3 className="rightside-menu__list">блог</h3>
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
