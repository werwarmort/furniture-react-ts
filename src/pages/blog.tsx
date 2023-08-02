import "../scss/style.scss";

import search from "../images/search.svg";
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import pinterest from "../images/Pinterest.svg";
import youtube from "../images/youtube.svg";
import whatsapp from "../images/whatsapp.svg";
import SimpleSlider from "../components/gallerySlider/gallerySlider";
import blogImg1 from "../images/content/blog/bg-img1.jpg";
import blogImg2 from "../images/content/blog/bg-img2.jpg";
import blogImg3 from "../images/content/blog/bg-img3.jpg";

import leftArrow from "../images/arrow-left.svg";
import rightArrow from "../images/arrow-right.svg";

import ModalPopup from "../components/popupRofl/popupVideo";
import SmallCarousel from "../components/SmalCarousel-slider/SmallCarousel";

import { Link } from "react-router-dom";

const BlogPage = () => {
  return (
    <>
      <div className="breadcrumbs">
        <div className="container">
          <ul className="breadcrumbs__list">
            <li className="breadcrumbs__item">
              <Link className="breadcrumbs__link" to="/">
                Home
              </Link>
            </li>
            <li className="breadcrumbs__item">
              <p className="breadcrumbs__link">Blog</p>
            </li>
          </ul>
        </div>
      </div>
      <section className="blog">
        <div className="container">
          <div className="blog__inner">
            <div className="blog__items">
              <div className="blog__item">
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
                {/* <Link to="post" className="blog__item-link"> */}
                <Link to="/post" className="blog__item-title">
                  Red selfies edison bulb four dollar toast humblebrag for the
                  furniture
                </Link>
                {/* </Link> */}
                <p className="blog__item-text">
                  Everyday carry actually neutra authentic kogi shabby chic
                  migas small batch craft beer. Literally williamsburg tote bag
                  farm-to-table mustache ugh deep v irony. Af man bun copper mug
                  iPhone enamel pin pug selvage hammock palo santo godard
                  thundercats coloring book yuccie woke. Ugh pok pok taxidermy
                  pabst enamel pin edison bulb farm-to-table
                </p>
              </div>

              <blockquote className="blog__blockquote">
                “Simplicity is not the goal. It is the by-product of a good idea
                and modest expectations”{" "}
                <div className="blog__blockquote-author">Paul Rand</div>
              </blockquote>

              <div className="blog__item article-popup">
                <div className="article-popup-box">
                  <img className="blog__item-img" src={blogImg2} alt="image" />
                  <div className="blog__item-popup">
                    <ModalPopup
                      link={"https://www.youtube.com/embed/4UZrsTqkcW4"}
                    />
                  </div>
                </div>

                <div className="blog__item-info">
                  <span className="blog__item-date">August 12, 2020</span> |{" "}
                  <a className="blog__item-author" href="">
                    Lux Morningstar
                  </a>{" "}
                  |
                  <a className="blog__item-theme" href="">
                    Design
                  </a>
                  <div className="blog__item-link">
                    <h3 className="blog__item-title">
                      Authentic kogi shabby chic
                    </h3>
                  </div>
                </div>
              </div>

              <div className="blog__item  article-slider">
                <div className="article-slider__box">
                  <SmallCarousel>
                    <img
                      className="article-slider__img"
                      src={blogImg3}
                      alt=""
                    />
                    <img
                      className="article-slider__img"
                      src={blogImg3}
                      alt=""
                    />
                    <img
                      className="article-slider__img"
                      src={blogImg3}
                      alt=""
                    />
                  </SmallCarousel>
                </div>

                <div className="blog__item-info">
                  <span className="blog__item-date">August 18, 2020</span> |{" "}
                  <a className="blog__item-author" href="">
                    by Ann Summers
                  </a>{" "}
                  |
                  <a className="blog__item-theme" href="">
                    Table Furniture
                  </a>
                </div>
                <div className="blog__item-link">
                  <h3 className="blog__item-title">
                    Red selfies edison bulb four dollar toast humblebrag for the
                    furniture
                  </h3>
                </div>
                <p className="blog__item-text">
                  Everyday carry actually neutra authentic kogi shabby chic
                  migas small batch craft beer. Literally williamsburg tote bag
                  farm-to-table mustache ugh deep v irony. Af man bun copper mug
                  iPhone enamel pin pug selvage hammock palo santo godard
                  thundercats coloring book yuccie woke. Ugh pok pok taxidermy
                  pabst enamel pin edison bulb farm-to-table
                </p>
              </div>

              <div className="pagination">
                <button className="pagination__arrow pagination__arrow--disabled">
                  <img
                    src={leftArrow}
                    alt=""
                    className="pagination__arrow-icon"
                  />
                </button>

                <ul className="pagination__list">
                  <li className="pagination__list-item">
                    <button className="pagination__list-num pagination__active-num">
                      1
                    </button>
                    <button className="pagination__list-num">2</button>
                  </li>
                </ul>
                <button className="pagination__arrow">
                  <img
                    src={rightArrow}
                    alt=""
                    className="pagination__arrow-icon"
                  />
                </button>
              </div>
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
                <h6 className="blog__category-title">Category</h6>
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
                      Semiotics fixie four dollar toast, next level woke
                      scenester direct trade photo booth
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
    </>
  );
};

export default BlogPage;
