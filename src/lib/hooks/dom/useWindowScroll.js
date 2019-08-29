import { useEffect, useRef, useState } from 'react';

function getscolloffset() {
  if (window.pageXOffset) {
    return {
      x: window.pageXOffset,
      y: window.pageYOffset
    }
  } else {
    return {
      x: document.documentElement.scrollLeft + document.body.scrollLeft,
      y: document.documentElement.scrollTop + document.body.scrollTop
    }
  }
}

const useWindowScroll = () => {
  const frame = useRef(0);

  const [state, setState] = useState(getscolloffset());
  
  useEffect(() => {
    const handler = () => {
      cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        setState(getscolloffset());
      });
    };
    
    window.addEventListener('scroll', handler, {
      capture: false,
      passive: true,
    });
    
    // 初始化
    handler()

    return () => {
      cancelAnimationFrame(frame.current);
      window.removeEventListener('scroll', handler);
    };
    

  }, []);

  return state;
};


export default useWindowScroll;