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

  const [currentWidth, setCurrentWidth] = useState(0);
  const [pageWidth, setPageWidth] = useState(0);
  console.log("page Width width is ", pageWidth);

  const observer = useRef(
    new ResizeObserver((entries) => {
      const { width } = entries[0].contentRect;
      setCurrentWidth(width);
      console.log("current width: ", width);
    })
  );

  useEffect(() => {
    observer.current.observe(ref.current);
  }, [ref, observer]);
  // =======================

  // 1315 если > 945
  // 1370 on 945 до 847
  // 1371 on 847 до 647
  // 1420 on 647 до 560
  // 1340 от 560 до 457
  // 1310 если < 457
  const PAGE_WIDTH: number = pageWidth;
  useEffect(() => {
    /* eslint-disable */
    currentWidth > 945 && pageWidth != 1315
      ? (setPageWidth(1315),
        handleLeftArrowClick(),
        handleLeftArrowClick(),
        handleLeftArrowClick())
      : // console.log("page width", pageWidth))
        {};
    /* eslint-disable */
    currentWidth <= 945 && currentWidth > 847 && pageWidth != 1370
      ? (setPageWidth(1370),
        handleLeftArrowClick(),
        handleLeftArrowClick(),
        handleLeftArrowClick())
      : {};
    /* eslint-disable */
    currentWidth <= 847 && currentWidth > 647 && pageWidth != 1371
      ? (setPageWidth(1371),
        handleLeftArrowClick(),
        handleLeftArrowClick(),
        handleLeftArrowClick())
      : {};
    /* eslint-disable */
    currentWidth <= 647 && currentWidth > 560 && pageWidth != 1420
      ? (setPageWidth(1420),
        handleLeftArrowClick(),
        handleLeftArrowClick(),
        handleLeftArrowClick())
      : {};
    /* eslint-disable */
    currentWidth <= 560 && currentWidth > 458 && pageWidth != 1340
      ? (setPageWidth(1340),
        handleLeftArrowClick(),
        handleLeftArrowClick(),
        handleLeftArrowClick())
      : {};
    /* eslint-disable */
    currentWidth <= 458 && pageWidth != 1310
      ? (setPageWidth(1310),
        handleLeftArrowClick(),
        handleLeftArrowClick(),
        handleLeftArrowClick())
      : // console.log("page width", pageWidth))
        {};
    // currentWidth < 960 && currentWidth > 760 && pageWidth != 1360
    //   ? (setPageWidth(1360),
    //     handleLeftArrowClick(),
    //     handleLeftArrowClick(),
    //     handleLeftArrowClick())
    //   : // console.log("page width", pageWidth))
    //     {};

    // /* eslint-disable */
    // currentWidth < 760 && currentWidth > 670 && pageWidth != 1361
    //   ? (setPageWidth(1361),
    //     handleLeftArrowClick(),
    //     handleLeftArrowClick(),
    //     handleLeftArrowClick())
    //   : {};
    // /* eslint-disable */
    // currentWidth < 670 && currentWidth > 565 && pageWidth != 1420
    //   ? (setPageWidth(1420),
    //     handleLeftArrowClick(),
    //     handleLeftArrowClick(),
    //     handleLeftArrowClick())
    //   : {};

    /* eslint-disable */
    // currentWidth > 565 && pageWidth != 222
    //   ? (setPageWidth(222),
    //     handleLeftArrowClick(),
    //     handleLeftArrowClick(),
    //     handleLeftArrowClick())
    //   : {};
  }, [currentWidth]);

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
