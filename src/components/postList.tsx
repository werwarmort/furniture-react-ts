import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalPopup from "./popupRofl/popupVideo.jsx";
import images from "./BlogStuff.ts";
import SmallCarousel from "./SmalCarousel-slider/SmallCarousel.tsx";
import leftArrow from "../images/leftArrowLight.svg";

import { Post } from "../pages/blog.tsx";

export interface CustomLinkProps {
  to: string;
  post: Post;
  children: React.ReactNode;
}

interface PostListProps {
  fetchedPosts: Post[];
  category?: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({ to, post, children }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to, { state: { post } });
  };

  return <div onClick={handleClick}>{children}</div>;
};

const POSTS_PER_PAGE = 10;

const PostList: React.FC<PostListProps> = ({ fetchedPosts, category }) => {
  const posts = fetchedPosts;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const filteredPosts =
    category === ""
      ? fetchedPosts
      : fetchedPosts.filter((post) => post.category === category);

  // Фильтрация постов на текущей странице
  const postsToShow = filteredPosts.slice(
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
                </a>
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
