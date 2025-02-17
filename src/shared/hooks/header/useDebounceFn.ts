import { useRef } from "react";

export const useDebounceFn = (fn: Function, delay: number) => {
  const timeoutRef = useRef<number | null>(null);

  return (...args: any[]) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      fn(...args);
    }, delay);
  };
};