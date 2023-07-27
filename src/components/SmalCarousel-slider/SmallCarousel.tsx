import { useState, useEffect, Children, cloneElement } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./SmallCarouselStyles.scss";

import { IconContext } from "react-icons";

const PAGE_WIDTH: number = 729;

const SmallCarousel = ({ children }: { children: any }) => {
  const [pages, setPages] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setPages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            height: "100%",
            minwidth: `${PAGE_WIDTH}px`,
            maxwidth: `${PAGE_WIDTH}px`,
          },
        });
      })
    );
  }, []);

  const handleLeftArrowClick = () => {
    setOffset((currentOffset: number) => {
      const newOffset = currentOffset + PAGE_WIDTH;
      return Math.min(newOffset, 0);
    });
  };

  const handleRightArrowClick = () => {
    setOffset((currentOffset: number) => {
      const newOffset = currentOffset - PAGE_WIDTH;
      const maxOffset = -(PAGE_WIDTH * (pages.length - 1));
      return Math.max(newOffset, maxOffset);
    });
  };

  return (
    <div className="main-container">
      <FaChevronLeft
        size="2rem"
        className="arrow-left"
        onClick={handleLeftArrowClick}
      />
      <div className="window">
        <div
          className="all-pages-container"
          style={{
            transform: `translateX(${offset}px)`,
          }}
        >
          {pages}
        </div>
      </div>
      <FaChevronRight
        size="2rem"
        className="arrow-right"
        onClick={handleRightArrowClick}
      />
    </div>
  );
};

export default SmallCarousel;
