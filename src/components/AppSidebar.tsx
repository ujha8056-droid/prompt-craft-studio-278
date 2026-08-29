import { Link, useRouterState } from "@tanstack/react-router";
import { Home, Presentation, LayoutTemplate, Settings, PanelLeft, Sparkles } from "lucide-react";
import { useState } from "react";

const items = [
  { title: "Home", url: "/dashboard", icon: Home },
  { title: "My Presentations", url: "/dashboard", icon: Presentation },
  { title: "Templates", url: "/dashboard", icon: LayoutTemplate },
  { title: "Settings", url: "/dashboard", icon: Settings },
];

export function AppSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <aside
      className={`flex h-screen shrink-0 flex-col border-r border-sidebar-border bg-sidebar transition-all ${
        collapsed ? "w-16" : "w-60"
      }`}
    >
      <div className="flex h-14 items-center gap-2 px-3">
        <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-[image:var(--gradient-brand)]">
          <Sparkles className="size-4 text-primary-foreground" />
        </span>
        {!collapsed && <span className="font-semibold text-sidebar-foreground">SlideForge AI</span>}
        <button
          type="button"
          aria-label="Toggle sidebar"
          onClick={() => setCollapsed((c) => !c)}
          className="ml-auto rounded-md p-1.5 text-muted-foreground hover:bg-sidebar-accent"
        >
          <PanelLeft className="size-4" />
        </button>
      </div>

      <nav className="flex flex-col gap-1 p-2">
        {items.map((item) => {
          const active = pathname === item.url && item.title === "Home";
          return (
            <Link
              key={item.title}
              to={item.url}
              title={item.title}
              className={`flex items-center gap-3 rounded-lg px-2.5 py-2 text-sm transition-colors ${
                active
                  ? "bg-sidebar-accent font-medium text-sidebar-accent-foreground"
                  : "text-muted-foreground hover:bg-sidebar-accent/60"
              }`}
            >
              <item.icon className="size-4 shrink-0" />
              {!collapsed && <span className="truncate">{item.title}</span>}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
