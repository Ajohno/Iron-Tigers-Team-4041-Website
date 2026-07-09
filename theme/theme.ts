import { createTheme } from "@mui/material/styles";

const ironTigersColors = {
  background: "#131313",
  surface: "#201f1f",
  surfaceLow: "#1c1b1b",
  surfaceHigh: "#2a2a2a",
  surfaceHighest: "#353534",
  primary: "#ffb77d",
  primaryContainer: "#ff8c00",
  onPrimaryContainer: "#623200",
  secondary: "#fdb881",
  secondaryContainer: "#6a3b0f",
  textPrimary: "#e5e2e1",
  textSecondary: "#ddc1ae",
  outline: "#a48c7a",
  outlineVariant: "#564334",
  technicalBlue: "#85cfff",
  error: "#ffb4ab",
  errorContainer: "#93000a",
  success: "#9adca6",
  successContainer: "#1f4f2a",
};

export const ironTigersTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: ironTigersColors.background,
      paper: ironTigersColors.surface,
    },
    primary: {
      main: ironTigersColors.primaryContainer,
      light: ironTigersColors.primary,
      dark: ironTigersColors.secondaryContainer,
      contrastText: ironTigersColors.onPrimaryContainer,
    },
    secondary: {
      main: ironTigersColors.secondary,
      light: "#ffdcc3",
      dark: ironTigersColors.secondaryContainer,
      contrastText: "#4d2600",
    },
    info: {
      main: ironTigersColors.technicalBlue,
      contrastText: "#00344c",
    },
    error: {
      main: ironTigersColors.error,
      dark: ironTigersColors.errorContainer,
      contrastText: "#690005",
    },
    success: {
      main: ironTigersColors.success,
      dark: ironTigersColors.successContainer,
      contrastText: "#07210d",
    },
    text: {
      primary: ironTigersColors.textPrimary,
      secondary: ironTigersColors.textSecondary,
    },
    divider: "rgba(86, 67, 52, 0.6)",
  },
  typography: {
    fontFamily: "var(--font-inter), Inter, sans-serif",
    h1: {
      fontFamily: "var(--font-space-grotesk), Space Grotesk, sans-serif",
      fontWeight: 900,
      letterSpacing: "-0.04em",
      textTransform: "uppercase",
    },
    h2: {
      fontFamily: "var(--font-space-grotesk), Space Grotesk, sans-serif",
      fontWeight: 900,
      letterSpacing: "-0.03em",
      textTransform: "uppercase",
    },
    h3: {
      fontFamily: "var(--font-space-grotesk), Space Grotesk, sans-serif",
      fontWeight: 800,
      letterSpacing: "-0.02em",
      textTransform: "uppercase",
    },
    h4: {
      fontFamily: "var(--font-space-grotesk), Space Grotesk, sans-serif",
      fontWeight: 800,
      textTransform: "uppercase",
    },
    h5: {
      fontFamily: "var(--font-space-grotesk), Space Grotesk, sans-serif",
      fontWeight: 700,
      textTransform: "uppercase",
    },
    h6: {
      fontFamily: "var(--font-space-grotesk), Space Grotesk, sans-serif",
      fontWeight: 700,
      textTransform: "uppercase",
    },
    button: {
      fontFamily: "var(--font-space-grotesk), Space Grotesk, sans-serif",
      fontWeight: 700,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
    },
    overline: {
      fontFamily: "var(--font-space-grotesk), Space Grotesk, sans-serif",
      fontWeight: 700,
      letterSpacing: "0.24em",
      textTransform: "uppercase",
    },
  },
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: ironTigersColors.background,
          color: ironTigersColors.textPrimary,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          boxShadow: "none",
          transition: "all 150ms ease",
          "&:active": {
            transform: "scale(0.95)",
          },
        },
      },
      variants: [
        {
          props: { color: "primary", variant: "contained" },
          style: {
            background: `linear-gradient(135deg, ${ironTigersColors.primaryContainer}, ${ironTigersColors.primary})`,
            color: ironTigersColors.onPrimaryContainer,
            "&:hover": {
              boxShadow: "none",
              filter: "brightness(1.05)",
            },
          },
        },
        {
          props: { variant: "outlined" },
          style: {
            borderColor: "rgba(86, 67, 52, 0.6)",
            color: ironTigersColors.textPrimary,
            "&:hover": {
              backgroundColor: ironTigersColors.surfaceHigh,
              borderColor: ironTigersColors.primary,
            },
          },
        },
      ],
    },

    MuiTextField: {
      defaultProps: {
        fullWidth: true,
        variant: "outlined",
      },
    },
    MuiFormControl: {
      defaultProps: {
        fullWidth: true,
      },
      styleOverrides: {
        root: {
          minWidth: 0,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: ironTigersColors.textSecondary,
          fontFamily: "var(--font-space-grotesk), Space Grotesk, sans-serif",
          fontSize: "0.75rem",
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          "&.Mui-focused": {
            color: ironTigersColors.primary,
          },
          "&.Mui-error": {
            color: ironTigersColors.error,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: ironTigersColors.surfaceHigh,
          borderRadius: 4,
          color: ironTigersColors.textPrimary,
          fontFamily: "var(--font-inter), Inter, sans-serif",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(86, 67, 52, 0.6)",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: ironTigersColors.primary,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: ironTigersColors.primaryContainer,
            borderWidth: 2,
          },
          "&.Mui-error .MuiOutlinedInput-notchedOutline": {
            borderColor: ironTigersColors.error,
          },
        },
        input: {
          "&::placeholder": {
            color: "rgba(221, 193, 174, 0.45)",
            opacity: 1,
          },
        },
        notchedOutline: {
          transition: "border-color 150ms ease, border-width 150ms ease",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          color: ironTigersColors.primary,
        },
        select: {
          color: ironTigersColors.textPrimary,
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: ironTigersColors.textSecondary,
          fontFamily: "var(--font-inter), Inter, sans-serif",
          marginLeft: 0,
          "&.Mui-error": {
            color: ironTigersColors.error,
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          alignItems: "center",
          borderRadius: 4,
          fontFamily: "var(--font-inter), Inter, sans-serif",
        },
        icon: {
          color: "inherit",
        },
      },
      variants: [
        {
          props: { severity: "error" },
          style: {
            backgroundColor: "rgba(147, 0, 10, 0.35)",
            border: `1px solid ${ironTigersColors.error}`,
            color: ironTigersColors.error,
          },
        },
        {
          props: { severity: "warning" },
          style: {
            backgroundColor: "rgba(106, 59, 15, 0.45)",
            border: `1px solid ${ironTigersColors.primaryContainer}`,
            color: ironTigersColors.primary,
          },
        },
        {
          props: { severity: "success" },
          style: {
            backgroundColor: "rgba(31, 79, 42, 0.45)",
            border: `1px solid ${ironTigersColors.success}`,
            color: ironTigersColors.success,
          },
        },
        {
          props: { severity: "info" },
          style: {
            backgroundColor: "rgba(0, 67, 96, 0.35)",
            border: `1px solid ${ironTigersColors.technicalBlue}`,
            color: ironTigersColors.technicalBlue,
          },
        },
      ],
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: ironTigersColors.surface,
          border: `1px solid rgba(86, 67, 52, 0.25)`,
          borderRadius: 8,
          boxShadow: "none",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backgroundColor: ironTigersColors.surfaceLow,
        },
      },
    },
  },
});

export default ironTigersTheme;
