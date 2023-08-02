import { useEffect, useRef, useState } from "react";
import "./styles.scss";

const HorizontalChart = () => {
  function findSize(progress) {
    return Math.floor(currentWidth * (progress / 100));
  }

  // отслеживаем изменение размеров карусели, привязка к .window
  const ref = useRef();

  const [currentWidth, setCurrentWidth] = useState(0);
  // const [pageWidth, setPageWidth] = useState(0);
  console.log("page Width width is ", currentWidth);

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
  // ==============

  const progressFirst = 80;
  const progressSecond = 70;
  const progressThird = 75;
  const progressFouth = 40;

  const styles = {
    first: {
      progress: progressFirst,
      size: findSize(progressFirst),
      title: "Design and technical drawings",
    },
    second: {
      progress: progressSecond,
      size: findSize(progressSecond),
      title: "Measurments",
    },
    third: {
      progress: progressThird,
      size: findSize(progressThird),
      title: "Furniture functionality analysis",
    },
    fouth: {
      progress: progressFouth,
      size: findSize(progressFouth),
      title: "Interior visualization",
    },
  };
  return (
    <>
      <div className="chart">
        {Object.keys(styles).map((style, i) => (
          <div key={i} className="chart__item">
            <div className="chart__text">
              <div className="chart__text-title">{styles[style].title}</div>
              <div className="chart__text-procent">
                {styles[style].progress}%
              </div>
            </div>
            <div className="chart__totalLine" ref={ref}>
              <div
                className="chart__progress"
                style={{ minWidth: `${styles[style].size}px` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HorizontalChart;
