import React, {useEffect} from 'react';

import {aboutData, heroData, portfolioItems, skills, testimonial} from '../data/data';

type MaybeStaticImage = string | {src: string};

const toUrl = (img: MaybeStaticImage | undefined | null): string | null => {
  if (!img) return null;
  if (typeof img === 'string') return img;
  return img.src || null;
};

const gatherUrls = (): string[] => {
  const urls: string[] = [];
  const add = (u: string | null) => {
    if (u && !urls.includes(u)) urls.push(u);
  };
  add(toUrl(heroData.imageSrc));
  add(toUrl(aboutData.profileImageSrc));
  add(toUrl(aboutData.profileImageSrc2));
  portfolioItems.forEach(i => add(toUrl(i.image as MaybeStaticImage)));
  skills.forEach(g => {
    g.skills.forEach(s => {
      add(toUrl(s.image as MaybeStaticImage));
      add(toUrl(s.image2 as MaybeStaticImage));
    });
  });
  add(toUrl(testimonial.imageSrc));
  testimonial.testimonials.forEach(t => add(toUrl(t.image as MaybeStaticImage)));
  return urls;
};

const PreloadImages = React.memo((): null => {
  useEffect(() => {
    const urls = gatherUrls();
    urls.forEach(u => {
      const img = new Image();
      img.decoding = 'async';
      img.loading = 'eager';
      img.src = u;
    });
  }, []);
  return null;
});

export default PreloadImages;
