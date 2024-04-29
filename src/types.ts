import type socialIcons from "@assets/socialIcons";
import type stackIcons from "@assets/stackIcons";

export type Site = {
  website: string;
  author: string;
  desc: string;
  title: string;
  ogImage?: string;
  lightAndDarkMode: boolean;
  postPerPage: number;
  scheduledPostMargin: number;
};

export type SocialObjects = {
  name: keyof typeof socialIcons;
  href: string;
  active: boolean;
  linkTitle: string;
}[];

export type StackObjects = {
  name: keyof typeof stackIcons;
  href: string;
  active: boolean;
  linkTitle: string;
}[];
