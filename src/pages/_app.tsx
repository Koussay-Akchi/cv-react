import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';

import type {AppProps} from 'next/app';
import {useRouter} from 'next/router';

import React, {memo, useEffect} from 'react';

import {LanguageProvider} from '../contexts/LanguageContext';

const MyApp = memo(({Component, pageProps}: AppProps): React.JSX.Element => {
  const router = useRouter();

  useEffect(() => {
    const token = process.env.NEXT_PUBLIC_POSTHOG_TOKEN;
    const host = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com';

    let cleanupFn: (() => void) | undefined;

    if (token) {
      import('posthog-js').then((module) => {
        const posthog = module.default;
        posthog.init(token, {
          api_host: host,
          capture_pageview: false,
          capture_exceptions: true,
          defaults: '2026-01-30',
        });

        posthog.capture('$pageview');

        const handleRouteChange = () => {
          posthog.capture('$pageview');
        };

        router.events.on('routeChangeComplete', handleRouteChange);

        cleanupFn = () => {
          router.events.off('routeChangeComplete', handleRouteChange);
        };
      });
    }

    return () => {
      if (cleanupFn) cleanupFn();
    };
  }, [router.events]);

  return (
    <>
      <LanguageProvider>
        <Component {...pageProps} />
      </LanguageProvider>
    </>
  );
});

export default MyApp;
