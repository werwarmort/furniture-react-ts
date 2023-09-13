import leftArrow from "../images/arrow-left.svg";
import rightArrow from "../images/arrow-right.svg";

const BlogArticleSlider = () => {
  return (
    <>
      <div className="pagination">
        <button className="pagination__arrow pagination__arrow--disabled">
          <img src={leftArrow} alt="" className="pagination__arrow-icon" />
        </button>

        <ul className="pagination__list">
          <li className="pagination__list-item">
            <button className="pagination__list-num pagination__active-num">
              1
            </button>
            <button className="pagination__list-num">2</button>
          </li>
        </ul>
        <button className="pagination__arrow">
          <img src={rightArrow} alt="" className="pagination__arrow-icon" />
        </button>
      </div>
    </>
  );
};

export default BlogArticleSlider;
