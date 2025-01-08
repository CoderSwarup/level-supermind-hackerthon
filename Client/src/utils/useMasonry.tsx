import { useEffect, useState, useRef } from "react";

const useMasonry = () => {
  const masonryContainer = useRef<HTMLDivElement | null>(null);

  const [items, setItems] = useState<HTMLElement[]>([]);

  useEffect(() => {
    if (masonryContainer.current) {
      const masonryItem = Array.from(
        masonryContainer.current.children
      ) as HTMLElement[];
      setItems(masonryItem);
    }
  }, []);

  useEffect(() => {
    const handleMasonry = () => {
      if (!items || items.length < 1) return;

      let gapSize = 0;
      if (masonryContainer.current) {
        gapSize = parseInt(
          window
            .getComputedStyle(masonryContainer.current)
            .getPropertyValue("grid-row-gap")
        );
      }

      items.forEach((el) => {
        if (!(el instanceof HTMLElement)) return;
        let previous = el.previousSibling;

        while (previous) {
          if (previous.nodeType === 1) {
            el.style.marginTop = "0";
            if (
              previous &&
              elementLeft(previous as HTMLElement) === elementLeft(el)
            ) {
              el.style.marginTop =
                -(
                  elementTop(el) -
                  elementBottom(previous as HTMLElement) -
                  gapSize
                ) + "px";
              break;
            }
          }
          previous = previous.previousSibling;
        }
      });
    };

    handleMasonry();
    window.addEventListener("resize", handleMasonry);

    return () => {
      window.removeEventListener("resize", handleMasonry);
    };
  }, [items]);

  // Helper functions to get the positions and dimensions of elements
  const elementLeft = (el: HTMLElement): number => {
    return el.getBoundingClientRect().left;
  };

  const elementTop = (el: HTMLElement): number => {
    return el.getBoundingClientRect().top + window.scrollY;
  };

  const elementBottom = (el: HTMLElement): number => {
    return el.getBoundingClientRect().bottom + window.scrollY;
  };

  return masonryContainer;
};

export default useMasonry;
