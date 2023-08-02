import { Link } from "react-router-dom";

import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import pinterest from "../images/Pinterest.svg";
import youtube from "../images/youtube.svg";
import whatsapp from "../images/whatsapp.svg";
import SimpleSlider from "../components/gallerySlider/gallerySlider";

const ContactPage = () => {
  return (
    <>
      <div className="map">
        <div className="breadcrumbs">
          <div className="container">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link className="breadcrumbs__link" to="/">
                  Home
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <p className="breadcrumbs__link">Contact</p>
              </li>
            </ul>
          </div>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14995.373360357326!2d-122.41914695847093!3d37.80435822024824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580f18d8c6ea7%3A0x5d7f53fb70a3a903!2zNzI1IEdyZWVuIFN0LCBTYW4gRnJhbmNpc2NvLCBDQSA5NDEzMywg0KHQqNCQ!5e0!3m2!1sru!2sru!4v1690199015039!5m2!1sru!2sru"
          width="100%"
          style={{ border: "0" }}
          // allowfullscreen=""
          loading="lazy"
          // referrerpolicy="no-referrer-when-downgrade"
        ></iframe>

        <section className="contact">
          <div className="container">
            <h3 className="contact__title">Contact Us</h3>

            <ul className="contact__social">
              <li className="contact__social-item">
                <a href="#" className="contact__social-link">
                  <img
                    src={facebook}
                    alt=""
                    className="contact__social-link-img"
                  />
                </a>
              </li>
              <li className="contact__social-item">
                <a href="#" className="contact__social-link">
                  <img
                    src={instagram}
                    alt=""
                    className="contact__social-link-img"
                  />
                </a>
              </li>
              <li className="contact__social-item">
                <a href="#" className="contact__social-link">
                  <img
                    src={pinterest}
                    alt=""
                    className="contact__social-link-img"
                  />
                </a>
              </li>
              <li className="contact__social-item">
                <a href="#" className="contact__social-link">
                  <img
                    src={whatsapp}
                    alt=""
                    className="contact__social-link-img"
                  />
                </a>
              </li>
              <li className="contact__social-item">
                <a href="#" className="contact__social-link">
                  <img
                    src={youtube}
                    alt=""
                    className="contact__social-link-img"
                  />
                </a>
              </li>
            </ul>

            <div className="contact__contact-box">
              <p className="contact__text">
                Vexillologist vape microdosing freegan pork belly deep v direct
                trade cray single-origin coffee street art. Viral shaman
                mustache master cleanse, pour-over affogato poutine copper mug
                marfa fanny pack normcore. Lo-fi pop-up banjo portland, echo
                park hammock
              </p>
              <a className="contact__phone" href="tel:+79601129978">
                (415) 829-7934
              </a>
              <div className="contact__st">725 Green St</div>
              <div className="contact__city">
                San Francisco, California(CA), 94133
              </div>
              <a className="info-email" href="mailto:stark.ts645@gmail.com">
                stark.ts645@gmail.com
              </a>
            </div>

            <form action="" className="contact__form">
              <input
                className="contact__form-input"
                placeholder="Your name"
                type="name"
              />
              <input
                className="contact__form-input"
                placeholder="Your e-mail"
                type="email"
              />
              <textarea
                className="contact__form-area"
                placeholder="Your message"
              ></textarea>
              <button className="contact__form-btn" type="submit">
                Send
              </button>
            </form>
          </div>
          <div className="contact-slider">
            <SimpleSlider />
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;
