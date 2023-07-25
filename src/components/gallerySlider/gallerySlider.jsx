import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import s1img from "../../images/content/slider-gallery/1.jpg";
import s2img from "../../images/content/slider-gallery/2.jpg";
import s3img from "../../images/content/slider-gallery/3.jpg";
import s4img from "../../images/content/slider-gallery/4.jpg";
import s6img from "../../images/content/slider-gallery/6.jpg";
import s7img from "../../images/content/slider-gallery/7.jpg";
import s8img from "../../images/content/slider-gallery/8.jpg";
import s9img from "../../images/content/slider-gallery/9.jpg";
import s10img from "../../images/content/slider-gallery/10.jpg";
import s11img from "../../images/content/slider-gallery/11.jpg";

import React from "react";
import Slider from "react-slick";

import "./slider.scss";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
  };
  return (
    <Slider {...settings}>
      <div className="slider__item ">
        <button className="slider__link ">
          <p className="slider__title ">Truffaut literally trust</p>
          <img className="slider__img " src={s1img} alt="sliderImage" />
        </button>
        <button className="slider__link">
          <img className="slider__img" src={s2img} alt="sliderImage" />
          <p className="slider__title">Truffaut literally trust</p>
        </button>
        <button className="slider__link">
          <img className="slider__img" src={s3img} alt="sliderImage" />
          <p className="slider__title">Truffaut literally trust</p>
        </button>
        <button className="slider__link">
          <img className="slider__img" src={s4img} alt="sliderImage" />
          <p className="slider__title">Truffaut literally trust</p>
        </button>
        <button className="slider__link">
          <img className="slider__img" src={s6img} alt="sliderImage" />
          <p className="slider__title">Truffaut literally trust</p>
        </button>
        <button className="slider__link">
          <img className="slider__img" src={s7img} alt="sliderImage" />
          <p className="slider__title">Truffaut literally trust</p>
        </button>
        <button className="slider__link">
          <img className="slider__img" src={s8img} alt="sliderImage" />
          <p className="slider__title">Truffaut literally trust</p>
        </button>
        <button className="slider__link">
          <img className="slider__img" src={s9img} alt="sliderImage" />
          <p className="slider__title">Truffaut literally trust</p>
        </button>
        <button className="slider__link">
          <img className="slider__img" src={s10img} alt="sliderImage" />
          <p className="slider__title">Truffaut literally trust</p>
        </button>
        <button className="slider__link">
          <img className="slider__img" src={s11img} alt="sliderImage" />
          <p className="slider__title">Truffaut literally trust</p>
        </button>
      </div>
      <div className="slider__item ">
        <button className="slider__link ">
          <p className="slider__title ">Truffaut literally trust</p>
          <img className="slider__img " src={s1img} alt="sliderImage" />
        </button>
        <button className="slider__link">
          <img className="slider__img" src={s2img} alt="sliderImage" />
          <p className="slider__title">Truffaut literally trust</p>
        </button>
        <button className="slider__link">
          <img className="slider__img" src={s3img} alt="sliderImage" />
          <p className="slider__title">Truffaut literally trust</p>
        </button>
        <button className="slider__link">
          <img className="slider__img" src={s4img} alt="sliderImage" />
          <p className="slider__title">Truffaut literally trust</p>
        </button>
        <button className="slider__link">
          <img className="slider__img" src={s6img} alt="sliderImage" />
          <p className="slider__title">Truffaut literally trust</p>
        </button>
        <button className="slider__link">
          <img className="slider__img" src={s7img} alt="sliderImage" />
          <p className="slider__title">Truffaut literally trust</p>
        </button>
        <button className="slider__link">
          <img className="slider__img" src={s8img} alt="sliderImage" />
          <p className="slider__title">Truffaut literally trust</p>
        </button>
        <button className="slider__link">
          <img className="slider__img" src={s9img} alt="sliderImage" />
          <p className="slider__title">Truffaut literally trust</p>
        </button>
        <button className="slider__link">
          <img className="slider__img" src={s10img} alt="sliderImage" />
          <p className="slider__title">Truffaut literally trust</p>
        </button>
        <button className="slider__link">
          <img className="slider__img" src={s11img} alt="sliderImage" />
          <p className="slider__title">Truffaut literally trust</p>
        </button>
      </div>
      <div className="slider__item ">
        <button className="slider__link ">
          <p className="slider__title ">Truffaut literally trust</p>
          <img className="slider__img " src={s1img} alt="sliderImage" />
        </button>
        <button className="slider__link">
          <img className="slider__img" src={s2img} alt="sliderImage" />
          <p className="slider__title">Truffaut literally trust</p>
        </button>
        <button className="slider__link">
          <img className="slider__img" src={s3img} alt="sliderImage" />
          <p className="slider__title">Truffaut literally trust</p>
        </button>
        <button className="slider__link">
          <img className="slider__img" src={s4img} alt="sliderImage" />
          <p className="slider__title">Truffaut literally trust</p>
        </button>
        <button className="slider__link">
          <img className="slider__img" src={s6img} alt="sliderImage" />
          <p className="slider__title">Truffaut literally trust</p>
        </button>
        <button className="slider__link">
          <img className="slider__img" src={s7img} alt="sliderImage" />
          <p className="slider__title">Truffaut literally trust</p>
        </button>
        <button className="slider__link">
          <img className="slider__img" src={s8img} alt="sliderImage" />
          <p className="slider__title">Truffaut literally trust</p>
        </button>
        <button className="slider__link">
          <img className="slider__img" src={s9img} alt="sliderImage" />
          <p className="slider__title">Truffaut literally trust</p>
        </button>
        <button className="slider__link">
          <img className="slider__img" src={s10img} alt="sliderImage" />
          <p className="slider__title">Truffaut literally trust</p>
        </button>
        <button className="slider__link">
          <img className="slider__img" src={s11img} alt="sliderImage" />
          <p className="slider__title">Truffaut literally trust</p>
        </button>
      </div>
    </Slider>
  );
}
