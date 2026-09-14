import {Dialog, Transition} from '@headlessui/react';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ExternalLinkIcon,
  PhotographIcon,
  XIcon,
} from '@heroicons/react/outline';
import {FC, Fragment, memo, useCallback, useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';

import {PortfolioItem, ShowcaseImage} from '../data/dataDef';

interface ProjectShowcaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: PortfolioItem | null;
}

const ProjectShowcaseModal: FC<ProjectShowcaseModalProps> = memo(({isOpen, onClose, item}) => {
  const {t} = useTranslation();
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  useEffect(() => {
    if (isOpen) {
      setActiveImageIndex(0);
    }
  }, [isOpen, item]);

  const gallery = item?.gallery || [];
  const hasGallery = gallery.length > 0;
  const currentImage = hasGallery ? gallery[activeImageIndex] : null;

  const nextImage = useCallback(() => {
    if (!hasGallery) return;
    setActiveImageIndex(prev => (prev + 1) % gallery.length);
  }, [hasGallery, gallery.length]);

  const prevImage = useCallback(() => {
    if (!hasGallery) return;
    setActiveImageIndex(prev => (prev - 1 + gallery.length) % gallery.length);
  }, [hasGallery, gallery.length]);

  useEffect(() => {
    if (!isOpen || !hasGallery) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, hasGallery, nextImage, prevImage]);

  if (!item) return null;

  return (
    <Transition.Root as={Fragment} show={isOpen}>
      <Dialog as="div" className="fixed inset-0 z-50 overflow-y-auto" onClose={onClose}>
        <div className="flex min-h-screen items-center justify-center p-3 text-center sm:p-6">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <Dialog.Overlay className="fixed inset-0 bg-neutral-950/80 backdrop-blur-md transition-opacity" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95 translate-y-4"
            enterTo="opacity-100 scale-100 translate-y-0"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100 translate-y-0"
            leaveTo="opacity-0 scale-95 translate-y-4">
            <div className="relative inline-block w-full max-w-5xl transform overflow-hidden rounded-3xl border border-neutral-700/60 bg-neutral-900/95 p-5 text-left shadow-2xl backdrop-blur-xl transition-all sm:p-7">
              {/* Header */}
              <div className="flex items-start justify-between gap-4 border-b border-neutral-800 pb-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Dialog.Title as="h3" className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                      {t(item.title)}
                    </Dialog.Title>
                    {hasGallery && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-orange-500/15 px-2.5 py-0.5 text-xs font-semibold text-orange-400 border border-orange-500/30">
                        <PhotographIcon className="h-3.5 w-3.5" />
                        {gallery.length} {t('screens')}
                      </span>
                    )}
                  </div>
                  {item.tags && item.tags.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {item.tags.map((tag: string) => (
                        <span
                          className="rounded-full bg-neutral-800/90 px-2.5 py-0.5 text-xs font-medium text-neutral-300 border border-neutral-700/50"
                          key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <button
                  aria-label="Close modal"
                  className="rounded-full p-1.5 text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                  onClick={onClose}
                  type="button">
                  <XIcon className="h-6 w-6" />
                </button>
              </div>

              {/* Main Showcase Gallery */}
              {hasGallery && currentImage && (
                <div className="mt-4 flex flex-col gap-3">
                  <div className="group relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950">
                    <img
                      alt={currentImage.title || `Screenshot ${activeImageIndex + 1}`}
                      className="max-h-full max-w-full object-contain transition-transform duration-300"
                      src={currentImage.src}
                    />

                    {/* Navigation arrows */}
                    {gallery.length > 1 && (
                      <>
                        <button
                          aria-label="Previous screenshot"
                          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-neutral-900/80 p-2 text-white shadow-lg backdrop-blur-sm transition-all hover:scale-110 hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                          onClick={prevImage}
                          type="button">
                          <ChevronLeftIcon className="h-5 w-5" />
                        </button>
                        <button
                          aria-label="Next screenshot"
                          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-neutral-900/80 p-2 text-white shadow-lg backdrop-blur-sm transition-all hover:scale-110 hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                          onClick={nextImage}
                          type="button">
                          <ChevronRightIcon className="h-5 w-5" />
                        </button>
                      </>
                    )}

                    {/* Caption badge inside preview */}
                    {currentImage.title && (
                      <div className="absolute bottom-3 inset-x-3 flex justify-between items-center rounded-xl bg-neutral-900/85 px-4 py-2 text-xs font-medium text-white backdrop-blur-md border border-neutral-700/50">
                        <span className="font-semibold text-neutral-100">{t(currentImage.title)}</span>
                        <span className="text-neutral-400">
                          {activeImageIndex + 1} / {gallery.length}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Thumbnails strip */}
                  {gallery.length > 1 && (
                    <div className="flex gap-2 overflow-x-auto pb-1 pt-1 scrollbar-thin scrollbar-thumb-neutral-700">
                      {gallery.map((img: ShowcaseImage, idx: number) => {
                        const isSelected = idx === activeImageIndex;
                        return (
                          <button
                            aria-label={`Go to screenshot ${idx + 1}`}
                            className={`relative h-14 w-24 shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                              isSelected
                                ? 'border-orange-500 scale-105 shadow-md shadow-orange-500/20'
                                : 'border-neutral-800 opacity-60 hover:opacity-100'
                            }`}
                            key={img.src}
                            onClick={() => setActiveImageIndex(idx)}
                            type="button">
                            <img
                              alt={img.title || `Thumb ${idx + 1}`}
                              className="h-full w-full object-cover"
                              src={img.src}
                            />
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}

              {/* Description & Details */}
              <div className="mt-4 rounded-2xl bg-neutral-950/60 p-4 border border-neutral-800/80">
                <p className="text-sm leading-relaxed text-neutral-300 sm:text-base">
                  {t(item.description)}
                </p>
              </div>

              {/* Action buttons */}
              <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-neutral-800 pt-4">
                <div className="flex flex-wrap gap-3">
                  {item.github && (
                    <a
                      className="inline-flex items-center gap-2 rounded-xl bg-neutral-800 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-neutral-700 border border-neutral-700"
                      href={item.github}
                      rel="noopener noreferrer"
                      target="_blank">
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      {t('github')}
                    </a>
                  )}
                  {item.url && (
                    <a
                      className="inline-flex items-center gap-1.5 rounded-xl bg-orange-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-orange-500"
                      href={item.url}
                      rel="noopener noreferrer"
                      target="_blank">
                      <span>{t('visit')}</span>
                      <ExternalLinkIcon className="h-4 w-4" />
                    </a>
                  )}
                </div>

                <button
                  className="rounded-xl bg-neutral-800 px-4 py-2 text-sm font-semibold text-neutral-300 transition-colors hover:bg-neutral-700 hover:text-white"
                  onClick={onClose}
                  type="button">
                  {t('close')}
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
});

ProjectShowcaseModal.displayName = 'ProjectShowcaseModal';
export default ProjectShowcaseModal;
