import "../scss/style.scss";

import images from "../components/BlogImages.ts";

import {
  Link,
  NavigateFunction,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import moment from "moment";
import { removeUser } from "../store/slices/userSlice.js";
import { useAppDispatch } from "../hooks/redux-hooks.ts";

import CustomLink from "../components/customLink.tsx";
import SocialLinks from "../components/blogItems/socialLInks.tsx";
import BlogTags from "../components/blogItems/blogTags.tsx";

interface Post {
  category: string;
  postId: number;
  date: string;
  author: string;
  title: string;
  preview: { type: string; link: string; videoLink?: string };
  body: string;
  mainBody: string;
}

interface Comment {
  postId: number;
  name: string;
  email: string;
  date: string;
  message: string;
  photo: string;
  replies: Comment[];
}

interface FormValues {
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
  const [comments, setComments] = useState<Comment[]>([]);
  const dispatch = useAppDispatch();
  const [selectedComment, setSelectedComment] = useState<Comment | null>(null);
  const [reply, setReply] = useState<string>("");
  const [authenticated, setAuthenticated] = useState<string | null>(
    localStorage.getItem("authenticated")
  );
  const [authenticatedEmail, setAuthenticatedEmail] = useState<string | null>(
    localStorage.getItem("email")
  );

  const { postId } = useParams<{ postId: string }>();
  const navigate: NavigateFunction = useNavigate();

  const handleRightArrowClick = () => {
    let nextPostId = Number(postId) + 1;
    const maxPostId = 100; // поменяй на динам
    if (nextPostId < maxPostId) {
      navigate(`/blog/${nextPostId}`);
    }
  };
  const handleLeftArrowClick = () => {
    let nextPostId = Number(postId) - 1;
    if (nextPostId > 1) {
      navigate(`/blog/${nextPostId}`);
    }
  };

  const HandleRemoveAuthenticationFromLocalStorage = () => {
    localStorage.removeItem("authenticated");
    setAuthenticated(null);
    localStorage.removeItem("email");
    setAuthenticatedEmail(null);
  };

  const handleReplyClick = (comment: Comment) => {
    if (selectedComment === comment) {
      setSelectedComment(null);
      setReply("");
    } else {
      setSelectedComment(comment);
      setReply(`Reply to ${comment.name} (${comment.message.slice(0, 30)}...)`);
    }
  };

  const fetchComments = async () => {
    try {
      if (post) {
        const response = await axios.get<Comment[]>(
          `http://localhost:3001/comments?postId=${post.postId}`
        );
        setComments(response.data);
      }
    } catch (error) {
      console.error("Ошибка загрузки комментариев:", error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [post?.postId]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [post]);

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<FormValues>({ mode: "onBlur" });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const formData = {
      ...data,
      postId: post?.postId,
      commentId: new Date().getTime(),
      date: moment().format("MMMM D, YYYY"),
      photo: "none",
      replies: [selectedComment !== null ? selectedComment : null],
    };
    console.log(JSON.stringify(formData));
    try {
      console.log(formData);
      const response = await axios.post(
        "http://localhost:3001/addComment",
        formData
      );
      fetchComments();
      console.log(formData);
      console.log(response.data.message);
      reset();
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  // if (!post) {
  //   return <div>Loading...</div>;
  // }
  return (
    <>
      {post !== null ? (
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
                      <CustomLink
                        to={`/blog/${post.postId - 1}`}
                        post={post}
                        posts={posts || []}
                      >
                        <img
                          src={images.arrowPrev}
                          alt="ARRROW!"
                          onClick={() => handleLeftArrowClick()}
                        />
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
                        <img
                          src={images.arrowNext}
                          alt="ARRROW!"
                          onClick={() => handleRightArrowClick()}
                        />
                      </CustomLink>
                    </div>
                  </div>
                </div>

                <div className="blog-one__comments">
                  <h4 className="blog-one__comments-title">Comments:</h4>
                  {comments.map((comment, i) => (
                    <div key={i} className="blog-one__comments-item">
                      <img
                        className="blog-one__comments-avatar"
                        src={images.avatar}
                        alt="avatar"
                      />
                      <div className="blog-one__comments-info">
                        <p className="blog-one__comments-name">
                          {comment.name}
                          {comment.replies.length > 0 &&
                          comment.replies[0] !== null
                            ? ` ответил на пост: "
                        ${comment.replies[0].message.slice(0, 30)}..."`
                            : ""}
                        </p>

                        <p className="blog-one__comments-date">
                          {comment.date}
                        </p>
                        <p className="blog-one__comments-text">
                          {comment.message}
                        </p>
                      </div>
                      <button
                        className="blog-one__comments-reply"
                        onClick={() => handleReplyClick(comment)}
                      >
                        {selectedComment === comment ? "Cancel Reply" : "Reply"}
                      </button>
                    </div>
                  ))}
                </div>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="blog-one__from"
                >
                  <h4 className="blog-one__form-title">
                    {reply || "Post a Comment"}
                  </h4>
                  <div className="error">
                    {errors?.message && (
                      <p>{errors?.message?.message || "Error!"}</p>
                    )}
                  </div>
                  <textarea
                    {...register("message", {
                      required: "Поле обязательно к заполнению",
                      minLength: {
                        value: 5,
                        message:
                          "сообщение должно содеражть как минимум 5 символов",
                      },
                    })}
                    className="blog-one__form-textarea"
                    placeholder="Your Opinion"
                  ></textarea>

                  {errors?.name && (
                    <p className="error">{errors?.name?.message || "Error!"}</p>
                  )}
                  <input
                    {...register("name", {
                      required: "никнейм обязателен!",
                      minLength: {
                        value: 3,
                        message:
                          "никнейм должен содеражать не менее 3 символов",
                      },
                    })}
                    className="blog-one__form-input"
                    placeholder="Yout name"
                    type="text"
                  />
                  {errors?.email && (
                    <p className="error">
                      {errors?.email?.message || "Error!"}
                    </p>
                  )}
                  <input
                    {...register("email", {
                      required: "емейл обязателен!",
                      minLength: {
                        value: 10,
                        message: "eмейл должен содеражать не менее 10 символов",
                      },
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "неправильный формат емейла",
                      },
                    })}
                    className="blog-one__form-input"
                    placeholder="Your e-mail"
                    type="text"
                  />
                  <label className="blog-one__form-label">
                    <input
                      className="blog-one__form-labelInput"
                      type="checkbox"
                    />{" "}
                    <p>Remember me</p>
                  </label>

                  {authenticated ? (
                    <>
                      <button
                        className="blog-one__form-btn"
                        type="submit"
                        disabled={!isValid}
                      >
                        Submit
                      </button>
                      <p
                        className="blog-one__logOut"
                        onClick={() => {
                          dispatch(removeUser());
                          HandleRemoveAuthenticationFromLocalStorage();
                        }}
                      >
                        Log out from {authenticatedEmail}
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="blog-one__authorization-paragraphs">
                        <span className="blog-one__authorization-links">
                          <Link to={`/login`}>Log in </Link>
                        </span>
                        or
                        <span className="blog-one__authorization-links">
                          <Link to={`/register`}> Sign in </Link>
                        </span>
                        to write a comment
                      </p>
                    </>
                  )}
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
                    <img src={images.search} alt="" />
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
                <BlogTags />
                <SocialLinks />
              </aside>
            </div>
          </div>
        </section>
      ) : (
        {}
      )}
    </>
  );
};

export default BlogPost;
