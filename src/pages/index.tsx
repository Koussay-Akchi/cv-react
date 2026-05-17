import '../locales/i18n';

import {FC, memo} from 'react';

import Page from '../components/Layout/Page';
import About from '../components/Sections/About';
import Hero from '../components/Sections/Hero';
import Resume from '../components/Sections/Resume';
import {homePageMeta} from '../data/data';

// eslint-disable-next-line react-memo/require-memo
import Header from '../components/Sections/Header';
import Portfolio from '../components/Sections/Portfolio';
import Testimonials from '../components/Sections/Testimonials';
import dynamic from 'next/dynamic';

const Contact = dynamic(() => import('../components/Sections/Contact'), {ssr: false});
const Footer = dynamic(() => import('../components/Sections/Footer'), {ssr: false});

const Home: FC = memo(() => {
  const {title, description} = homePageMeta;
  return (
    <div className=" overflow-x-hidden">
      <Page description={description} title={title}>
        <Header />
        <Hero />
        <About />
        <Resume />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </Page>
    </div>
  );
});

export default Home;
