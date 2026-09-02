import {useEffect} from 'react';

import {headerID} from '../components/Sections/Header';
import {SectionId} from '../data/data';

export const useNavObserver = (selectors: string, handler: (section: SectionId | null) => void) => {
  useEffect(() => {
    let headingsArray: Element[] = [];
    let indexMap = new Map<string, number>();
    const headerWrapper = document.getElementById(headerID);

    const observer = new IntersectionObserver(
      entries => {
        const headerY = 0;

        entries.forEach(entry => {
          const currentY = entry.boundingClientRect.y;
          const id = entry.target.getAttribute('id');
          const currentIndex = id ? indexMap.get(id) : undefined;

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

    const observedSet = new Set<Element>();
    const updateObservedElements = () => {
      const headings = document.querySelectorAll(selectors);
      headingsArray = Array.from(headings);
      indexMap = new Map(headingsArray.map((el, i) => [el.getAttribute('id') || '', i]));
      headingsArray.forEach(section => {
        if (!observedSet.has(section)) {
          observer.observe(section);
          observedSet.add(section);
        }
      });
    };

    updateObservedElements();

    const mutationObserver = new MutationObserver(() => {
      updateObservedElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, [handler, selectors]);
};
