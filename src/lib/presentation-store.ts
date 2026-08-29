import type { Presentation } from "./presentation-types";

// Simple frontend-only persistence layer. Swap this module for API calls later.
const KEY = "slideforge:presentations";

function read(): Presentation[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(window.localStorage.getItem(KEY) ?? "[]") as Presentation[];
  } catch {
    return [];
  }
}

function write(list: Presentation[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, JSON.stringify(list));
}

export function listPresentations(): Presentation[] {
  return read().sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
}

export function getPresentation(id: string): Presentation | undefined {
  return read().find((p) => p.id === id);
}

export function savePresentation(presentation: Presentation) {
  const list = read().filter((p) => p.id !== presentation.id);
  list.push({ ...presentation, updatedAt: new Date().toISOString() });
  write(list);
}

export function deletePresentation(id: string) {
  write(read().filter((p) => p.id !== id));
}

export function renamePresentation(id: string, title: string) {
  const p = getPresentation(id);
  if (p) savePresentation({ ...p, title });
}
