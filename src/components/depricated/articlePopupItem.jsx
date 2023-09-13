const BlogArticlePopup = () => {
  return (
    <>
      <div className="blog__item article-popup">
        <div className="article-popup-box">
          <img className="blog__item-img" src={blogImg2} alt="image" />
          <div className="blog__item-popup">
            <ModalPopup link={"https://www.youtube.com/embed/4UZrsTqkcW4"} />
          </div>
        </div>

        <div className="blog__item-info">
          <span className="blog__item-date">August 12, 2020</span> |{" "}
          <a className="blog__item-author" href="">
            Lux Morningstar
          </a>{" "}
          |
          <a className="blog__item-theme" href="">
            Design
          </a>
          <div className="blog__item-link">
            <h3 className="blog__item-title">Authentic kogi shabby chic</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogArticlePopup;
