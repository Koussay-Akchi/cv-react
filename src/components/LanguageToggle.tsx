import Image from 'next/image';
import posthog from 'posthog-js';
import React, {FC} from 'react';

import {useLanguage} from '../contexts/LanguageContext';

interface LanguageToggleProps {
  navbar?: boolean;
}

const LanguageToggle: FC<LanguageToggleProps> = React.memo(({navbar = false}) => {
  const {language, setLanguage} = useLanguage();

  const toggleLanguage = () => {
    const next = language === 'en' ? 'fr' : 'en';
    setLanguage(next);
    posthog.capture('language_toggled', {from: language, to: next});
  };

  return (
    <button
      aria-label="Change language"
      className="transform items-center gap-2 text-lg font-bold text-white"
      onClick={toggleLanguage}>
      {navbar ? (
        <Image
          alt={language === 'fr' ? 'English' : 'French'}
          className=" h-7 w-7"
          height={28}
          src={language === 'fr' ? '/assets/english.png' : '/assets/french.png'}
          width={28}
        />
      ) : (
        <div>
          {language === 'en' ? (
            <div>
              <div className="flex justify-center gap-1">
                Hello <div className=" -mt-2 inline-block text-3xl">👋</div>
              </div>
              <div>
                ( Changer en Français
                <Image
                  alt="French"
                  className="ml-2 inline-block h-5 w-5"
                  height={20}
                  src="/assets/french.png"
                  width={20}
                />{' '}
                )
              </div>
            </div>
          ) : (
            <div>
              <div className="flex justify-center gap-1">
                Bonjour <div className=" -mt-2 inline-block text-3xl">👋</div>
              </div>
              <div>
                (Switch to English
                <Image
                  alt="English"
                  className="ml-2 inline-block h-5 w-5"
                  height={20}
                  src="/assets/english.png"
                  width={20}
                />{' '}
                )
              </div>
            </div>
          )}
        </div>
      )}
    </button>
  );
});

export default LanguageToggle;
