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

import images from "../components/BlogStuff.ts";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";

import moment from "moment";
import { faker } from "@faker-js/faker";

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
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    async function fetchComments() {
      try {
        if (post) {
          // Проверяем, что post не null
          const response = await axios.get<Comment[]>(
            `http://localhost:3001/comments?postId=${post.postId}`
          );
          setComments(response.data);
          // console.log("отправленный пост id ", post.postId);
        }
      } catch (error) {
        console.error("Ошибка загрузки комментариев:", error);
      }
    }

    fetchComments();
  }, [post?.postId]);
  // console.log("пришедшие комментарии: ", comments);

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
      date: moment().format("MMMM D, YYYY"), // Получаем сегодняшнюю дату в нужном формате
      photo: "none",
      replies: [],
    };
    console.log(JSON.stringify(formData));
    try {
      console.log(formData);
      const response = await axios.post(
        "http://localhost:3001/addComment",
        formData
      );
      console.log(formData);
      console.log(response.data.message); // Ответ от сервера
      reset(); // Если вы хотите сбросить форму после успешной отправки
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  if (!post) {
    return <div>Loading...</div>;
  }
  return (
    <section className="blog">
      <div className="container">
        <div className="blog__inner">
          <div className="blog__items">
            <div className="blog__item blog-one__item">
              <img className="blog__item-img" src={images[post.preview.link]} />
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
              {comments.map((comment, i) => (
                <div key={i} className="blog-one__comments-item">
                  <img
                    className="blog-one__comments-avatar"
                    src={avatar}
                    alt="avatar"
                  />
                  <div className="blog-one__comments-info">
                    <p className="blog-one__comments-name">{comment.name}</p>
                    <p className="blog-one__comments-date">{comment.date}</p>
                    <p className="blog-one__comments-text">{comment.message}</p>
                  </div>
                  <button className="blog-one__comments-reply">Reply</button>
                </div>
              ))}
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="blog-one__from">
              <h4 className="blog-one__form-title">Post a Coment</h4>
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
                // value={newComment.name}
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
              <button
                className="blog-one__form-btn"
                type="submit"
                disabled={!isValid}
              >
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
