import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';

import type {AppProps} from 'next/app';
import dynamic from 'next/dynamic';
import {useRouter} from 'next/router';
import posthog from 'posthog-js';
import React, {memo, useEffect} from 'react';

import PreloadImages from '../components/PreloadImages';
import {LanguageProvider} from '../contexts/LanguageContext';

const MyApp = memo(({Component, pageProps}: AppProps): React.JSX.Element => {
  const router = useRouter();

  useEffect(() => {
    const token = process.env.NEXT_PUBLIC_POSTHOG_TOKEN;
    const host = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com';

    if (token) {
      posthog.init(token, {
        api_host: host,
        capture_pageview: false,
      });

      posthog.capture('$pageview');

      const handleRouteChange = () => {
        posthog.capture('$pageview');
      };

      router.events.on('routeChangeComplete', handleRouteChange);

      return () => {
        router.events.off('routeChangeComplete', handleRouteChange);
      };
    }

    return () => undefined;
  }, [router.events]);

  return (
    <>
      <LanguageProvider>
        <PreloadImages />
        <Component {...pageProps} />
      </LanguageProvider>
    </>
  );
});

export default dynamic(() => Promise.resolve(MyApp), {ssr: false});
