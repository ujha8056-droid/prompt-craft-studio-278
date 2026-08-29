// Data model for SlideForge AI. Frontend-only for now; shapes are backend-ready.

export type ElementType = "text" | "image" | "shape";

export interface ElementStyle {
  fontSize?: number;
  fontWeight?: number;
  color?: string;
  textAlign?: "left" | "center" | "right";
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: number;
}

export interface SlideElement {
  id: string;
  type: ElementType;
  content: string; // text content, image url, or shape kind
  position: { x: number; y: number }; // percentage of canvas
  size: { width: number; height: number }; // percentage of canvas
  style: ElementStyle;
}

export interface Slide {
  id: string;
  title: string;
  order: number;
  elements: SlideElement[];
}

export type SlideCount = "auto" | number;

export interface PresentationSettings {
  slideCount: SlideCount;
  presentationType: string;
  audience: string;
  tone: string;
  designStyle: string;
}

export interface Presentation {
  id: string;
  title: string;
  originalPrompt: string;
  settings: PresentationSettings;
  slides: Slide[];
  updatedAt: string;
}

export const PRESENTATION_TYPES = [
  "Educational",
  "Business",
  "Startup Pitch",
  "Investor Pitch",
  "Research",
  "Marketing",
];
export const AUDIENCES = ["Students", "Investors", "Professionals", "General Audience"];
export const TONES = ["Professional", "Creative", "Academic", "Simple", "Futuristic"];
export const DESIGN_STYLES = ["Minimal", "Modern", "Corporate", "Futuristic", "Creative", "Dark"];
export const SLIDE_COUNTS: SlideCount[] = [
  "auto",
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
];

export const DEFAULT_SETTINGS: PresentationSettings = {
  slideCount: "auto",
  presentationType: "Business",
  audience: "General Audience",
  tone: "Professional",
  designStyle: "Modern",
};
