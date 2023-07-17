import { useState, useEffect, Children, cloneElement } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Carousel.scss";

import { IconContext } from "react-icons";

const PAGE_WIDTH: number = 1317;

const Carousel = ({ children }: { children: any }) => {
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
        size="3rem"
        className="arrow"
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
        size="3rem"
        className="arrow"
        onClick={handleRightArrowClick}
      />
    </div>
  );
};

export default Carousel;
