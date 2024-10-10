import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LeetCodeIcon from '../components/Icon/LeetCodeIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import profilepic2 from '../images/wecraft.png';
import cars from './../../public/assets/cars.jpg';
import FTL from './../../public/assets/FTL.png';
import minesweeper from './../../public/assets/minesweeper.png';
import soundgrid from './../../public/assets/soundgrid.png';
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
    {label: 'employmentLabel', text: 'Wecraft', Icon: OfficeBuildingIcon},
  ],
};

export const skills: SkillGroup[] = [
  {
    name: 'spokenLanguages',
    skills: [
      {
        name: 'English',
        level: 10,
        image: '/assets/english.png',
      },
      {
        name: 'French',
        level: 8,
        image: '/assets/french.png',
      },
      {
        name: 'Arabic',
        level: 9,
        image: '/assets/arabic.png',
      },
    ],
  },
  {
    name: 'frontendDevelopment',
    skills: [
      {
        name: 'React',
        level: 8.5,
        image: '/assets/react-logo.png',
      },
      {
        name: 'Angular',
        level: 7,
        image: '/assets/angular-logo.png',
      },
      {
        name: 'TypeScript',
        level: 7,
        image: '/assets/typescript-logo.png',
        image2: '/assets/JavaScript-logo.png',
      },
      {
        name: 'Flutter/Dart',
        level: 6,
        image: '/assets/flutter-logo.png',
        image2: '/assets/dart-logo.png',
      },
    ],
  },
  {
    name: 'backendDevelopment',
    skills: [
      {
        name: 'Java',
        level: 9,
        image: '/assets/java-logo.png',
      },
      {
        name: 'Node.js',
        level: 6,
        image: '/assets/node-logo.png',
      },
      {
        name: 'Python',
        level: 7.5,
        image: '/assets/python-logo.png',
      },
      {
        name: 'C',
        level: 4,
        image: '/assets/c-logo.png',
      },
    ],
  },
  {
    name: 'otherTools',
    skills: [
      {
        name: 'Docker',
        level: 7,
        image: '/assets/docker-logo.png',
      },
      {
        name: 'MediaWiki',
        level: 9,
        image: '/assets/mediawiki-logo.png',
      },
      {
        name: 'Figma',
        level: 5,
        image: '/assets/figma-logo.png',
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
    url: 'https://soundgrid.web.app/',
    image: soundgrid,
  },
  {
    title: 'Basic Minesweeper',
    description: 'minesweeperDescription',
    url: 'https://basic-minesweeper.web.app/',
    image: minesweeper,
  },
];

export const education: TimelineItem[] = [
  {
    date: '2024 - 2027',
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
    date: 'June 2024 - Present',
    location: 'Wecraft',
    title: 'fullStackDev',
    experience: 'experienceContent1',
    content: (
      <p>
        Technologies :
        {[
          {name: 'React', imgSrc: '/assets/react-logo.png'},
          {name: 'Quarkus Java', imgSrc: '/assets/quarkus-logo.png'},
          {name: 'Docker', imgSrc: '/assets/docker-logo.png'},
          {name: 'JWT', imgSrc: '/assets/jwt-logo.png'},
          {name: 'Postgres', imgSrc: '/assets/postgres-logo.png'},
          {name: 'MongoDB', imgSrc: '/assets/mongo-logo.png'},
        ].map((tech, index, array) => (
          <span className="inline-flex items-center gap-1" key={index}>
            &nbsp;{tech.name}
            <img
              alt={tech.name}
              className="my-0 inline-block rounded-md py-0 align-middle"
              src={tech.imgSrc}
              style={{margin: 0, padding: 0}}
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
      image: '/assets/ymseddi.jpg',
    },
    {
      name: 'Aziz Ben Sghaeir',
      text: 'test2',
      image: '/assets/bal3awi.jpg',
    },
    {
      name: 'Oussama Ajmi',
      text: 'test3',
      image: '/assets/ajmi.jpg',
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
