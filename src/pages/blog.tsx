import "../scss/style.scss";

import search from "../images/search.svg";
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import pinterest from "../images/Pinterest.svg";
import youtube from "../images/youtube.svg";
import whatsapp from "../images/whatsapp.svg";

import { Link, useNavigate } from "react-router-dom";
import PostList, { CustomLinkProps } from "../components/postList";
import { useEffect, useState } from "react";
import BlogCategory from "../components/blogCategory";
export interface Post {
  category: string;
  postId: number;
  date: string;
  author: string;
  title: string;
  preview: { type: string; link: string; videoLink?: string };
  body: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({ to, post, children }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to, { state: { post } });
  };

  return <div onClick={handleClick}>{children}</div>;
};

const BlogPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
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

  const renderRecentPosts = () => {
    const sortedPosts = posts.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    const recentPosts = sortedPosts.slice(0, 3);

    return recentPosts.map((post, index) => (
      <li key={index} className="recent-posts__item">
        <CustomLink to={`/blog/${post.postId}`} post={post}>
          <span className="recent-posts__item-title">{post.title}</span>
        </CustomLink>
        <span className="recent-posts__date">
          {post.date} | by {post.author}
        </span>
        <a href="#" className="recent-posts__author">
          | by {post.author}
        </a>
      </li>
    ));
  };

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
            <PostList fetchedPosts={posts} />

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
                <BlogCategory posts={posts} />
              </div>
              <div className="recent-posts">
                <h6 className="recent-posts__title">Recent Posts</h6>
                <ul className="recent-posts__list">{renderRecentPosts()}</ul>
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
