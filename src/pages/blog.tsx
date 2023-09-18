import "../scss/style.scss";

import { Link, useNavigate } from "react-router-dom";
import PostList from "../components/blogItems/postList";
import { useEffect, useState } from "react";
import BlogCategory from "../components/blogItems/blogCategory";
import { CustomLinkProps } from "../components/customLink";
import SocialLinks from "../components/blogItems/socialLInks";
import BlogTags from "../components/blogItems/blogTags";
import images from "../components/BlogImages";
export interface Post {
  category: string;
  postId: number;
  date: string;
  author: string;
  title: string;
  preview: { type: string; link: string; videoLink?: string };
  body: string;
  tags: string;
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
  const [sortedPostByTags, setSortedPostByTags] = useState<Post[]>(posts);
  useEffect(() => {
    fetch("http://localhost:3001/posts", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setSortedPostByTags(data);
      });
  }, []);

  const renderRecentPosts = () => {
    const sortedPosts = posts.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    const recentPosts = sortedPosts.slice(0, 3);
    return recentPosts.map((post, index) => (
      <li key={index} className="recent-posts__item">
        <CustomLink to={`/blog/${post.postId}`} post={post} posts={posts}>
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

  const BlogTagsToRender = [
    "Office Furniture",
    "Bedroom",
    "Table",
    "Chair",
    "Dining room futniture",
  ];

  const [category, setCategory] = useState<string>("");
  const handleCategoryClick = (selectedCategory: string) => {
    category === selectedCategory
      ? setCategory("")
      : setCategory(selectedCategory);
  };

  // обработка тегов
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const handleTagsClick = (selectedTag: string) => {
    if (!activeTags.includes(selectedTag)) {
      setActiveTags([...activeTags, selectedTag]);
    } else setActiveTags(activeTags.filter((tag) => tag !== selectedTag));
  };

  useEffect(() => {
    const postToSort = posts.filter((post) => {
      if (activeTags.length === 0) {
        return true;
      }
      return activeTags.some((tag) => post.tags.includes(tag));
    });
    setSortedPostByTags(postToSort);
  }, [activeTags]);
  // =========

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
            <PostList fetchedPosts={sortedPostByTags} category={category} />

            <aside className="aside">
              <form className="aside__search">
                <input
                  className="aside__search-input"
                  type="text"
                  placeholder="Search"
                />
                <button className="aside__search-btn">
                  <img src={images.search} alt="" />
                </button>
                <button className="aside__search-btn" type="submit"></button>
              </form>
              <div className="blog__category">
                <h6 className="blog__category-title">Category</h6>
                <BlogCategory
                  posts={sortedPostByTags}
                  categoryClick={handleCategoryClick}
                />
              </div>
              <div className="recent-posts">
                <h6 className="recent-posts__title">Recent Posts</h6>
                <ul className="recent-posts__list">{renderRecentPosts()}</ul>
              </div>
              <BlogTags
                tagsToRender={BlogTagsToRender}
                posts={posts}
                tagsClick={handleTagsClick}
                activeTags={activeTags}
              />
              <SocialLinks />
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
