'use client';

import { useEffect, useRef, useState } from 'react';
import { environment } from './environment';
import { useDebounce } from './useDebounce';

// type SizesResponse = { [key: string]: boolean };
// type SizesCallback<T extends SizesResponse> = (width: number, height: number) => T;

// const defaultWidth = 1280;
// const defaultHeight = 900;

// export const useSizes = <T extends SizesResponse>(sizesCallback: SizesCallback<T>): ReturnType<typeof sizesCallback> => {
//   const firstRender = useRef(true);
//   const [sizes, setSizes] = useState(sizesCallback(defaultWidth, defaultHeight));

//   const setWindowSize = () => {
//     if (environment.isServer) {
//       return;
//     }

//     const newSizes = sizesCallback(window.innerWidth, window.innerHeight);
//     if (JSON.stringify(sizes) !== JSON.stringify(newSizes)) {
//       setSizes(newSizes);
//     }
//   };

//   const throttledHandleWindowResize: () => void = useDebounce(setWindowSize, 250);

//   useEffect(() => {
//     window.addEventListener('resize', throttledHandleWindowResize);

//     if (firstRender.current) {
//       setWindowSize();
//       firstRender.current = false;
//     }

//     return function cleanup() {
//       window.removeEventListener('resize', throttledHandleWindowResize);
//     };
//   }, [sizes]); // eslint-disable-line react-hooks/exhaustive-deps

//   return sizes;
// };

export const useSizes = () => {
  // Initialize state with undefined width/height so server and client renders match
  const [windowSize, setWindowSize] = useState<any>({
      width: undefined,
      height: undefined,
  });

  useEffect(() => {
      const handleResize = () => {
          setWindowSize({
              width: window.innerWidth,
              height: window.innerHeight,
          });
      };

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};
