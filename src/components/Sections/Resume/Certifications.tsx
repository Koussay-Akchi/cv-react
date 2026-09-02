import Image from 'next/image';
import {FC, memo} from 'react';
import {useTranslation} from 'react-i18next';

import {Certification} from '../../../data/dataDef';

export const CertificationsGrid: FC<{certifications: Certification[]}> = memo(({certifications}) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      {certifications.map((cert, index) => (
        <CertificationCard cert={cert} key={`${cert.name}-${index}`} />
      ))}
    </div>
  );
});

CertificationsGrid.displayName = 'CertificationsGrid';

const CertificationCard: FC<{cert: Certification}> = memo(({cert}) => {
  const {t} = useTranslation();
  const {name, issuer, date, url, logo} = cert;

  return (
    <a
      className="group flex cursor-pointer flex-col gap-3 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-400 hover:shadow-md"
      href={url}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md border border-neutral-100 bg-neutral-50 p-1.5">
          <Image alt={issuer} className="h-full w-full object-contain" src={logo} />
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-500">{issuer}</span>
          {date && <span className="text-xs text-neutral-500">{t(date)}</span>}
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-between">
        <h3 className="text-base font-semibold text-neutral-800 transition-colors group-hover:text-orange-500">
          {t(name)}
        </h3>
        <span className="mt-2 inline-flex items-center text-xs font-medium text-orange-400 transition-colors group-hover:text-orange-600">
          {t('viewCredential', {defaultValue: 'View Credential'})} →
        </span>
      </div>
    </a>
  );
});

CertificationCard.displayName = 'CertificationCard';
