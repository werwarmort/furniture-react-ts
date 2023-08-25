import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ModalPopup from "./popupRofl/popupVideo";
import images from "./BlogStuff.ts";
import SmallCarousel from "../components/SmalCarousel-slider/SmallCarousel";
import leftArrow from "../images/leftArrowLight.svg";
import rightArrow from "../images/rightArrowLight.svg";

import axios from "axios";
interface Post {
  category: string;
  postId: number;
  date: string;
  author: string;
  title: string;
  preview: { type: string; link: string; videoLink?: string };
  body: string;
}

interface CustomLinkProps {
  to: string;
  post: Post;
  children: React.ReactNode;
}

const CustomLink: React.FC<CustomLinkProps> = ({ to, post, children }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to, { state: { post } });
  };

  return <div onClick={handleClick}>{children}</div>;
};

const POSTS_PER_PAGE = 10;

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  // const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0); // Прокручивает в начало страницы при первой загрузке
  }, [currentPage]);

  useEffect(() => {
    fetch("http://localhost:3001/posts", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  // Фильтрация постов на текущей странице
  const postsToShow = posts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <div className="blog__items">
      {postsToShow.map((post) => (
        <div key={post.postId}>
          {post.preview.type === "img" && (
            <div className="blog__item">
              <img
                className="blog__item-img"
                src={images[post.preview.link]}
                alt=""
              />
              <div className="blog__item-info">
                <span className="blog__item-date">{post.date}</span> |{" "}
                <a className="blog__item-author" href="">
                  {post.author}
                </a>{" "}
                |
                <a className="blog__item-theme" href="">
                  {post.category}
                </a>
              </div>

              <CustomLink to={`/blog/${post.postId}`} post={post}>
                <h3 className="blog__item-title">{post.title}</h3>
              </CustomLink>

              <p className="blog__item-text">{post.body}</p>
            </div>
          )}
          {post.preview.type === "slider" && (
            <div key={post.postId} className="blog__item article-slider">
              <div className="article-slider__box">
                <SmallCarousel>
                  <img
                    className="article-slider__img"
                    src={images[post.preview.link]}
                    alt=""
                  />
                  <img
                    className="article-slider__img"
                    src={images[post.preview.link]}
                    alt=""
                  />
                  <img
                    className="article-slider__img"
                    src={images[post.preview.link]}
                    alt=""
                  />
                </SmallCarousel>
              </div>

              <div key={post.postId} className="blog__item-info">
                <span className="blog__item-date">{post.date}</span> |{" "}
                <a className="blog__item-author" href="">
                  {post.author}
                </a>{" "}
                |
                <a className="blog__item-theme" href="">
                  {post.category}
                </a>
              </div>
              <div className="blog__item-link">
                <CustomLink to={`/blog/${post.postId}`} post={post}>
                  <h3 className="blog__item-title">{post.title}</h3>
                </CustomLink>
              </div>
              <p className="blog__item-text">{post.body}</p>
            </div>
          )}
          {post.preview.type === "video" && (
            <div className="blog__item article-popup">
              <div className="article-popup-box">
                <img
                  className="blog__item-img"
                  src={images[post.preview.link]}
                  alt="image"
                />
                <div className="blog__item-popup">
                  <ModalPopup link={post.preview.videoLink} />
                </div>
              </div>

              <div className="blog__item-info">
                <span className="blog__item-date">{post.date}</span> |{" "}
                <a className="blog__item-author" href="">
                  {post.author}
                </a>{" "}
                |
                <a className="blog__item-theme" href="">
                  {post.category}
                </a>
                <div className="blog__item-link">
                  <h3 className="blog__item-title">{post.title}</h3>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}

      <div className="pagination">
        <button className="pagination__arrow pagination__arrow--disabled">
          <img src={leftArrow} alt="" className="pagination__arrow-icon" />
        </button>

        <ul className="pagination__list">
          <li className="pagination__list-item">
            {Array.from({
              length: Math.ceil(posts.length / POSTS_PER_PAGE),
            }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={
                  currentPage === index + 1
                    ? "pagination__list-num pagination__active-num"
                    : "pagination__list-num"
                }
              >
                {index + 1}
              </button>
            ))}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PostList;
