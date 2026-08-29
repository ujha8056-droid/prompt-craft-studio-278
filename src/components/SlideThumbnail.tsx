import { Trash2 } from "lucide-react";
import type { Slide } from "@/lib/presentation-types";
import { SlideRenderer } from "./SlideRenderer";

interface SlideThumbnailProps {
  slide: Slide;
  index: number;
  active: boolean;
  onSelect: () => void;
  onDelete: () => void;
  deletable: boolean;
}

export function SlideThumbnail({
  slide,
  index,
  active,
  onSelect,
  onDelete,
  deletable,
}: SlideThumbnailProps) {
  return (
    <div className="group flex items-start gap-2">
      <span className="w-4 pt-1 text-right text-xs text-muted-foreground">{index + 1}</span>
      <button
        type="button"
        onClick={onSelect}
        className={`relative aspect-video flex-1 overflow-hidden rounded-lg border-2 transition-all ${
          active
            ? "border-primary shadow-[var(--shadow-glow)]"
            : "border-border hover:border-primary/40"
        }`}
      >
        <SlideRenderer slide={slide} className="h-full w-full" />
        {deletable && (
          <span
            role="button"
            tabIndex={0}
            aria-label="Delete slide"
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.stopPropagation();
                onDelete();
              }
            }}
            className="absolute right-1 top-1 hidden rounded-md bg-card/90 p-1 text-muted-foreground hover:text-destructive group-hover:block"
          >
            <Trash2 className="size-3.5" />
          </span>
        )}
      </button>
    </div>
  );
}
