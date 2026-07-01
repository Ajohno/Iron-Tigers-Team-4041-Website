"use client";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import type { ReactNode } from "react";
import { ironTigersTheme } from "@/theme/theme";

type AppThemeProviderProps = {
  children: ReactNode;
};

export function AppThemeProvider({ children }: AppThemeProviderProps) {
  return (
    <ThemeProvider theme={ironTigersTheme}>
      <CssBaseline enableColorScheme />
      {children}
    </ThemeProvider>
  );
}
