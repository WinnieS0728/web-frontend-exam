import { useEffect, useState } from "react";

export function useResize() {
  const [per_page, setPer_page] = useState(4);
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    function handleChange() {
      const { innerWidth } = window;

      if (innerWidth <= 640) {
        setPer_page(4);
        setShowFilter(false);
      } else {
        setPer_page(6);
        setShowFilter(true);
      }
    }
    handleChange();
    window.addEventListener("resize", handleChange);

    return () => {
      window.removeEventListener("resize", handleChange);
    };
  }, []);

  return { per_page, showFilter };
}
