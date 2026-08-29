import { MoreVertical, Pencil, Trash2, ExternalLink } from "lucide-react";
import type { Presentation } from "@/lib/presentation-types";
import { SlideRenderer } from "./SlideRenderer";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function timeAgo(iso: string) {
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.round(diff / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins} min ago`;
  const hrs = Math.round(mins / 60);
  if (hrs < 24) return `${hrs} hr ago`;
  return `${Math.round(hrs / 24)} d ago`;
}

interface Props {
  presentation: Presentation;
  onOpen: () => void;
  onRename: () => void;
  onDelete: () => void;
}

export function PresentationCard({ presentation, onOpen, onRename, onDelete }: Props) {
  const first = presentation.slides[0];
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-soft)] transition-shadow hover:shadow-[var(--shadow-glow)]">
      <button type="button" onClick={onOpen} className="block w-full">
        <div className="aspect-video w-full border-b border-border bg-workspace">
          {first ? <SlideRenderer slide={first} className="h-full w-full" /> : null}
        </div>
      </button>
      <div className="flex items-start gap-2 p-3">
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-foreground">{presentation.title}</p>
          <p className="mt-0.5 text-xs text-muted-foreground">
            {presentation.slides.length} slides · edited {timeAgo(presentation.updatedAt)}
          </p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="size-8">
              <MoreVertical className="size-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={onOpen}>
              <ExternalLink className="size-4" /> Open
            </DropdownMenuItem>
            <DropdownMenuItem onClick={onRename}>
              <Pencil className="size-4" /> Rename
            </DropdownMenuItem>
            <DropdownMenuItem onClick={onDelete} variant="destructive">
              <Trash2 className="size-4" /> Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
