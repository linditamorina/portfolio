"use client";
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// Korrigjimi: Përdorim React.ComponentProps për të marrë tipet në mënyrë të sigurt
export function ThemeProvider({ 
  children, 
  ...props 
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}