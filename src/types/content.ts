export type TextRun = {
  text: string;
  highlight?: boolean;
};

export type Heading = TextRun[][];

export type HeroSlide = {
  id: string;
  category: string;
  overline: string;
  headline: Heading;
  description: string;
  image: string;
  alt: string;
  imagePosition?: string;
  thumbnailLabel: string;
  shortLabel: string;
  ctaLabel: string;
  ctaTarget: string;
};

export type Service = {
  id: string;
  discipline: string;
  nameLines: string[];
  category: string;
  selectedLabel: string;
  number: string;
  titleLines: string[];
  description: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  inquiryLabel: string;
};
