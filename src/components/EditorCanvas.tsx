import { useRef } from "react";
import type { Slide, SlideElement } from "@/lib/presentation-types";

interface Props {
  slide: Slide;
  selectedId: string | null;
  onSelect: (id: string | null) => void;
  onChange: (element: SlideElement) => void;
}

export function EditorCanvas({ slide, selectedId, onSelect, onChange }: Props) {
  const canvasRef = useRef<HTMLDivElement>(null);

  const startDrag = (e: React.PointerEvent, el: SlideElement, mode: "move" | "resize") => {
    e.stopPropagation();
    onSelect(el.id);
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    const startX = e.clientX;
    const startY = e.clientY;
    const origin = { ...el.position };
    const originSize = { ...el.size };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);

    const onMove = (ev: PointerEvent) => {
      const dx = ((ev.clientX - startX) / rect.width) * 100;
      const dy = ((ev.clientY - startY) / rect.height) * 100;
      if (mode === "move") {
        onChange({
          ...el,
          position: {
            x: Math.min(100 - originSize.width, Math.max(0, origin.x + dx)),
            y: Math.min(100 - originSize.height, Math.max(0, origin.y + dy)),
          },
        });
      } else {
        onChange({
          ...el,
          size: {
            width: Math.min(100 - origin.x, Math.max(5, originSize.width + dx)),
            height: Math.min(100 - origin.y, Math.max(5, originSize.height + dy)),
          },
        });
      }
    };
    const onUp = () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
  };

  return (
    <div className="flex h-full w-full items-center justify-center overflow-auto bg-workspace p-6">
      <div
        ref={canvasRef}
        onPointerDown={() => onSelect(null)}
        className="relative aspect-video w-full max-w-[900px] overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-soft)]"
        style={{ containerType: "inline-size" }}
      >
        {slide.elements.map((el) => {
          const selected = el.id === selectedId;
          return (
            <div
              key={el.id}
              onPointerDown={(e) => startDrag(e, el, "move")}
              className={`absolute cursor-move ${selected ? "outline outline-2 outline-primary" : "hover:outline hover:outline-1 hover:outline-primary/40"}`}
              style={{
                left: `${el.position.x}%`,
                top: `${el.position.y}%`,
                width: `${el.size.width}%`,
                height: `${el.size.height}%`,
              }}
            >
              {el.type === "text" ? (
                <div
                  contentEditable
                  suppressContentEditableWarning
                  onPointerDown={(e) => {
                    if (selected) e.stopPropagation();
                  }}
                  onBlur={(e) => onChange({ ...el, content: e.currentTarget.innerText })}
                  className="h-full w-full cursor-text whitespace-pre-wrap break-words leading-snug outline-none"
                  style={{
                    fontSize: `${(el.style.fontSize ?? 18) / 9.6}cqw`,
                    fontWeight: el.style.fontWeight ?? 400,
                    color: el.style.color ?? "#111827",
                    textAlign: el.style.textAlign ?? "left",
                  }}
                >
                  {el.content}
                </div>
              ) : el.type === "image" ? (
                <img
                  src={el.content}
                  alt=""
                  draggable={false}
                  className="pointer-events-none h-full w-full object-cover"
                  style={{ borderRadius: el.style.borderRadius ?? 8 }}
                />
              ) : (
                <div
                  className="h-full w-full"
                  style={{
                    backgroundColor: el.style.backgroundColor ?? "#6C3BFF",
                    border: `2px solid ${el.style.borderColor ?? "transparent"}`,
                    borderRadius:
                      el.content === "circle" ? "9999px" : (el.style.borderRadius ?? 4),
                  }}
                />
              )}
              {selected && (
                <span
                  onPointerDown={(e) => startDrag(e, el, "resize")}
                  className="absolute -bottom-1.5 -right-1.5 size-3 cursor-se-resize rounded-full border-2 border-card bg-primary"
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
