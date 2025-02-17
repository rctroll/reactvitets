import { useState, useEffect } from "react";

export const useScrollTrigger = (minTriggerHeight: number) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > minTriggerHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [minTriggerHeight]);

  return isScrolled;
};