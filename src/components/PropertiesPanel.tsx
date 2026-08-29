import { Trash2, Type, Image as ImageIcon, Square } from "lucide-react";
import type { SlideElement } from "@/lib/presentation-types";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface Props {
  element: SlideElement | null;
  onChange: (element: SlideElement) => void;
  onDelete: () => void;
  onAddElement: (type: SlideElement["type"]) => void;
}

export function PropertiesPanel({ element, onChange, onDelete, onAddElement }: Props) {
  return (
    <aside className="flex h-full w-72 flex-col gap-5 overflow-y-auto border-l border-border bg-card p-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Insert</p>
        <div className="mt-2 grid grid-cols-3 gap-2">
          <Button variant="outline" size="sm" onClick={() => onAddElement("text")}>
            <Type className="size-4" />
          </Button>
          <Button variant="outline" size="sm" onClick={() => onAddElement("image")}>
            <ImageIcon className="size-4" />
          </Button>
          <Button variant="outline" size="sm" onClick={() => onAddElement("shape")}>
            <Square className="size-4" />
          </Button>
        </div>
      </div>

      {!element ? (
        <p className="text-sm text-muted-foreground">
          Select an element on the canvas to edit its properties.
        </p>
      ) : (
        <div className="flex flex-col gap-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            {element.type} properties
          </p>

          {element.type === "text" && (
            <>
              <div>
                <Label className="text-xs">Font size · {element.style.fontSize ?? 18}</Label>
                <Slider
                  className="mt-2"
                  min={10}
                  max={72}
                  step={1}
                  value={[element.style.fontSize ?? 18]}
                  onValueChange={([v]) =>
                    onChange({ ...element, style: { ...element.style, fontSize: v } })
                  }
                />
              </div>
              <div>
                <Label className="text-xs">Font weight</Label>
                <ToggleGroup
                  type="single"
                  className="mt-2"
                  value={String(element.style.fontWeight ?? 400)}
                  onValueChange={(v) =>
                    v && onChange({ ...element, style: { ...element.style, fontWeight: Number(v) } })
                  }
                >
                  {["400", "500", "700"].map((w) => (
                    <ToggleGroupItem key={w} value={w} className="px-3 text-xs">
                      {w}
                    </ToggleGroupItem>
                  ))}
                </ToggleGroup>
              </div>
              <div>
                <Label className="text-xs">Text color</Label>
                <Input
                  type="color"
                  className="mt-2 h-9 p-1"
                  value={element.style.color ?? "#111827"}
                  onChange={(e) =>
                    onChange({ ...element, style: { ...element.style, color: e.target.value } })
                  }
                />
              </div>
              <div>
                <Label className="text-xs">Alignment</Label>
                <ToggleGroup
                  type="single"
                  className="mt-2"
                  value={element.style.textAlign ?? "left"}
                  onValueChange={(v) =>
                    v &&
                    onChange({
                      ...element,
                      style: { ...element.style, textAlign: v as "left" | "center" | "right" },
                    })
                  }
                >
                  {["left", "center", "right"].map((a) => (
                    <ToggleGroupItem key={a} value={a} className="px-3 text-xs capitalize">
                      {a}
                    </ToggleGroupItem>
                  ))}
                </ToggleGroup>
              </div>
            </>
          )}

          {element.type === "image" && (
            <>
              <div>
                <Label className="text-xs">Width · {Math.round(element.size.width)}%</Label>
                <Slider
                  className="mt-2"
                  min={5}
                  max={100}
                  value={[element.size.width]}
                  onValueChange={([v]) =>
                    onChange({ ...element, size: { ...element.size, width: v ?? 5 } })
                  }
                />
              </div>
              <div>
                <Label className="text-xs">Height · {Math.round(element.size.height)}%</Label>
                <Slider
                  className="mt-2"
                  min={5}
                  max={100}
                  value={[element.size.height]}
                  onValueChange={([v]) =>
                    onChange({ ...element, size: { ...element.size, height: v ?? 5 } })
                  }
                />
              </div>
              <div>
                <Label className="text-xs">Image URL</Label>
                <Input
                  className="mt-2"
                  value={element.content}
                  onChange={(e) => onChange({ ...element, content: e.target.value })}
                />
              </div>
            </>
          )}

          {element.type === "shape" && (
            <>
              <div>
                <Label className="text-xs">Background color</Label>
                <Input
                  type="color"
                  className="mt-2 h-9 p-1"
                  value={element.style.backgroundColor ?? "#6C3BFF"}
                  onChange={(e) =>
                    onChange({
                      ...element,
                      style: { ...element.style, backgroundColor: e.target.value },
                    })
                  }
                />
              </div>
              <div>
                <Label className="text-xs">Border color</Label>
                <Input
                  type="color"
                  className="mt-2 h-9 p-1"
                  value={element.style.borderColor ?? "#111827"}
                  onChange={(e) =>
                    onChange({
                      ...element,
                      style: { ...element.style, borderColor: e.target.value },
                    })
                  }
                />
              </div>
            </>
          )}

          <Button variant="outline" onClick={onDelete} className="gap-2 text-destructive">
            <Trash2 className="size-4" /> Delete element
          </Button>
        </div>
      )}
    </aside>
  );
}
