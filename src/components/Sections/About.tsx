import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';
import {useTranslation} from 'react-i18next';

import {aboutData, SectionId} from '../../data/data';
import discordLogo from '../../../public/assets/discord-logo.jpg';
import jsLogo from '../../../public/assets/JavaScript-logo.png';
import Section from '../Layout/Section';

const discordImageStyle = {margin: 0, padding: 0};
const javaScriptImageStyle = {margin: 0, padding: 0};

const About: FC = memo(() => {
  const {t} = useTranslation();
  const {profileImageSrc, profileImageSrc2, aboutItems} = aboutData;
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.About}>
      <div className={classNames('grid grid-cols-1 gap-y-4', {'md:grid-cols-4': !!profileImageSrc})}>
        {!!profileImageSrc && (
          <div className="col-span-1 mr-8 flex flex-col items-center justify-center">
            <div className="relative h-24 w-24 overflow-hidden rounded-xl md:h-32 md:w-32">
              <Image
                alt="about-me-image"
                layout="fill"
                objectFit="cover"
                priority
                sizes="(min-width: 768px) 128px, 96px"
                src={profileImageSrc}
              />
            </div>

            {!!profileImageSrc2 && (
              <div className="relative mt-4 h-48 w-32 overflow-hidden rounded-xl md:h-56 md:w-40">
                <Image
                  alt="about-me-image-2"
                  layout="fill"
                  objectFit="cover"
                  sizes="(min-width: 768px) 160px, 128px"
                  src={profileImageSrc2}
                />
              </div>
            )}
          </div>
        )}

        <div className={classNames('col-span-1 flex flex-col gap-y-6', {'md:col-span-3': !!profileImageSrc})}>
          <div className="flex flex-col gap-y-2">
            <h2 className="text-2xl font-bold text-white">{t('aboutMe')}</h2>
            <p className="prose prose-sm w-4/5 text-gray-300 sm:prose-base">
              {t('aboutDescription')
                .split('\n')
                .map((line, index) => (
                  <div key={index}>
                    {line.split(' ').map((word, wordIndex) => {
                      if (word === 'Discord') {
                        return (
                          <span className=" inline-flex items-center gap-1" key={wordIndex}>
                            Discord
                            <Image
                              alt="Discord"
                              className=" inline-block rounded-md p-0 align-middle"
                              height={20}
                              key={wordIndex}
                              src={discordLogo}
                              style={discordImageStyle}
                              width={20}
                            />
                          </span>
                        );
                      } else if (word === 'JavaScript') {
                        return (
                          <span className=" inline-flex items-center gap-1" key={wordIndex}>
                            Javascript
                            <Image
                              alt="JavaScript"
                              className=" my-0 inline-block rounded-md py-0 align-middle"
                              height={20}
                              key={wordIndex}
                              src={jsLogo}
                              style={javaScriptImageStyle}
                              width={20}
                            />
                          </span>
                        );
                      }
                      return <span key={wordIndex}>{word} </span>;
                    })}
                  </div>
                ))}
            </p>
          </div>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {aboutItems.map(({label, text, Icon}, idx) => (
              <li className="col-span-1 flex items-start gap-x-2" key={idx}>
                {Icon && <Icon className="h-5 w-5 flex-shrink-0 text-white" />}
                <span className="text-sm font-bold text-white">{t(label)}:</span>
                <span className="whitespace-nowrap text-sm text-gray-300">{t(text)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;
