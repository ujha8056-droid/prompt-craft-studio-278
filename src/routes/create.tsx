import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  AUDIENCES,
  DEFAULT_SETTINGS,
  DESIGN_STYLES,
  PRESENTATION_TYPES,
  SLIDE_COUNTS,
  TONES,
  type PresentationSettings,
} from "@/lib/presentation-types";
import { createPresentation } from "@/lib/mock-generator";
import { savePresentation } from "@/lib/presentation-store";

export const Route = createFileRoute("/create")({
  validateSearch: (search: Record<string, unknown>) => ({
    prompt: typeof search["prompt"] === "string" ? search["prompt"] : "",
  }),
  head: () => ({
    meta: [
      { title: "Configure your presentation — SlideForge AI" },
      {
        name: "description",
        content: "Choose slide count, type, audience, tone and design style before generating.",
      },
      { property: "og:title", content: "Configure your presentation — SlideForge AI" },
      {
        property: "og:description",
        content: "Fine-tune your deck settings before AI generation.",
      },
    ],
  }),
  component: CreatePage,
});

function OptionGroup({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <p className="text-sm font-medium text-foreground">{label}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            className={`rounded-lg border px-3 py-1.5 text-sm transition-colors ${
              value === opt
                ? "border-primary bg-primary/10 font-medium text-foreground"
                : "border-border bg-card text-muted-foreground hover:border-primary/40"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

function CreatePage() {
  const { prompt } = Route.useSearch();
  const navigate = useNavigate();
  const [settings, setSettings] = useState<PresentationSettings>(DEFAULT_SETTINGS);

  const update = <K extends keyof PresentationSettings>(k: K, v: PresentationSettings[K]) =>
    setSettings((s) => ({ ...s, [k]: v }));

  const generate = () => {
    const presentation = createPresentation(prompt, settings);
    savePresentation(presentation);
    navigate({ to: "/editor/$id", params: { id: presentation.id } });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="mx-auto flex h-16 max-w-3xl items-center px-6">
        <Link to="/" className="flex items-center gap-2 text-sm text-muted-foreground">
          <ArrowLeft className="size-4" /> Back
        </Link>
      </header>

      <main className="mx-auto max-w-3xl px-6 pb-24">
        <div className="rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Your Idea
          </p>
          <p className="mt-2 text-lg text-foreground">
            &ldquo;{prompt || "No prompt provided."}&rdquo;
          </p>
        </div>

        <h1 className="mt-10 text-2xl font-bold tracking-tight">Presentation details</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Optional — leave defaults and we&rsquo;ll decide for you.
        </p>

        <div className="mt-8 flex flex-col gap-7">
          <div>
            <p className="text-sm font-medium text-foreground">Number of slides</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {SLIDE_COUNTS.map((c) => (
                <button
                  key={String(c)}
                  type="button"
                  onClick={() => update("slideCount", c)}
                  className={`min-w-14 rounded-lg border px-3 py-1.5 text-sm transition-colors ${
                    settings.slideCount === c
                      ? "border-primary bg-primary/10 font-medium text-foreground"
                      : "border-border bg-card text-muted-foreground hover:border-primary/40"
                  }`}
                >
                  {c === "auto" ? "Auto" : c}
                </button>
              ))}
            </div>
          </div>

          <OptionGroup
            label="Presentation type"
            options={PRESENTATION_TYPES}
            value={settings.presentationType}
            onChange={(v) => update("presentationType", v)}
          />
          <OptionGroup
            label="Audience"
            options={AUDIENCES}
            value={settings.audience}
            onChange={(v) => update("audience", v)}
          />
          <OptionGroup
            label="Tone"
            options={TONES}
            value={settings.tone}
            onChange={(v) => update("tone", v)}
          />
          <OptionGroup
            label="Design style"
            options={DESIGN_STYLES}
            value={settings.designStyle}
            onChange={(v) => update("designStyle", v)}
          />

          <Button size="lg" className="mt-2 gap-2 self-start" onClick={generate}>
            <Sparkles className="size-4" /> Generate Presentation
          </Button>
        </div>
      </main>
    </div>
  );
}
