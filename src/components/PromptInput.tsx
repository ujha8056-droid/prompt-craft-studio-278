import { useState } from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PromptInputProps {
  placeholder?: string;
  suggestions?: string[];
  buttonLabel?: string;
  initialValue?: string;
  onSubmit: (prompt: string) => void;
}

export function PromptInput({
  placeholder = "What would you like to create?",
  suggestions = [],
  buttonLabel = "Generate Presentation",
  initialValue = "",
  onSubmit,
}: PromptInputProps) {
  const [value, setValue] = useState(initialValue);

  const submit = () => {
    const prompt = value.trim();
    if (prompt) onSubmit(prompt);
  };

  return (
    <div className="w-full">
      <div className="rounded-2xl border border-border bg-card p-2 shadow-[var(--shadow-soft)] focus-within:ring-2 focus-within:ring-ring/40">
        <div className="flex items-start gap-3 p-3">
          <Sparkles className="mt-1 size-5 shrink-0 text-primary" />
          <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) submit();
            }}
            placeholder={placeholder}
            rows={3}
            className="min-h-20 w-full resize-none bg-transparent text-base text-foreground outline-none placeholder:text-muted-foreground"
          />
        </div>
        <div className="flex items-center justify-between gap-3 px-3 pb-2">
          <span className="hidden text-xs text-muted-foreground sm:block">
            Tip: add slide count, audience or tone for a sharper deck.
          </span>
          <Button onClick={submit} disabled={!value.trim()} size="lg" className="ml-auto gap-2">
            {buttonLabel}
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>

      {suggestions.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {suggestions.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setValue(s)}
              className="rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
            >
              {s}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
