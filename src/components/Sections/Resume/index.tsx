import Image from 'next/image';
import {FC, memo} from 'react';
import {useTranslation} from 'react-i18next';

import arabicLogo from '../../../../public/assets/arabic.png';
import englishLogo from '../../../../public/assets/english.png';
import frenchLogo from '../../../../public/assets/french.png';

import {education, experience, SectionId, skills} from '../../../data/data';
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';
import {SkillsGrid} from './Skills';
import TimelineItem from './TimelineItem';

const Resume: FC = memo(() => {
  const {t} = useTranslation();
  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Resume}>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        <ResumeSection title={t('studyLabel')}>
          {education.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection title={t('work')}>
          {experience.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection title={t('skills')}>
          <SkillsGrid skills={skills} />
        </ResumeSection>
        <ResumeSection title={t('spokenLanguages')}>
          <div className="flex flex-wrap items-center gap-4 text-lg">
            <span className="flex items-center gap-1">
              <Image alt="English" className="h-5 w-5 object-contain" src={englishLogo} />
              <strong>{t('English')}</strong> ({t('Fluent')}),
            </span>
            <span className="flex items-center gap-1">
              <Image alt="French" className="h-5 w-5 object-contain" src={frenchLogo} />
              <strong>{t('French')}</strong> ({t('Fluent')}),
            </span>
            <span className="flex items-center gap-1">
              <Image alt="Arabic" className="h-5 w-5 object-contain" src={arabicLogo} />
              <strong>{t('Arabic')}</strong> ({t('native')})
            </span>
          </div>
        </ResumeSection>
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;
