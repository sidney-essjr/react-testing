import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ReactNode } from "react";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme }>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
