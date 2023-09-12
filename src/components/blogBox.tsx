import images from "./BlogImages";

const BlogBox = () => {
  return (
    <>
      <h3 className="blog-box__title">More inspiration ideas in our blog</h3>
      <div className="blog-box__items">
        <div className="blog-box__item">
          <a href="" className="blog-box__img-link">
            <img className="blog-box__img" src={images.blogPicture1} alt="" />
          </a>
          <div className="blog-box__links">
            <span className="blog-box__date">March 12, 2020 </span>
            <a href="" className="blog-box__author">
              | by Ann Summers{" "}
            </a>
            <a href="" className="blog-box__theme">
              | Inrerior{" "}
            </a>
          </div>
          <a href="" className="blog-box__item-titleLink">
            <h4 className="blog-box__item-title">
              Listicle actually selvage activated charcoal for the drinking
              vinegar{" "}
            </h4>
          </a>
        </div>

        <div className="blog-box__item">
          <a href="" className="blog-box__img-link">
            <img className="blog-box__img" src={images.blogPicture2} alt="" />
          </a>
          <div className="blog-box__links">
            <span className="blog-box__date">September 28,2020 </span>
            <a href="" className="blog-box__author">
              | by Finnagan Morningstar{" "}
            </a>
            <a href="" className="blog-box__theme">
              | Dining room interior
            </a>
          </div>
          <a href="" className="blog-box__item-titleLink">
            <h4 className="blog-box__item-title">
              Red selfies edison bulb four dollar toast humblebrag
            </h4>
          </a>
        </div>
      </div>
    </>
  );
};

export default BlogBox;
