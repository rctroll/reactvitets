import { useState, useEffect, useRef } from "react";
import { useDebounceFn } from '@shared/hooks/header/useDebounceFn.ts';

export const useElementSize = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  const updateSize = useDebounceFn(() => {
    if (ref.current) {
      const { clientWidth: width, clientHeight: height } = ref.current;
      setSize({ width, height });
    }
  }, 200);

  const is375 = size.width <= 375;
  const is768 = size.width > 375 && size.width <= 768;
  const is1920 = size.width > 1920;

  useEffect(() => {
    updateSize();
    window.addEventListener("resize", updateSize);

    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, [updateSize]);

  return { ref, ...size, breakpoints: { is375, is768, is1920 } };
};
