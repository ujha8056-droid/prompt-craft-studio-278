import type {
  Presentation,
  PresentationSettings,
  Slide,
  SlideElement,
} from "./presentation-types";

export const uid = () => Math.random().toString(36).slice(2, 10);

const SECTION_TITLES = [
  "Introduction",
  "The Problem",
  "Our Approach",
  "Key Concepts",
  "How It Works",
  "Market Overview",
  "Core Benefits",
  "Use Cases",
  "Case Study",
  "Data & Insights",
  "Roadmap",
  "Challenges",
  "Best Practices",
  "Comparison",
  "Impact",
  "Future Outlook",
  "Summary",
  "Thank You",
];

function titleFromPrompt(prompt: string) {
  const cleaned = prompt
    .replace(/^(create|make|build|generate)\s+(an?|the)?\s*/i, "")
    .replace(/\b\d+[- ]?slides?\b/i, "")
    .replace(/^(presentation|pitch deck|deck)\s+(about|on|for)\s+/i, "")
    .replace(/\s+/g, " ")
    .trim();
  const short = cleaned.length > 60 ? cleaned.slice(0, 60) + "…" : cleaned;
  return short ? short.charAt(0).toUpperCase() + short.slice(1) : "Untitled Presentation";
}

function textEl(
  content: string,
  x: number,
  y: number,
  width: number,
  height: number,
  style: SlideElement["style"],
): SlideElement {
  return {
    id: uid(),
    type: "text",
    content,
    position: { x, y },
    size: { width, height },
    style: { color: "#111827", textAlign: "left", fontWeight: 400, fontSize: 18, ...style },
  };
}

function buildTitleSlide(title: string, settings: PresentationSettings, order: number): Slide {
  return {
    id: uid(),
    title: title,
    order,
    elements: [
      {
        id: uid(),
        type: "shape",
        content: "rectangle",
        position: { x: 6, y: 30 },
        size: { width: 8, height: 3 },
        style: { backgroundColor: "#6C3BFF", borderColor: "transparent", borderRadius: 4 },
      },
      textEl(title, 6, 36, 76, 18, { fontSize: 44, fontWeight: 700 }),
      textEl(`${settings.presentationType} • ${settings.audience} • ${settings.tone} tone`, 6, 58, 70, 8, {
        fontSize: 16,
        color: "#6B7280",
      }),
    ],
  };
}

function buildContentSlide(title: string, order: number, withImage: boolean): Slide {
  const elements: SlideElement[] = [
    textEl(title, 6, 10, 60, 12, { fontSize: 32, fontWeight: 700 }),
    textEl(
      "• Key point supporting this section\n• Context and background detail\n• Insight the audience should remember",
      6,
      28,
      withImage ? 46 : 80,
      45,
      { fontSize: 18, color: "#374151" },
    ),
  ];
  if (withImage) {
    elements.push({
      id: uid(),
      type: "image",
      content: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=60",
      position: { x: 58, y: 26 },
      size: { width: 36, height: 50 },
      style: { borderRadius: 12 },
    });
  }
  return { id: uid(), title, order, elements };
}

export function generateMockSlides(prompt: string, settings: PresentationSettings): Slide[] {
  const count = settings.slideCount === "auto" ? 8 : settings.slideCount;
  const title = titleFromPrompt(prompt);
  const slides: Slide[] = [buildTitleSlide(title, settings, 0)];
  for (let i = 1; i < count; i++) {
    const sectionTitle = SECTION_TITLES[(i - 1) % SECTION_TITLES.length];
    slides.push(buildContentSlide(sectionTitle, i, i % 3 === 1));
  }
  return slides;
}

export function createPresentation(
  prompt: string,
  settings: PresentationSettings,
): Presentation {
  return {
    id: uid(),
    title: titleFromPrompt(prompt),
    originalPrompt: prompt,
    settings,
    slides: generateMockSlides(prompt, settings),
    updatedAt: new Date().toISOString(),
  };
}

export function createBlankSlide(order: number): Slide {
  return {
    id: uid(),
    title: "New Slide",
    order,
    elements: [textEl("New Slide", 6, 12, 60, 12, { fontSize: 32, fontWeight: 700 })],
  };
}
