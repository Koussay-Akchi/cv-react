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
import Contact from '../components/Sections/Contact';
import Footer from '../components/Sections/Footer';

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
