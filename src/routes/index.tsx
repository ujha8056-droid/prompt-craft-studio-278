import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Sparkles, Wand2, LayoutTemplate, Presentation } from "lucide-react";
import { PromptInput } from "@/components/PromptInput";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SlideForge AI — Prompt to Presentation" },
      {
        name: "description",
        content:
          "Describe your idea and SlideForge AI builds a professional, editable presentation in seconds.",
      },
      { property: "og:title", content: "SlideForge AI — Prompt to Presentation" },
      {
        property: "og:description",
        content: "Turn any idea into a powerful presentation with AI.",
      },
    ],
  }),
  component: Landing,
});

const SUGGESTIONS = [
  "Create a presentation about Artificial Intelligence.",
  "Make a startup pitch deck for my business idea.",
  "Create a college presentation about climate change.",
  "Build a professional business presentation.",
  "Create an 18-slide presentation about the future of technology.",
];

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <header className="mx-auto flex h-16 max-w-6xl items-center px-6">
        <span className="flex items-center gap-2 font-semibold">
          <span className="grid size-8 place-items-center rounded-lg bg-[image:var(--gradient-brand)]">
            <Sparkles className="size-4 text-primary-foreground" />
          </span>
          SlideForge AI
        </span>
        <Button asChild variant="outline" size="sm" className="ml-auto">
          <Link to="/dashboard">Open Dashboard</Link>
        </Button>
      </header>

      <main className="mx-auto max-w-3xl px-6 pb-24 pt-12 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
          <Wand2 className="size-3.5 text-primary" /> Describe Your Idea. AI Builds Your
          Presentation.
        </span>
        <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Turn Any Idea Into a{" "}
          <span className="bg-[image:var(--gradient-brand)] bg-clip-text text-transparent">
            Powerful Presentation.
          </span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-base text-muted-foreground">
          Write a simple idea or a detailed prompt and transform it into a professional
          presentation.
        </p>

        <div className="mt-10 text-left">
          <PromptInput
            suggestions={SUGGESTIONS}
            onSubmit={(prompt) => navigate({ to: "/create", search: { prompt } })}
          />
        </div>

        <div className="mt-16 grid gap-4 text-left sm:grid-cols-3">
          {[
            { icon: Wand2, title: "Prompt to deck", text: "One prompt becomes a full outline." },
            {
              icon: LayoutTemplate,
              title: "Styled for you",
              text: "Tone, audience and design controls.",
            },
            {
              icon: Presentation,
              title: "Fully editable",
              text: "Every slide element stays editable.",
            },
          ].map((f) => (
            <div key={f.title} className="rounded-xl border border-border bg-card p-4">
              <f.icon className="size-5 text-primary" />
              <p className="mt-3 text-sm font-semibold">{f.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{f.text}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
