import { Link } from "react-router-dom";

import playButton from "../images/play_button.svg";

const AboutPage = () => {
  return (
    <>
      <main className="main">
        <div className="breadcrumbs">
          <div className="container">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link className="breadcrumbs__link" to="home">
                  Home
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <Link className="breadcrumbs__link" to="about">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </main>

      <section className="about">
        <div className="about__prev">
          <div className="about__prev-title">About Us</div>
        </div>

        <div className="about__content">
          <div className="container">
            <div className="about__title">
              Balance in the simple through an informed marriage of design,
              functional and craft
            </div>
            <div className="about__text">
              <p>
                Vexillologist vape microdosing freegan pork belly deep v direct
                trade cray single-origin coffee street art. Viral shaman
                mustache master cleanse, pour-over affogato poutine copper mug
                marfa fanny pack normcore. Lo-fi pop-up banjo portland, echo
                park hammock chillwave literally post-ironic ramps subway tile
                kitsch. Shaman tumblr fixie echo park street art. Enamel pin
                vaporware wayfarers, organic succulents hella sustainable
                cardigan.
              </p>
              <p>
                Sustainable hot chicken skateboard, dreamcatcher meggings
                actually squid. Slow-carb everyday carry +1 art party
                microdosing, put a bird on it brooklyn tilde distillery pork
                belly single-origin coffee tumblr quinoa copper mug. Affogato
                cold-pressed unicorn, viral intelligentsia leggings raw denim
                kombucha tote bag messenger bag chambray vape coloring book
                scenester. Activated charcoal wayfarers church-key tote bag
                synth brunch. Retro cornhole
              </p>
            </div>
          </div>
          <div className="about__popup">
            <a className="about__popup-play" href="#">
              <img
                className="about__popup-imgBth"
                src={playButton}
                alt="play button"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
