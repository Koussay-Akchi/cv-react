import classNames from 'classnames';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import {FC, memo, UIEventHandler, useCallback, useEffect, useRef, useState} from 'react';
import {useTranslation} from 'react-i18next';

import {SectionId, testimonial} from '../../data/data';
import type {Testimonial} from '../../data/dataDef';
import useInterval from '../../hooks/useInterval';
import QuoteIcon from '../Icon/QuoteIcon';
import Section from '../Layout/Section';

const Testimonials: FC = memo(() => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const itemWidth = useRef(0);
  const scrollContainer = useRef<HTMLDivElement>(null);

  const {imageSrc, testimonials} = testimonial;

  useEffect(() => {
    const element = scrollContainer.current;
    if (!element) return;

    const resizeObserver = new ResizeObserver(entries => {
      for (const entry of entries) {
        if (entry.target === element) {
          itemWidth.current = element.offsetWidth;
        }
      }
    });

    resizeObserver.observe(element);
    return () => resizeObserver.disconnect();
  }, []);

  const handleScroll = useCallback<UIEventHandler<HTMLDivElement>>(
    event => {
      const newScrollValue = event.currentTarget.scrollLeft;

      if (itemWidth.current > 0) {
        const newIndex = Math.round(newScrollValue / itemWidth.current);
        if (newIndex !== activeIndex) {
          setActiveIndex(newIndex);
        }
      }
    },
    [activeIndex],
  );

  const setTestimonial = useCallback(
    (index: number) => () => {
      if (scrollContainer.current) {
        scrollContainer.current.scrollLeft = itemWidth.current * index;
      }
    },
    [],
  );

  const next = useCallback(() => {
    if (activeIndex + 1 === testimonials.length) {
      setTestimonial(0)();
    } else {
      setTestimonial(activeIndex + 1)();
    }
  }, [activeIndex, setTestimonial, testimonials.length]);

  useInterval(next, 10000);

  const {i18n} = useTranslation();

  if (!testimonials.length) {
    return null;
  }

  return (
    <Section noPadding sectionId={SectionId.Testimonials}>
      <div
        className={classNames(
          'relative flex w-full items-center justify-center overflow-hidden px-4 py-16 md:py-24 lg:px-8',
          {'bg-neutral-700': !imageSrc},
        )}>
        {imageSrc ? (
          <Image
            alt=""
            aria-hidden
            className="object-cover object-center"
            fill
            loading="lazy"
            quality={55}
            sizes="100vw"
            src={imageSrc}
          />
        ) : null}
        <div className="relative z-10 w-full max-w-screen-md px-4 lg:px-0">
          <div className="flex flex-col items-center gap-y-6 rounded-xl bg-gray-800/60 p-6 shadow-lg">
            {i18n.language === 'en' && (
              <h2 className="self-center text-base font-semibold text-white">( Translated from french )</h2>
            )}
            <div
              className="no-scrollbar flex w-full touch-pan-x snap-x snap-mandatory gap-x-6 overflow-x-auto scroll-smooth"
              onScroll={handleScroll}
              ref={scrollContainer}>
              {testimonials.map((testimonial, index) => {
                const isActive = index === activeIndex;
                return (
                  <Testimonial isActive={isActive} key={`${testimonial.name}-${index}`} testimonial={testimonial} />
                );
              })}
            </div>
            <div className="flex gap-x-4">
              {[...Array(testimonials.length)].map((_, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    aria-label="change testimonial"
                    className={classNames(
                      'h-3 w-3 rounded-full bg-gray-300 transition-all duration-500 sm:h-4 sm:w-4',
                      isActive ? 'scale-100 opacity-100' : 'scale-75 opacity-60',
                    )}
                    disabled={isActive}
                    key={`select-button-${index}`}
                    onClick={setTestimonial(index)}></button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
});

const Testimonial: FC<{testimonial: Testimonial; isActive: boolean}> = memo(
  ({testimonial: {text, name, image}, isActive}) => {
    const {t} = useTranslation();

    return (
      <div
        className={classNames(
          'flex w-full shrink-0 snap-start snap-always flex-col items-start gap-y-4 p-2 transition-opacity duration-1000 sm:flex-row sm:gap-x-6',
          isActive ? 'opacity-100' : 'opacity-0',
        )}>
        {image ? (
          <div className="relative h-14 w-14 shrink-0 sm:h-16 sm:w-16">
            <QuoteIcon className="absolute -left-2 -top-2 h-4 w-4 stroke-black text-white" />
            <Image
              alt="Testimonial"
              className="rounded-full"
              layout="fill"
              objectFit="cover"
              sizes="(min-width: 640px) 64px, 56px"
              src={image}
            />
          </div>
        ) : (
          <QuoteIcon className="h-5 w-5 shrink-0 text-white sm:h-8 sm:w-8" />
        )}
        <div className="flex flex-col gap-y-4">
          <p className="prose prose-sm font-medium italic text-white sm:prose-base">{t(text)}</p>
          <p className="text-xs italic text-white sm:text-sm md:text-base lg:text-lg">-- {name}</p>
        </div>
      </div>
    );
  },
);

export default dynamic(() => Promise.resolve(Testimonials), {ssr: false});
