import images from "./BlogImages";
import Carousel from "./carousel/carousel";

const CustomSlider = () => {
  return (
    <Carousel>
      <div className="top__slider-item item-1">
        <img className="top__slider-img" src={images.sliderImg} alt="images" />

        <div className="top__slider-info">
          <h2 className="top__slider-title">Furniture collection probably</h2>
          <p className="top__slider-text">
            Deep v you probably haven't heard of them banh mi synth actually
            affogato. Aesthetic lyft ethical drinking vinegar austint
          </p>
        </div>
      </div>
      <div className="top__slider-item item-2">
        <img className="top__slider-img" src={images.sliderImg} alt="images" />
        <div className="top__slider-info">
          <h2 className="top__slider-title">Furniture collection probably</h2>
          <p className="top__slider-text">
            Deep v you probably haven't heard of them banh mi synth actually
            affogato. Aesthetic lyft ethical drinking vinegar austint
          </p>
        </div>
      </div>
      <div className="top__slider-item item-3">
        <img className="top__slider-img" src={images.sliderImg} alt="images" />
        <div className="top__slider-info">
          <h2 className="top__slider-title">Furniture collection probably</h2>
          <p className="top__slider-text">
            Deep v you probably haven't heard of them banh mi synth actually
            affogato. Aesthetic lyft ethical drinking vinegar austint
          </p>
        </div>
      </div>
    </Carousel>
  );
};

export default CustomSlider;
