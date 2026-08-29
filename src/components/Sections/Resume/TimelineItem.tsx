import {FC, memo} from 'react';
import {useTranslation} from 'react-i18next';

import type {TimelineItem} from '../../../data/dataDef';

const TimelineItem: FC<{item: TimelineItem}> = memo(({item}) => {
  const {title, date, location, content, education, experience, highlights} = item;
  const {t} = useTranslation();

  const bulletList = highlights
    ? (Array.isArray(t(highlights, {returnObjects: true}))
        ? (t(highlights, {returnObjects: true}) as string[])
        : [t(highlights)])
    : [];

  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
      <div className="flex flex-col pb-4">
        <h2 className="text-xl font-bold">{t(title)}</h2>
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          <span className="flex-1 text-sm font-medium italic sm:flex-none">{location}</span>
          <span>•</span>
          <span className="flex-1 text-sm sm:flex-none">{t(date)}</span>
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
        {experience && <p>{t(experience)}</p>}

        {bulletList.length > 0 && (
          <ul className="ml-5 list-disc space-y-1 text-left text-sm sm:text-base">
            {bulletList.map((bullet, index) => (
              <li key={`${title}-${index}`}>{bullet}</li>
            ))}
          </ul>
        )}

        {content}
      </div>
      {education && <p>{t(education)}</p>}
    </div>
  );
});

TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;
