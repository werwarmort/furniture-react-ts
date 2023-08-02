import "../scss/style.scss";

import search from "../images/search.svg";
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import pinterest from "../images/Pinterest.svg";
import youtube from "../images/youtube.svg";
import whatsapp from "../images/whatsapp.svg";
import SimpleSlider from "../components/gallerySlider/gallerySlider";
import blogImg1 from "../images/content/blog/bg-img1.jpg";

import arrowPrev from "../images/leftArrowLight.svg";
import arrowNext from "../images/rightArrowLight.svg";
import avatar from "../images/content/avatar.jpg";

const BlogPost = () => {
  return (
    <section className="blog">
      <div className="container">
        <div className="blog__inner">
          <div className="blog__items">
            <div className="blog__item blog-one__item">
              <img className="blog__item-img" src={blogImg1} alt="" />
              <div className="blog__item-info">
                <span className="blog__item-date">August 15, 2020</span> |{" "}
                <a className="blog__item-author" href="">
                  by Ann Summers
                </a>{" "}
                |
                <a className="blog__item-theme" href="">
                  Bedroom Furniture
                </a>
              </div>
              <span className="blog__item-title">
                Red selfies edison bulb four dollar toast humblebrag for the
                furniture
              </span>
              <div className="blog-one__text">
                <p>
                  Everyday carry actually neutra authentic kogi shabby chic
                  migas small batch craft beer. Literally williamsburg tote bag
                  farm-to-table mustache ugh deep v irony. Af man bun copper mug
                  iPhone enamel pin pug selvage hammock palo santo godard
                  thundercats coloring book yuccie woke. Ugh pok pok taxidermy
                  pabst enamel pin edison bulb farm-to-table. Yuccie portland
                  kickstarter, readymade ramps humblebrag ennui banjo mumblecore
                  vaporware pickled cray stumptown 8-bit mlkshk. Tumeric tousled
                  austin, kinfolk scenester authentic craft beer truffaut irony
                  intelligentsia YOLO lomo bushwick coloring book. Semiotics man
                  bun venmo viral cliche. Tousled yr williamsburg austin edison
                  bulb cloud bread vegan street art. Locavore food truck trust
                  fund palo santo asymmetrical, franzen deep v marfa kogi
                  whatever swag pop-up seitan.
                </p>
                <blockquote className="blog-one__blockquote">
                  “Simplicity is not the goal. It is the by-product of a good
                  idea and modest expectations”{" "}
                  <div className="blog__blockquote-author">Paul Rand</div>
                </blockquote>
                <p>
                  Af man bun copper mug iPhone enamel pin pug selvage hammock
                  palo santo godard thundercats coloring book yuccie woke. Ugh
                  pok pok taxidermy pabst enamel pin edison bulb farm-to-table.
                  Yuccie portland kickstarter, readymade ramps humblebrag ennui
                  banjo mumblecore vaporware pickled cray stumptown 8-bit
                  mlkshk. Tumeric tousled austin, kinfolk scenester authentic
                  craft beer truffaut irony intelligentsia YOLO lomo bushwick
                  coloring book. Semiotics man bun venmo viral cliche. Tousled
                  yr williamsburg austin edison bulb cloud bread vegan street
                  art. Locavore food truck trust fund palo santo asymmetrical,
                  franzen deep v marfa kogi whatever swag pop-up seitan.
                </p>
              </div>
              <div className="blog-one__tags">
                <h3 className="blog-one__tags-title">Tags</h3>
                <a href="#" className="blog-one__tags-link">
                  Bedroom furniture
                </a>
                <a href="#" className="blog-one__tags-link">
                  Office furniture
                </a>
                <a href="#" className="blog-one__tags-link">
                  Dining room futniture
                </a>
                <a href="#" className="blog-one__tags-link">
                  Chair
                </a>
              </div>
              <div className="blog-one__links">
                <div className="blog-one__box-prev">
                  <img src={arrowPrev} alt="ARRROW!" />
                  <a className="blog-one__link-prev" href="#">
                    <span>
                      Cred selfies edison bulb four dollar toast humblebrag
                    </span>
                  </a>
                </div>
                <div className="blog-one__box-next">
                  <a className="blog-one__link-next" href="#">
                    <span>Semiotics fixie four dollar toast, next level</span>
                  </a>
                  <img src={arrowNext} alt="ARRROW!" />
                </div>
              </div>
            </div>
            <div className="blog-one__comments">
              <h4 className="blog-one__comments-title">Comments:</h4>
              <div className="blog-one__comments-item">
                <img
                  className="blog-one__comments-avatar"
                  src={avatar}
                  alt="avatar"
                />
                <div className="blog-one__comments-info">
                  <p className="blog-one__comments-name">Lea Brown</p>
                  <p className="blog-one__comments-date">August 12, 2020</p>
                  <p className="blog-one__comments-text">
                    Tumeric tousled austin, kinfolk scenester authentic craft
                    beer truffaut irony intelligentsia YOLO lomo bushwick
                    coloring book. Semiotics man bun venmo viral cliche
                  </p>
                </div>
                <button className="blog-one__comments-reply">Reply</button>
              </div>
            </div>
            <form className="blog-one__from">
              <h4 className="blog-one__form-title">Post a Coment</h4>
              <textarea
                className="blog-one__form-textarea"
                placeholder="Your Opinion"
              ></textarea>
              <input
                className="blog-one__form-input"
                placeholder="Yout name"
                type="text"
              />
              <input
                className="blog-one__form-input"
                placeholder="Your e-mail"
                type="text"
              />
              <label className="blog-one__form-label">
                <input className="blog-one__form-labelInput" type="checkbox" />{" "}
                <p>Remember me</p>
              </label>
              <button className="blog-one__form-btn" type="submit">
                Submit
              </button>
            </form>
          </div>

          <aside className="aside">
            <form className="aside__search">
              <input
                className="aside__search-input"
                type="text"
                placeholder="Search"
              />
              <button className="aside__search-btn">
                <img src={search} alt="" />
              </button>
              <button className="aside__search-btn" type="submit"></button>
            </form>
            <div className="blog__category">
              <h6 className="blog__category-title"></h6>
              <ul className="blog__category-list">
                <li className="blog__category-item">
                  <a className="blog__category-link" href="#">
                    Dining room (1)
                  </a>
                </li>
                <li className="blog__category-item">
                  <a className="blog__category-link" href="#">
                    Office furniture (12)
                  </a>
                </li>
                <li className="blog__category-item">
                  <a className="blog__category-link" href="#">
                    Simple interiror design (2)
                  </a>
                </li>
                <li className="blog__category-item">
                  <a className="blog__category-link" href="#">
                    Design (4)
                  </a>
                </li>
                <li className="blog__category-item">
                  <a className="blog__category-link" href="#">
                    Bedroom Furniture (1)
                  </a>
                </li>
              </ul>
            </div>
            <div className="recent-posts">
              <h6 className="recent-posts__title">Recent Posts</h6>
              <ul className="recent-posts__list">
                <li className="recent-posts__item">
                  <a href="#" className="recent-posts__item-title">
                    Cred selfies edison bulb four dollar toast humblebrag
                  </a>
                  <span className="recent-posts__date">
                    August 10, 2020 | by Ann Summers
                  </span>
                  <a href="#" className="recent-posts__author">
                    | by Ann Summers
                  </a>
                </li>
                <li className="recent-posts__item">
                  <a href="#" className="recent-posts__item-title">
                    Semiotics fixie four dollar toast, next level woke scenester
                    direct trade photo booth
                  </a>
                  <span className="recent-posts__date">
                    September 30 ,2020{" "}
                  </span>
                  <a href="#" className="recent-posts__author">
                    | by Ann Summers
                  </a>
                </li>
                <li className="recent-posts__item">
                  <a href="#" className="recent-posts__item-title">
                    Cred selfies edison bulb four dollar toast humblebrag
                  </a>
                  <span className="recent-posts__date">May 2, 2020 </span>
                  <a href="#" className="recent-posts__author">
                    | by Ann Summers
                  </a>
                </li>
              </ul>
            </div>
            <div className="blog__tags">
              <h6 className="blog__tags-title">Tags</h6>
              <a href="#" className="blog__tags-link">
                Dining room futniture
              </a>
              <a href="#" className="blog__tags-link">
                Chair
              </a>
              <a href="#" className="blog__tags-link">
                Table
              </a>
              <a href="#" className="blog__tags-link">
                Bedroom
              </a>
              <a href="#" className="blog__tags-link">
                Office Furniture
              </a>
            </div>
            <ul className="blog__social">
              <li className="blog__social-item">
                <a href="#" className="contact__social-link">
                  <img
                    src={facebook}
                    alt=""
                    className="contact__social-link-img"
                  />
                </a>
              </li>
              <li className="blog__social-item">
                <a href="#" className="contact__social-link">
                  <img
                    src={instagram}
                    alt=""
                    className="contact__social-link-img"
                  />
                </a>
              </li>
              <li className="blog__social-item">
                <a href="#" className="contact__social-link">
                  <img
                    src={pinterest}
                    alt=""
                    className="contact__social-link-img"
                  />
                </a>
              </li>
              <li className="blog__social-item">
                <a href="#" className="contact__social-link">
                  <img
                    src={whatsapp}
                    alt=""
                    className="contact__social-link-img"
                  />
                </a>
              </li>
              <li className="blog__social-item">
                <a href="#" className="contact__social-link">
                  <img
                    src={youtube}
                    alt=""
                    className="contact__social-link-img"
                  />
                </a>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default BlogPost;
