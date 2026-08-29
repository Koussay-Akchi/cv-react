import {ExternalLinkIcon} from '@heroicons/react/outline';
import classNames from 'classnames';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import {FC, memo, MouseEvent, useCallback, useEffect, useRef, useState} from 'react';
import {useTranslation} from 'react-i18next';

import {isMobile} from '../../config';
import {capture} from '../../lib/analytics';
import {portfolioItems, SectionId} from '../../data/data';
import {PortfolioItem} from '../../data/dataDef';
import useDetectOutsideClick from '../../hooks/useDetectOutsideClick';
import Section from '../Layout/Section';

const GithubStarsBadge: FC<{github: string}> = memo(({github}) => {
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    const match = github.match(/github\.com\/([^/]+)\/([^/]+)/);
    if (!match) return;
    const [, owner, repo] = match;
    fetch(`https://api.github.com/repos/${owner}/${repo}`)
      .then(res => res.json())
      .then(data => {
        if (typeof data.stargazers_count === 'number') {
          setStars(data.stargazers_count);
        }
      })
      .catch(() => {});
  }, [github]);

  if (stars === null) return null;

  return (
    <a
      className="absolute bottom-0 left-0 w-14 h-14 bg-[#181717] hover:bg-[#24292e] text-white rounded-tr-full flex items-end justify-start pl-2.5 pb-2.5 z-20 group transition-colors duration-200"
      href={github}
      onClick={(e) => e.stopPropagation()}
      rel="noopener noreferrer"
      target="_blank"
      title={`${stars} GitHub Stars`}>
      <div className="flex flex-col items-center justify-center">
        <svg className="w-3.5 h-3.5 fill-current text-yellow-400 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <span className="text-[10px] font-bold leading-none mt-0.5">{stars}</span>
      </div>
    </a>
  );
});

GithubStarsBadge.displayName = 'GithubStarsBadge';

const Portfolio: FC = memo(() => {
  const {t} = useTranslation();
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-8">
        <h2 className="self-center text-xl font-bold text-white">{t('checkOut')}</h2>
        <div className=" w-full columns-2 md:columns-3 lg:columns-2">
          {portfolioItems.map((item, index) => {
            const {title, image, github} = item;
            return (
              <div className="pb-6" key={`${title}-${index}`}>
                <div
                  className={classNames(
                    'relative h-max w-full overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl',
                  )}>
                  <Image alt={title} layout="responsive" loading="lazy" placeholder="blur" src={image} />
                  <ItemOverlay item={item} />
                  {github && <GithubStarsBadge github={github} />}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default dynamic(() => Promise.resolve(Portfolio), {ssr: false});

const ItemOverlay: FC<{item: PortfolioItem}> = memo(({item: {url, title, description}}) => {
  const [mobile, setMobile] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const {t} = useTranslation();

  useEffect(() => {
    if (isMobile) {
      setMobile(true);
    }
  }, []);
  useDetectOutsideClick(linkRef, () => setShowOverlay(false));

  const handleItemClick = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      if (mobile && !showOverlay) {
        event.preventDefault();
        setShowOverlay(!showOverlay);
      } else {
        capture('portfolio_item_clicked', {title, url});
      }
    },
    [mobile, showOverlay, title, url],
  );

  return (
    <a
      className={classNames(
        'absolute inset-0 h-full w-full  bg-gray-900 transition-all duration-300',
        {'opacity-0 hover:opacity-80': !mobile},
        showOverlay ? 'opacity-80' : 'opacity-0',
      )}
      href={url}
      onClick={handleItemClick}
      ref={linkRef}
      target="_blank">
      <div className="relative h-full w-full p-4">
        <div className="flex h-full w-full flex-col gap-y-2 overflow-y-auto">
          <h2 className="text-center font-bold text-white opacity-100">{t(title)}</h2>
          <p className="text-xs text-white opacity-100 sm:text-sm">{t(description)}</p>
        </div>
        <ExternalLinkIcon className="absolute bottom-1 right-1 h-4 w-4 shrink-0 text-white sm:bottom-2 sm:right-2" />
      </div>
    </a>
  );
});
