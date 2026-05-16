import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';
import Image from 'next/image';

import GithubIcon from '../components/Icon/GithubIcon';
import LeetCodeIcon from '../components/Icon/LeetCodeIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import profilepic2 from '../images/wecraft.png';
import ajmiImage from './../../public/assets/ajmi.jpg';
import angularLogo from './../../public/assets/angular-logo.png';
import arabicLogo from './../../public/assets/arabic.png';
import bal3awiImage from './../../public/assets/bal3awi.jpg';
import cLogo from './../../public/assets/c-logo.png';
import cars from './../../public/assets/cars.jpg';
import dartLogo from './../../public/assets/dart-logo.png';
import dockerLogo from './../../public/assets/docker-logo.png';
import englishLogo from './../../public/assets/english.png';
import figmaLogo from './../../public/assets/figma-logo.png';
import flutterLogo from './../../public/assets/flutter-logo.png';
import frenchLogo from './../../public/assets/french.png';
import FTL from './../../public/assets/FTL.jpg';
import grafanaLogo from './../../public/assets/grafana.png';
import gridImgViewer from './../../public/assets/gridImgViewer.jpg';
import javaLogo from './../../public/assets/java-logo.png';
import jsLogo from './../../public/assets/JavaScript-logo.png';
import jwtLogo from './../../public/assets/jwt-logo.png';
import kubernetesLogo from './../../public/assets/kubernetes.png';
import laravelLogo from './../../public/assets/laravel.png';
import mediawikiLogo from './../../public/assets/mediawiki-logo.png';
import minesweeper from './../../public/assets/minesweeper.jpg';
import mongoLogo from './../../public/assets/mongo-logo.png';
import nextLogo from './../../public/assets/next-logo.png';
import nodeLogo from './../../public/assets/node-logo.png';
import ocppLogo from './../../public/assets/ocpp.png';
import postgresLogo from './../../public/assets/postgres-logo.png';
import pythonLogo from './../../public/assets/python-logo.png';
import quarkusLogo from './../../public/assets/quarkus-logo.png';
import reactLogo from './../../public/assets/react-logo.png';
import redisLogo from './../../public/assets/redis.png';
import socketioLogo from './../../public/assets/socketio.png';
import soundgrid from './../../public/assets/soundgrid.jpg';
import tirfly from './../../public/assets/tirfly.jpg';
import typescriptLogo from './../../public/assets/typescript-logo.png';
import ymseddiImage from './../../public/assets/ymseddi.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

const techImageStyle = {margin: 0, padding: 0};

const birthDate = new Date('2003-01-11');

const calculateAge = (birthDate: Date): number => {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

export const homePageMeta: HomepageMeta = {
  title: 'Koussay Akchi',
  description: 'Home page',
};

export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

export const heroData: Hero = {
  imageSrc: heroImage,
  name: 'Koussay Akchi',
  actions: [
    {
      text: 'resume2',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'contact',
      primary: false,
    },
  ],
};

export const aboutData: About = {
  profileImageSrc: profilepic,
  profileImageSrc2: profilepic2,
  aboutItems: [
    {label: 'locationLabel', text: 'Tunis', Icon: MapIcon},
    {label: 'ageLabel', text: `${calculateAge(birthDate)}`, Icon: CalendarIcon},
    {label: 'nationalityLabel', text: 'nationality', Icon: FlagIcon},
    {label: 'interestsLabel', text: 'interests', Icon: SparklesIcon},
    {label: 'studyLabel', text: ' ISTIC Borj Cedria → ESPRIT', Icon: AcademicCapIcon},
    {label: 'employmentLabel', text: 'HexaFlow', Icon: OfficeBuildingIcon},
  ],
};

export const skills: SkillGroup[] = [
  {
    name: 'spokenLanguages',
    skills: [
      {
        name: 'English',
        level: 10,
        image: englishLogo,
      },
      {
        name: 'French',
        level: 8,
        image: frenchLogo,
      },
      {
        name: 'Arabic',
        level: 9,
        image: arabicLogo,
      },
    ],
  },
  {
    name: 'frontendDevelopment',
    skills: [
      {
        name: 'React',
        level: 8.5,
        image: reactLogo,
      },
      {
        name: 'Angular',
        level: 7,
        image: angularLogo,
      },
      {
        name: 'TypeScript',
        level: 7,
        image: typescriptLogo,
        image2: jsLogo,
      },
      {
        name: 'Flutter/Dart',
        level: 6,
        image: flutterLogo,
        image2: dartLogo,
      },
    ],
  },
  {
    name: 'backendDevelopment',
    skills: [
      {
        name: 'Java',
        level: 9,
        image: javaLogo,
      },
      {
        name: 'Node.js',
        level: 6,
        image: nodeLogo,
      },
      {
        name: 'Python',
        level: 7.5,
        image: pythonLogo,
      },
      {
        name: 'C',
        level: 4,
        image: cLogo,
      },
    ],
  },
  {
    name: 'otherTools',
    skills: [
      {
        name: 'Kubernetes',
        level: 7,
        image: kubernetesLogo,
      },
      {
        name: 'Docker',
        level: 9,
        image: dockerLogo,
      },
      {
        name: 'MediaWiki',
        level: 9,
        image: mediawikiLogo,
      },
      {
        name: 'Figma',
        level: 5,
        image: figmaLogo,
      },
    ],
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    title: 'ftlAutosaveManager',
    description: 'ftlAutosaveManagerDescription',
    url: 'https://github.com/Koussay-Akchi/FTLAutosaveManager',
    image: FTL,
  },
  {
    title: 'carTrackingOCR',
    description: 'carTrackingOCRDescription',
    url: 'https://github.com/Koussay-Akchi/safe-driving',
    image: cars,
  },
  {
    title: 'Sound-Grid',
    description: 'soundgridDescription',
    url: 'https://soundgrid.koussay.tn/',
    image: soundgrid,
  },
  {
    title: 'TirFly',
    description: 'tirflyDescription',
    url: 'https://github.com/Koussay-Akchi/tirfly-web',
    image: tirfly,
  },
  {
    title: 'gridImgViewer',
    description: 'gridImgViewerDescription',
    url: 'https://github.com/Koussay-Akchi/gridImgViewer',
    image: gridImgViewer,
  },
  {
    title: 'Basic Minesweeper',
    description: 'minesweeperDescription',
    url: 'https://minesweeper.koussay.tn/',
    image: minesweeper,
  },
];

export const education: TimelineItem[] = [
  {
    date: '2024 - Present',
    location: 'ESPRIT',
    title: 'educationEsprit',
    education: 'educationEspritDetail',
  },
  {
    date: '2021 - 2024',
    location: 'ISTIC Borj Cedria',
    title: 'Licence GLSI',
    education: 'educationISTICDetail',
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'July 2025 - Present',
    location: 'OpkodeLabs',
    title: 'fullStackDev',
    experience: 'experienceContentOpkodeLabs',
    content: (
      <p>
        Technologies :
        {[
          {name: 'OCPP 1.6', imgSrc: ocppLogo},
          {name: 'Laravel', imgSrc: laravelLogo},
          {name: 'Python', imgSrc: pythonLogo},
          {name: 'Redis', imgSrc: redisLogo},
          {name: 'Docker', imgSrc: dockerLogo},
          {name: 'PostgreSQL', imgSrc: postgresLogo},
          {name: 'Socket.IO', imgSrc: socketioLogo},
          {name: 'Grafana', imgSrc: grafanaLogo},
        ].map((tech, index, array) => (
          <span className="inline-flex items-center gap-1" key={index}>
            &nbsp;{tech.name}
            <Image
              alt={tech.name}
              className="my-0 inline-block rounded-md py-0 align-middle"
              height={20}
              src={tech.imgSrc}
              style={techImageStyle}
              width={20}
            />
            {index < array.length - 1 && ' -'}
          </span>
        ))}
      </p>
    ),
  },
  {
    date: 'Febuary 2025 - December 2025',
    location: 'HexaFlow',
    title: 'fullStackEngineer',
    experience: 'experienceContent3',
    content: (
      <p>
        Technologies :
        {[
          {name: 'React', imgSrc: reactLogo},
          {name: 'Kubernetes', imgSrc: kubernetesLogo},
          {name: 'Next.js', imgSrc: nextLogo},
          {name: 'Java', imgSrc: javaLogo},
          {name: 'Docker', imgSrc: dockerLogo},
        ].map((tech, index, array) => (
          <span className="inline-flex items-center gap-1" key={index}>
            &nbsp;{tech.name}
            <Image
              alt={tech.name}
              className="my-0 inline-block rounded-md py-0 align-middle"
              height={20}
              src={tech.imgSrc}
              style={techImageStyle}
              width={20}
            />
            {index < array.length - 1 && ' -'}
          </span>
        ))}
      </p>
    ),
  },
  {
    date: 'June 2024 - January 2025',
    location: 'Wecraft',
    title: 'fullStackDev',
    experience: 'experienceContent1',
    content: (
      <p>
        Technologies :
        {[
          {name: 'React', imgSrc: reactLogo},
          {name: 'Quarkus Java', imgSrc: quarkusLogo},
          {name: 'Docker', imgSrc: dockerLogo},
          {name: 'JWT', imgSrc: jwtLogo},
          {name: 'Postgres', imgSrc: postgresLogo},
          {name: 'MongoDB', imgSrc: mongoLogo},
        ].map((tech, index, array) => (
          <span className="inline-flex items-center gap-1" key={index}>
            &nbsp;{tech.name}
            <Image
              alt={tech.name}
              className="my-0 inline-block rounded-md py-0 align-middle"
              height={20}
              src={tech.imgSrc}
              style={techImageStyle}
              width={20}
            />
            {index < array.length - 1 && ' -'}
          </span>
        ))}
      </p>
    ),
  },
  {
    date: 'January 2024 - June 2024',
    location: 'Wecraft',
    title: 'pfe',
    experience: 'experienceContent2',
  },
];

export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Youssef Mseddi',
      text: 'test1',
      image: ymseddiImage,
    },
    {
      name: 'Aziz Ben Sghaeir',
      text: 'test2',
      image: bal3awiImage,
    },
    {
      name: 'Oussama Ajmi',
      text: 'test3',
      image: ajmiImage,
    },
  ],
};

export const contact: ContactSection = {
  headerText: 'getInTouch',
  description: 'contactDescription',
  items: [
    {
      type: ContactType.Email,
      text: 'akchikoussay@gmail.com',
      href: 'mailto:akchikoussay@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Tunis',
      href: 'https://www.google.com/maps/place/Mutuelleville,+Tunis/data=!4m2!3m1!1s0x12fd336257d86031:0xf28a28bc2a04834e?sa=X&ved=1t:242&ictx=111',
    },
    {
      type: ContactType.Github,
      text: 'Koussay-Akchi',
      href: 'https://github.com/Koussay-Akchi',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Koussay-Akchi'},
  {label: 'LeetCode', Icon: LeetCodeIcon, href: 'https://leetcode.com/u/ogNF1G5yTA/'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/koussay-akchi-782765274/'},
];
