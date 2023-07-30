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
  // const divRef = createRef();
  // const dimensions = useRefDimensions(divRef);

  // ========== тута мясо
  // const divRef = useRef<HTMLDivElement>(null);

  // const [width, setWidth] = useState(0);

  // useLayoutEffect(() => {
  //   if (divRef && divRef.current) {
  //     setWidth(divRef.current.offsetWidth);
  //     console.log(width);
  //   }
  // }, [divRef]);

  // useLayoutEffect(() => {
  //   if (divRef && divRef.current) {
  //     console.log(`ширина элемента: `, divRef.current.offsetWidth);
  //   }
  // });

  // ==========

  // ============== Test 2

  const ref: any = useRef();

  const observer = useRef(
    new ResizeObserver((entries) => {
      const { width } = entries[0].contentRect;
      console.log("current width: ", width);
    })
  );

  useEffect(() => {
    observer.current.observe(ref.current);
  }, [ref, observer]);

  // ================

  // 1300
  const PAGE_WIDTH: number = 1300;

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
