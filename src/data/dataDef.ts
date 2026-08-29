import {StaticImageData} from 'next/image';
import React, {FC, SVGProps} from 'react';

import {IconProps} from '../components/Icon/Icon';

export interface HomepageMeta {
  title: string;
  description?: string;
  ogImageUrl?: string;
  twitterCardType?: 'summary' | 'summary_large';
  twitterTitle?: string;
  twitterSite?: string;
  twitterCreator?: string;
  twitterDomain?: string;
  twitterUrl?: string;
  twitterDescription?: string;
  twitterImageUrl?: string;
}

export interface Hero {
  imageSrc: string;
  name: string;
  description?: React.JSX.Element;
  actions: HeroActionItem[];
}

interface HeroActionItem {
  href?: string;
  text: string;
  primary?: boolean;
  Icon?: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
}

export interface About {
  profileImageSrc?: string;
  profileImageSrc2?: string;
  description?: string;
  aboutItems: AboutItem[];
}

export interface AboutItem {
  label: string;
  text: string;
  Icon?: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
}

export interface Stat {
  title: string;
  value: number;
  Icon?: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
}

export interface Skill {
  name: string;
  level: number;
  image?: string | StaticImageData;
  image2?: string | StaticImageData;
  max?: number;
  categories: string[];
}

export interface PortfolioItem {
  title: string;
  description: string;
  url: string;
  image: string | StaticImageData;
  github?: string;
}

export interface TimelineItem {
  date: string;
  location: string;
  title: string;
  content?: React.JSX.Element;
  education?: string;
  experience?: string;
  highlights?: string;
}

export interface TestimonialSection {
  imageSrc?: string | StaticImageData;
  testimonials: Testimonial[];
}

export interface Testimonial {
  image?: string | StaticImageData;
  name: string;
  text: string;
}

export interface ContactSection {
  headerText?: string;
  description?: string;
  items: ContactItem[];
}

export const ContactType = {
  Email: 'Email',
  Phone: 'Phone',
  Location: 'Location',
  Github: 'Github',
  LinkedIn: 'LinkedIn',
  Facebook: 'Facebook',
  Twitter: 'Twitter',
  Instagram: 'Instagram',
} as const;

export type ContactType = (typeof ContactType)[keyof typeof ContactType];

export interface ContactItem {
  type: ContactType;
  text: string;
  href?: string;
}

export interface ContactValue {
  Icon: FC<IconProps> | ((props: SVGProps<SVGSVGElement>) => React.JSX.Element);
  srLabel: string;
}

export interface Social {
  label: string;
  Icon: FC<IconProps>;
  href: string;
}
