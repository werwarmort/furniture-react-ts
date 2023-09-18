import "../scss/style.scss";
import images from "../components/BlogImages.ts";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import CustomLink from "../components/customLink.tsx";
import BlogTags from "../components/blogItems/blogTags.tsx";
import CommentsBlock from "../components/blogPostItems/Comments.tsx";
export interface Post {
  category: string;
  postId: number;
  date: string;
  author: string;
  title: string;
  preview: { type: string; link: string; videoLink?: string };
  body: string;
  mainBody: string;
}
export interface FormValues {
  message: string;
  name: string;
  email: string;
}

const BlogPost = () => {
  const location = useLocation();
  const post = location.state ? (location.state as { post: Post }).post : null;
  const posts = location.state
    ? (location.state as { posts: Array<Post> }).posts
    : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [post]);

  if (!post) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <section className="blog">
        <div className="container">
          <div className="blog__inner">
            <div className="blog__items">
              <div className="blog__item blog-one__item">
                <img
                  className="blog__item-img"
                  src={images[post.preview.link]}
                />
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
                <span className="blog__item-title">{post.title}</span>
                <div className="blog-one__text">
                  <p>{post.mainBody}</p>
                </div>
                {/* <BlogTags /> */} // добавь postTags
                <div className="blog-one__links">
                  <div className="blog-one__box-prev">
                    <CustomLink
                      to={`/blog/${post.postId - 1}`}
                      post={post}
                      posts={posts || []}
                    >
                      <img src={images.arrowPrev} alt="ARRROW!" />
                    </CustomLink>

                    <span className="blog-one__link-prev">
                      Cred selfies edison bulb four dollar toast humblebrag
                    </span>
                  </div>
                  <div className="blog-one__box-next">
                    <span className="blog-one__link-next">
                      Semiotics fixie four dollar toast, next level
                    </span>

                    <CustomLink
                      to={`/blog/${post.postId + 1}`}
                      post={post}
                      posts={posts || []}
                    >
                      <img src={images.arrowNext} alt="ARRROW!" />
                    </CustomLink>
                  </div>
                </div>
              </div>
              <CommentsBlock post={post} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPost;
