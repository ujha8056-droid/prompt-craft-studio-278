import type { Slide, SlideElement } from "@/lib/presentation-types";

export function ElementView({ element }: { element: SlideElement }) {
  const { style } = element;
  if (element.type === "text") {
    return (
      <div
        className="h-full w-full whitespace-pre-wrap break-words leading-snug"
        style={{
          fontSize: `${style.fontSize ?? 18}cqw`,
          fontWeight: style.fontWeight ?? 400,
          color: style.color ?? "#111827",
          textAlign: style.textAlign ?? "left",
        }}
      >
        {element.content}
      </div>
    );
  }
  if (element.type === "image") {
    return (
      <img
        src={element.content}
        alt=""
        className="h-full w-full object-cover"
        style={{ borderRadius: style.borderRadius ?? 8 }}
      />
    );
  }
  return (
    <div
      className="h-full w-full"
      style={{
        backgroundColor: style.backgroundColor ?? "#6C3BFF",
        border: `2px solid ${style.borderColor ?? "transparent"}`,
        borderRadius: element.content === "circle" ? "9999px" : (style.borderRadius ?? 4),
      }}
    />
  );
}

/** Static, non-interactive slide render used by thumbnails and preview. */
export function SlideRenderer({ slide, className = "" }: { slide: Slide; className?: string }) {
  return (
    <div
      className={`relative overflow-hidden bg-card ${className}`}
      style={{ containerType: "inline-size" }}
    >
      {slide.elements.map((el) => (
        <div
          key={el.id}
          className="absolute"
          style={{
            left: `${el.position.x}%`,
            top: `${el.position.y}%`,
            width: `${el.size.width}%`,
            height: `${el.size.height}%`,
            fontSize: 0,
          }}
        >
          <div style={{ fontSize: "initial", height: "100%", width: "100%" }}>
            <ScaledElement element={el} />
          </div>
        </div>
      ))}
    </div>
  );
}

function ScaledElement({ element }: { element: SlideElement }) {
  // font sizes are expressed relative to slide width via cqw units
  const scaled: SlideElement =
    element.type === "text"
      ? {
          ...element,
          style: { ...element.style, fontSize: (element.style.fontSize ?? 18) / 9.6 },
        }
      : element;
  return <ElementView element={scaled} />;
}
