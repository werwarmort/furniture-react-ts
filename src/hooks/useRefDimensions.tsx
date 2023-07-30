import { useEffect, useState } from "react";

const useRefDimensions = (ref: any) => {
  const [dimensions, setDimensions] = useState({ width: 1, height: 2 });

  useEffect(() => {
    if (ref.current) {
      const { current } = ref;
      const boundingRect = current.getBoundingClientRect();
      const { width, height } = boundingRect;
      setDimensions({
        width: Math.round(width) * 0.554 + Math.round(width),
        height: Math.round(height),
      });
    }
  }, []);
  console.log(dimensions);
  return dimensions;
};

export default useRefDimensions;
