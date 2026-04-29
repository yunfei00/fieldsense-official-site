import type { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type IconName =
  | "radar"
  | "activity"
  | "map"
  | "target"
  | "cpu"
  | "radio"
  | "shield"
  | "antenna"
  | "flask"
  | "scan"
  | "chart"
  | "laptop"
  | "settings"
  | "clock"
  | "layers"
  | "file";

export type IconComponent = LucideIcon;

export type Capability = {
  title: string;
  description: string;
  icon: IconName;
};

export type Product = {
  slug: string;
  name: string;
  summary: string;
  highlights: string[];
  category: string;
  icon: IconName;
};

export type Solution = {
  slug: string;
  title: string;
  summary: string;
  target: string;
  painPoints: string[];
  icon: IconName;
};

export type CaseItem = {
  id: string;
  title: string;
  type: string;
  industry: string;
  problem: string;
  result: string;
  thumbnail: string;
};

export type Article = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
  publishedAt: string;
};

