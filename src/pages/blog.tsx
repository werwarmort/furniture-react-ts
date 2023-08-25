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
import PostList from "../components/postItem";

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
            <PostList />

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
