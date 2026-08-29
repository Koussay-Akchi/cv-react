import {useEffect} from 'react';

import {headerID} from '../components/Sections/Header';
import {SectionId} from '../data/data';

export const useNavObserver = (selectors: string, handler: (section: SectionId | null) => void) => {
  useEffect(() => {
    const headings = document.querySelectorAll(selectors);
    const headingsArray = Array.from(headings);
    const indexMap = new Map(headingsArray.map((el, i) => [el.getAttribute('id'), i]));
    const headerWrapper = document.getElementById(headerID);

    const observer = new IntersectionObserver(
      entries => {
        const headerY = 0;

        entries.forEach(entry => {
          const currentY = entry.boundingClientRect.y;
          const id = entry.target.getAttribute('id');
          const currentIndex = indexMap.get(id);

          if (headerWrapper && currentIndex !== undefined) {
            const decision = {
              id,
              currentIndex,
              isIntersecting: entry.isIntersecting,
              currentRatio: entry.intersectionRatio,
              aboveToc: currentY < headerY,
              belowToc: !(currentY < headerY),
            };

            if (decision.isIntersecting) {
              handler(decision.id as SectionId);
            } else if (
              !decision.isIntersecting &&
              decision.currentRatio < 1 &&
              decision.currentRatio > 0 &&
              decision.belowToc &&
              currentIndex > 0
            ) {
              const currentVisible = headingsArray[currentIndex - 1]?.getAttribute('id');
              handler(currentVisible as SectionId);
            }
          }
        });
      },
      {
        root: null,
        threshold: 0.1,
        rootMargin: '0px 0px -70% 0px',
      },
    );
    headings.forEach(section => {
      observer.observe(section);
    });
    return () => {
      observer.disconnect();
    };
  }, []);
};
