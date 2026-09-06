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
import profilepic from '../images/profilepic.webp';
import testimonialImage from '../images/testimonial.webp';
import profilepic2 from '../images/wecraft.webp';
import ajmiImage from './../../public/assets/ajmi.webp';
import angularLogo from './../../public/assets/angular-logo.png';

import bal3awiImage from './../../public/assets/bal3awi.webp';
import cLogo from './../../public/assets/c-logo.png';
import cars from './../../public/assets/cars.webp';

import dockerLogo from './../../public/assets/docker-logo.png';

import figmaLogo from './../../public/assets/figma-logo.png';
import flutterLogo from './../../public/assets/flutter-logo.png';

import FTL from './../../public/assets/FTL.webp';
import grafanaLogo from './../../public/assets/grafana.png';
import gridImgViewer from './../../public/assets/gridImgViewer.webp';
import javaLogo from './../../public/assets/java-logo.png';
import jsLogo from './../../public/assets/JavaScript-logo.png';
import jwtLogo from './../../public/assets/jwt-logo.png';
import kubernetesLogo from './../../public/assets/kubernetes.png';
import laravelLogo from './../../public/assets/laravel.png';
import mediawikiLogo from './../../public/assets/mediawiki-logo.png';
import minesweeper from './../../public/assets/minesweeper.webp';
import mongodbLogo from './../../public/assets/mongodb.webp';
import nextLogo from './../../public/assets/next-logo.png';
import nodeLogo from './../../public/assets/node-logo.png';
import ocppLogo from './../../public/assets/ocpp.png';
import postgresLogo from './../../public/assets/postgresql.webp';
import pythonLogo from './../../public/assets/python-logo.png';
import quarkusLogo from './../../public/assets/quarkus-logo.png';
import reactLogo from './../../public/assets/react-logo.png';
import redisLogo from './../../public/assets/redis.png';
import socketioLogo from './../../public/assets/socketio.png';
import soundgrid from './../../public/assets/soundgrid.webp';
import tirfly from './../../public/assets/tirfly.webp';
import typescriptLogo from './../../public/assets/typescript-logo.png';
import ymseddiImage from './../../public/assets/ymseddi.webp';
import azureLogo from './../../public/assets/azure.png';
import terraformLogo from './../../public/assets/terraform.png';
import shortenImage from './../../public/assets/shorten.webp';
import ansibleLogo from './../../public/assets/ansible.webp';
import linuxLogo from './../../public/assets/linux.webp';
import openstackLogo from './../../public/assets/openstack.webp';
import prometheusLogo from './../../public/assets/prometheus.webp';
import springLogo from './../../public/assets/spring.webp';
import firebaseLogo from './../../public/assets/firebase.webp';
import mongoLogo from './../../public/assets/mongodb.webp';
import phpLogo from './../../public/assets/php.webp';
import pytorchLogo from './../../public/assets/pytorch.webp';
import tensorflowLogo from './../../public/assets/tensorflow.webp';
import huggingfaceLogo from './../../public/assets/huggingface.webp';
import ollamaLogo from './../../public/assets/ollama.webp';
import postmanLogo from './../../public/assets/postman.webp';
import vercelLogo from './../../public/assets/vercel.webp';
import posthogLogo from './../../public/assets/posthog.webp';
import sonarqubeLogo from './../../public/assets/sonarqube.webp';
import apisixLogo from './../../public/assets/apisix.webp';
import helmLogo from './../../public/assets/helm.webp';
import jaegerLogo from './../../public/assets/jaeger.webp';
import jenkinsLogo from './../../public/assets/jenkins.webp';
import opentelemetryLogo from './../../public/assets/opentelemetry.webp';
import kafkaLogo from './../../public/assets/kafka.webp';
import luaLogo from './../../public/assets/lua.webp';
import microsoftLogo from './../../public/assets/microsoft_logo.jpg';
import ciscoLogo from './../../public/assets/cisco_logo.jpg';
import {
  About,
  Certification,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  Skill,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

const techImageStyle = { margin: 0, padding: 0 };

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
    { label: 'locationLabel', text: 'Tunis', Icon: MapIcon },
    { label: 'ageLabel', text: `${calculateAge(birthDate)}`, Icon: CalendarIcon },
    { label: 'nationalityLabel', text: 'nationality', Icon: FlagIcon },
    { label: 'interestsLabel', text: 'interests', Icon: SparklesIcon },
    { label: 'studyLabel', text: ' ISTIC Borj Cedria → ESPRIT', Icon: AcademicCapIcon },
    { label: 'employmentLabel', text: 'HexaFlow', Icon: OfficeBuildingIcon },
  ],
};

export const skills: Skill[] = [
  {
    name: 'Terraform',
    level: 6,
    image: terraformLogo,
    categories: ['cloud/devops'],
  },
  {
    name: 'Azure',
    level: 5,
    image: azureLogo,
    categories: ['cloud/devops'],
  },
  {
    name: 'Kubernetes',
    level: 7,
    image: kubernetesLogo,
    categories: ['cloud/devops'],
  },
  {
    name: 'Docker',
    level: 9,
    image: dockerLogo,
    categories: ['cloud/devops'],
  },
  {
    name: 'Next.js',
    level: 8,
    image: nextLogo,
    categories: ['frontend', 'backend'],
  },
  {
    name: 'React',
    level: 8.5,
    image: reactLogo,
    categories: ['frontend'],
  },
  {
    name: 'Angular',
    level: 7,
    image: angularLogo,
    categories: ['frontend'],
  },
  {
    name: 'Laravel',
    level: 8,
    image: laravelLogo,
    categories: ['frontend', 'backend'],
  },
  {
    name: 'TypeScript',
    level: 7,
    image: typescriptLogo,
    image2: jsLogo,
    categories: ['languages', 'frontend', 'backend'],
  },
  {
    name: 'Java',
    level: 9,
    image: javaLogo,
    categories: ['languages', 'backend'],
  },
  {
    name: 'Node.js',
    level: 6,
    image: nodeLogo,
    categories: ['backend'],
  },
  {
    name: 'Python',
    level: 7.5,
    image: pythonLogo,
    categories: ['languages', 'backend', 'ai'],
  },
  {
    name: 'MediaWiki',
    level: 9,
    image: mediawikiLogo,
    categories: ['other tools'],
  },
  {
    name: 'Figma',
    level: 5,
    image: figmaLogo,
    categories: ['other tools'],
  },
  {
    name: 'Ansible',
    level: 7,
    image: ansibleLogo,
    categories: ['cloud/devops'],
  },
  {
    name: 'Linux',
    level: 8,
    image: linuxLogo,
    categories: ['cloud/devops'],
  },
  {
    name: 'OpenStack',
    level: 6,
    image: openstackLogo,
    categories: ['cloud/devops'],
  },
  {
    name: 'Grafana',
    level: 7,
    image: grafanaLogo,
    categories: ['cloud/devops'],
  },
  {
    name: 'Prometheus',
    level: 7,
    image: prometheusLogo,
    categories: ['cloud/devops'],
  },
  {
    name: 'Spring',
    level: 8,
    image: springLogo,
    categories: ['backend'],
  },
  {
    name: 'Quarkus',
    level: 7,
    image: quarkusLogo,
    categories: ['backend'],
  },
  {
    name: 'Flutter',
    level: 6,
    image: flutterLogo,
    categories: ['frontend'],
  },
  {
    name: 'Firebase',
    level: 7,
    image: firebaseLogo,
    categories: ['cloud/devops', 'backend'],
  },
  {
    name: 'MongoDB',
    level: 7.5,
    image: mongodbLogo,
    categories: ['backend'],
  },
  {
    name: 'PostgreSQL',
    level: 8,
    image: postgresLogo,
    categories: ['backend'],
  },
  {
    name: 'Redis',
    level: 8,
    image: redisLogo,
    categories: ['backend'],
  },
  {
    name: 'PyTorch',
    level: 7.5,
    image: pytorchLogo,
    categories: ['ai'],
  },
  {
    name: 'TensorFlow',
    level: 7,
    image: tensorflowLogo,
    categories: ['ai'],
  },
  {
    name: 'Hugging Face',
    level: 7.5,
    image: huggingfaceLogo,
    categories: ['ai'],
  },
  {
    name: 'Ollama',
    level: 7.5,
    image: ollamaLogo,
    categories: ['ai'],
  },
  {
    name: 'C',
    level: 4,
    image: cLogo,
    categories: ['languages'],
  },
  {
    name: 'PHP',
    level: 7.5,
    image: phpLogo,
    categories: ['languages', 'backend'],
  },
  {
    name: 'Postman',
    level: 8,
    image: postmanLogo,
    categories: ['other tools'],
  },
  {
    name: 'Vercel',
    level: 8,
    image: vercelLogo,
    categories: ['other tools'],
  },
  {
    name: 'PostHog',
    level: 7.5,
    image: posthogLogo,
    categories: ['other tools'],
  },
  {
    name: 'SonarQube',
    level: 7.5,
    image: sonarqubeLogo,
    categories: ['other tools'],
  },
  {
    name: 'Apache APISIX',
    level: 7.5,
    image: apisixLogo,
    categories: ['cloud/devops', 'backend'],
  },
  {
    name: 'Helm',
    level: 7.5,
    image: helmLogo,
    categories: ['cloud/devops'],
  },
  {
    name: 'Lua',
    level: 7,
    image: luaLogo,
    categories: ['languages', 'backend'],
  },
  {
    name: 'Kafka',
    level: 7.5,
    image: kafkaLogo,
    categories: ['backend', 'cloud/devops'],
  },
  {
    name: 'Jaeger',
    level: 7,
    image: jaegerLogo,
    categories: ['cloud/devops'],
  },
  {
    name: 'OpenTelemetry',
    level: 7.5,
    image: opentelemetryLogo,
    categories: ['cloud/devops'],
  },
  {
    name: 'Jenkins',
    level: 7,
    image: jenkinsLogo,
    categories: ['cloud/devops'],
  }
];

export const portfolioItems: PortfolioItem[] = [
  {
    title: 'ftlAutosaveManager',
    description: 'ftlAutosaveManagerDescription',
    url: 'https://github.com/Koussay-Akchi/FTLAutosaveManager',
    image: FTL,
    github: 'https://github.com/Koussay-Akchi/FTLAutosaveManager',
  },
  {
    title: 'Sound-Grid',
    description: 'soundgridDescription',
    url: 'https://soundgrid.koussay.tn/',
    image: soundgrid,
    github: 'https://github.com/Koussay-Akchi/soundgrid',
  },
  {
    title: 'gridImgViewer',
    description: 'gridImgViewerDescription',
    url: 'https://github.com/Koussay-Akchi/gridImgViewer',
    image: gridImgViewer,
    github: 'https://github.com/Koussay-Akchi/gridImgViewer',
  },
  {
    title: 'TirFly',
    description: 'tirflyDescription',
    url: 'https://github.com/Koussay-Akchi/tirfly-web',
    image: tirfly,
    github: 'https://github.com/Koussay-Akchi/tirfly-web',
  },
  {
    title: 'carTrackingOCR',
    description: 'carTrackingOCRDescription',
    url: 'https://github.com/Koussay-Akchi/safe-driving',
    image: cars,
    github: 'https://github.com/Koussay-Akchi/safe-driving',
  },
  {
    title: 'Shorten',
    description: 'shortenDescription',
    url: 'https://short.koussay.tn',
    image: shortenImage,
    github: 'https://github.com/Koussay-Akchi/shorten',
  },
  {
    title: 'Basic Minesweeper',
    description: 'minesweeperDescription',
    url: 'https://minesweeper.koussay.tn/',
    image: minesweeper,
    github: 'https://github.com/Koussay-Akchi/minesweeper',
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
    date: 'June 2026 - August 2026',
    location: 'Next Step',
    title: 'nextStepTitle',
    experience: 'experienceContentNextStep',
    highlights: 'experienceContentNextStepHighlights',
    content: (
      <p>
        Technologies :
        {[
          { name: 'Apache APISIX', imgSrc: apisixLogo },
          { name: 'Helm', imgSrc: helmLogo },
          { name: 'Kubernetes', imgSrc: kubernetesLogo },
          { name: 'Lua', imgSrc: luaLogo },
          { name: 'Kafka', imgSrc: kafkaLogo },
          { name: 'Prometheus', imgSrc: prometheusLogo },
          { name: 'Grafana', imgSrc: grafanaLogo },
          { name: 'Jaeger', imgSrc: jaegerLogo },
          { name: 'OpenTelemetry', imgSrc: opentelemetryLogo },
          { name: 'Redis', imgSrc: redisLogo },
          { name: 'Node.js', imgSrc: nodeLogo },
          { name: 'React', imgSrc: reactLogo },
          { name: 'PostgreSQL', imgSrc: postgresLogo },
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
    date: 'July 2025 - Present',
    location: 'OpkodeLabs',
    title: 'fullStackDev',
    experience: 'experienceContentOpkodeLabs',
    highlights: 'experienceContentOpkodeLabsHighlights',
    content: (
      <p>
        Technologies :
        {[
          { name: 'OCPP 1.6', imgSrc: ocppLogo },
          { name: 'Laravel', imgSrc: laravelLogo },
          { name: 'Python', imgSrc: pythonLogo },
          { name: 'Redis', imgSrc: redisLogo },
          { name: 'Docker', imgSrc: dockerLogo },
          { name: 'PostgreSQL', imgSrc: postgresLogo },
          { name: 'Socket.IO', imgSrc: socketioLogo },
          { name: 'Grafana', imgSrc: grafanaLogo },
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
    highlights: 'experienceContent3Highlights',
    content: (
      <p>
        Technologies :
        {[
          { name: 'React', imgSrc: reactLogo },
          { name: 'Kubernetes', imgSrc: kubernetesLogo },
          { name: 'Next.js', imgSrc: nextLogo },
          { name: 'Java', imgSrc: javaLogo },
          { name: 'Docker', imgSrc: dockerLogo },
          { name: 'Terraform', imgSrc: terraformLogo },
          { name: 'Azure', imgSrc: azureLogo },
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
    highlights: 'experienceContent1Highlights',
    content: (
      <p>
        Technologies :
        {[
          { name: 'React', imgSrc: reactLogo },
          { name: 'Quarkus Java', imgSrc: quarkusLogo },
          { name: 'Docker', imgSrc: dockerLogo },
          { name: 'JWT', imgSrc: jwtLogo },
          { name: 'Postgres', imgSrc: postgresLogo },
          { name: 'MongoDB', imgSrc: mongoLogo },
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
    highlights: 'experienceContent2Highlights',
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

export const socialLinks: Social[] = [
  { label: 'Github', Icon: GithubIcon, href: 'https://github.com/Koussay-Akchi' },
  { label: 'LeetCode', Icon: LeetCodeIcon, href: 'https://leetcode.com/u/ogNF1G5yTA/' },
  { label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/koussay-akchi-782765274/' },
];

export const certifications: Certification[] = [
  {
    name: 'certAzureNetworking',
    issuer: 'Microsoft',
    date: 'certDateAzureNetworking',
    url: 'https://learn.microsoft.com/api/credentials/share/en-us/koussayakchi/FAE4428DA68E605F',
    logo: microsoftLogo,
  },
  {
    name: 'certCloudSecurity',
    issuer: 'Microsoft',
    date: 'certDateCloudSecurity',
    url: 'https://learn.microsoft.com/en-us/users/koussayakchi/credentials/6df9c9e21c5b253',
    logo: microsoftLogo,
  },
  {
    name: 'certAzureManagementTasks',
    issuer: 'Microsoft',
    date: 'certDateAzureManagementTasks',
    url: 'https://learn.microsoft.com/api/credentials/share/en-us/koussayakchi/63B2C35CA975068F',
    logo: microsoftLogo,
  },
  {
    name: 'certCCNA',
    issuer: 'Cisco',
    date: 'certDateCCNA',
    url: 'https://www.credly.com/badges/058d5f66-db69-484d-88be-525bb33c98c9',
    logo: ciscoLogo,
  },
];

