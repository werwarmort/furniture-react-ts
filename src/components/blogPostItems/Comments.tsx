import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormValues } from "../../pages/blogPost.tsx";
import moment from "moment";
import { Link } from "react-router-dom";
import axios from "axios";
import { Post } from "../../pages/blog.tsx";
import { useAppDispatch } from "../../hooks/redux-hooks.ts";
import images from "../BlogImages.ts";
import { removeUser } from "../../store/slices/userSlice.js";

export interface Comment {
  postId: number;
  name: string;
  email: string;
  date: string;
  message: string;
  photo: string;
  replies: Comment[];
}

interface CommentsBlockProps {
  post: Post | undefined;
}

const CommentsBlock: React.FC<CommentsBlockProps> = ({ post }) => {
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

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<FormValues>({ mode: "onBlur" });

  useEffect(() => {
    fetchComments();
  }, [post?.postId]);

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

  const handleReplyClick = (comment: Comment) => {
    if (selectedComment === comment) {
      setSelectedComment(null);
      setReply("");
    } else {
      setSelectedComment(comment);
      setReply(`Reply to ${comment.name} (${comment.message.slice(0, 30)}...)`);
    }
  };

  const HandleRemoveAuthenticationFromLocalStorage = () => {
    localStorage.removeItem("authenticated");
    setAuthenticated(null);
    localStorage.removeItem("email");
    setAuthenticatedEmail(null);
  };

  return (
    <>
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
                {comment.replies.length > 0 && comment.replies[0] !== null
                  ? ` ответил на пост: "
                        ${comment.replies[0].message.slice(0, 30)}..."`
                  : ""}
              </p>

              <p className="blog-one__comments-date">{comment.date}</p>
              <p className="blog-one__comments-text">{comment.message}</p>
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
      <form onSubmit={handleSubmit(onSubmit)} className="blog-one__from">
        <h4 className="blog-one__form-title">{reply || "Post a Comment"}</h4>
        <div className="error">
          {errors?.message && <p>{errors?.message?.message || "Error!"}</p>}
        </div>
        <textarea
          {...register("message", {
            required: "Поле обязательно к заполнению",
            minLength: {
              value: 5,
              message: "сообщение должно содеражть как минимум 5 символов",
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
              message: "никнейм должен содеражать не менее 3 символов",
            },
          })}
          className="blog-one__form-input"
          placeholder="Yout name"
          type="text"
        />
        {errors?.email && (
          <p className="error">{errors?.email?.message || "Error!"}</p>
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
          <input className="blog-one__form-labelInput" type="checkbox" />{" "}
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
    </>
  );
};

export default CommentsBlock;
