import {
  useState,
  useEffect,
  Children,
  cloneElement,
  useRef,
  createRef,
  useLayoutEffect,
  memo,
} from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Carousel.scss";

import useRefDimensions from "../../hooks/useRefDimensions";
import { IconContext } from "react-icons";

const Carousel = ({ children }: { children: any }) => {
  // отслеживаем изменение размеров карусели, привязка к .window
  const ref: any = useRef();

  const [currentWidth, setCurrentWidth] = useState(1315);
  const [pageWidth, setPageWidth] = useState(1315);
  // console.log("current width is ", currentWidth);

  const observer = useRef(
    new ResizeObserver((entries) => {
      const { width } = entries[0].contentRect;
      setCurrentWidth(width);
      // console.log("current width: ", width);
    })
  );

  useEffect(() => {
    observer.current.observe(ref.current);
  }, [ref, observer]);
  // =======================

  // 1315 еслм экран > 960
  // 1385 on 960 до 680
  const PAGE_WIDTH: number = pageWidth;

  useEffect(() => {
    /* eslint-disable */
    currentWidth < 960 && pageWidth != 1385
      ? (setPageWidth(1385),
        handleLeftArrowClick(),
        handleLeftArrowClick(),
        handleLeftArrowClick())
      : // console.log("page width", pageWidth))
        {};
    /* eslint-disable */
    currentWidth > 960 && pageWidth != 1315
      ? (setPageWidth(1315),
        handleLeftArrowClick(),
        handleLeftArrowClick(),
        handleLeftArrowClick())
      : {};
  });

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
      {/* ref={divRef as React.RefObject<HTMLDivElement>} */}
      {/* ref={divRef as React.RefObject<HTMLDivElement>} */}
      <div className="window" ref={ref}>
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
