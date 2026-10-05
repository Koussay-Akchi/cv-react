import {ExternalLinkIcon, PhotographIcon} from '@heroicons/react/outline';
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
import ProjectShowcaseModal from '../ShowcaseModal';

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
      className="group absolute bottom-0 left-0 z-20 flex h-14 w-14 items-end justify-start rounded-tr-full bg-[#181717] pb-2.5 pl-2.5 text-white transition-colors duration-200 hover:bg-[#24292e]"
      href={github}
      onClick={e => e.stopPropagation()}
      rel="noopener noreferrer"
      target="_blank"
      title={`${stars} GitHub Stars`}>
      <div className="flex flex-col items-center justify-center">
        <svg
          className="h-3.5 w-3.5 fill-current text-yellow-400 transition-transform duration-200 group-hover:scale-110"
          viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <span className="mt-0.5 text-[10px] font-bold leading-none">{stars}</span>
      </div>
    </a>
  );
});

GithubStarsBadge.displayName = 'GithubStarsBadge';

const Portfolio: FC = memo(() => {
  const {t} = useTranslation();
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenShowcase = useCallback((item: PortfolioItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
    capture('project_showcase_opened', {title: item.title});
  }, []);

  const handleCloseShowcase = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-8">
        <h2 className="self-center text-xl font-bold text-white">{t('checkOut')}</h2>
        <div className="w-full columns-1 gap-6 sm:columns-2 md:columns-3 lg:columns-2">
          {portfolioItems.map((item, index) => {
            const {title, image, github, gallery} = item;
            const isStatic = typeof image !== 'string';
            return (
              <div className="break-inside-avoid pb-6" key={`${title}-${index}`}>
                <div
                  className={classNames(
                    'relative h-max w-full overflow-hidden rounded-2xl border border-neutral-700/40 bg-neutral-900 shadow-lg shadow-black/30 lg:shadow-xl',
                  )}>
                  {isStatic ? (
                    <Image alt={title} layout="responsive" loading="lazy" placeholder="blur" src={image} />
                  ) : (
                    <img alt={title} className="h-auto w-full object-cover" loading="lazy" src={image} />
                  )}
                  <ItemOverlay item={item} onOpenShowcase={() => handleOpenShowcase(item)} />
                  {github && <GithubStarsBadge github={github} />}
                  {gallery && gallery.length > 0 && (
                    <div className="pointer-events-none absolute right-2.5 top-2.5 z-20">
                      <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-black/60 px-2.5 py-1 text-[11px] font-semibold text-white shadow-sm backdrop-blur-md">
                        <PhotographIcon className="h-3.5 w-3.5 text-orange-400" />
                        {gallery.length}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <ProjectShowcaseModal isOpen={isModalOpen} item={selectedItem} onClose={handleCloseShowcase} />
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default dynamic(() => Promise.resolve(Portfolio), {ssr: false});

const ItemOverlay: FC<{item: PortfolioItem; onOpenShowcase?: () => void}> = memo(({item, onOpenShowcase}) => {
  const {url, title, description, gallery} = item;
  const [mobile, setMobile] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const linkRef = useRef<HTMLDivElement>(null);
  const {t} = useTranslation();

  useEffect(() => {
    if (isMobile) {
      setMobile(true);
    }
  }, []);
  useDetectOutsideClick(linkRef, () => setShowOverlay(false));

  const handleItemClick = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      if (gallery && gallery.length > 0) {
        event.preventDefault();
        onOpenShowcase?.();
        return;
      }

      if (mobile && !showOverlay) {
        event.preventDefault();
        setShowOverlay(!showOverlay);
      } else if (url) {
        capture('portfolio_item_clicked', {title, url});
        window.open(url, '_blank', 'noopener,noreferrer');
      }
    },
    [gallery, mobile, onOpenShowcase, showOverlay, title, url],
  );

  return (
    <div
      className={classNames(
        'absolute inset-0 flex h-full w-full cursor-pointer flex-col justify-between bg-gray-900/90 p-4 transition-all duration-300',
        {'opacity-0 hover:opacity-100': !mobile},
        showOverlay ? 'opacity-100' : 'opacity-0',
      )}
      onClick={handleItemClick}
      ref={linkRef}>
      <div className="flex h-full w-full flex-col gap-y-2 overflow-y-auto">
        <div className="flex items-center justify-between gap-2">
          <h2 className="text-sm font-bold text-white opacity-100 sm:text-base">{t(title)}</h2>
          {gallery && gallery.length > 0 && (
            <span className="shrink-0 rounded-full border border-orange-500/40 bg-orange-500/20 px-2 py-0.5 text-[10px] font-bold text-orange-400">
              {t('showcase')}
            </span>
          )}
        </div>
        <p className="line-clamp-4 text-xs leading-relaxed text-neutral-200 sm:text-xs">{t(description)}</p>
      </div>

      <div className="mt-2 flex items-center justify-between border-t border-neutral-700/50 pt-2">
        {gallery && gallery.length > 0 ? (
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-400 hover:text-orange-300">
            <PhotographIcon className="h-4 w-4" />
            {t('viewShowcase')}
          </span>
        ) : (
          <span className="text-xs text-neutral-400">{t('viewProject')}</span>
        )}
        <ExternalLinkIcon className="h-4 w-4 shrink-0 text-white" />
      </div>
    </div>
  );
});
