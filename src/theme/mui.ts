/* eslint-disable import/prefer-default-export */
import { createTheme } from "@mui/material"

export const theme = createTheme({
  palette: {
    primary: {
      main: "#2F65F6",
      dark: "#0240C7",
      900: "#0240C7",
      800: "#234feb",
      700: "#2F65F6",
      500: "#4685FD",
      300: "#6DAFFF",
      100: "#A4DAFF",
      50: "#E3F8FF",
    },
    secondary: {
      main: "#326eb3",
    },
    warning: {
      main: "#D3A117",
      dark: "#BF900F",
      contrastText: "#fff",
    },
    success: {
      main: "#07B375",
      light: "#01915F",
      dark: "#096C4A",
      100: "#E71818",
      50: "#E3FFEB",
    },
    error: {
      main: "#D80909",
      dark: "#C70202",
      50: "#FFE3E3",
      100: "#F23333",
    },
    info: {
      main: "#F3F5F8",
      dark: "#E7EBF1",
      50: "#F0C241",
    },
    common: {
      white: "#FFFFFF",
      black: "#000000",
    },
    grey: {
      900: "#EBF0FD",
      800: "#212526",
      700: "#2E3A5D",
      600: "#5F686E",
      500: "#485574",
      400: "#96A1AC",
      300: "#C1CCDA",
      200: "#DAE4EB",
      100: "#F3F5F8",
      50: "#F3F6FA",
    },
    text: {
      primary: "#212526",
    },
    divider: "#e0e0e0",
  },
  typography: {
    htmlFontSize: 10,
    fontSize: 16,
    allVariants: {
      fontFamily:
        'soleil, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    },
    button: {
      textTransform: "none",
      letterSpacing: 0,
      boxShadow: "none",
      fontFamily:
        'soleil, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    },
    h1: {
      fontSize: "6.4rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "4.8rem",
      fontWeight: 700,
    },
    h3: {
      fontSize: "3.2rem",
      fontWeight: 700,
    },
    h4: {
      fontSize: "2.4rem",
      fontWeight: 700,
    },
    h5: {
      fontSize: "1.8rem",
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: "1.6rem",
      fontWeight: 600,
    },
    subtitle2: {
      fontSize: "1.6rem",
      fontWeight: 400,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          textTransform: "none",
          backgroundColor: "#F3F5F8",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent",
          },
          "&.MuiOutlinedInput-root": {
            "&:hover fieldset": {
              borderColor: "transparent", // Transparent border color on hover
            },
            "&.Mui-focused fieldset": {
              borderColor: "transparent", // Transparent border color on focus
            },
            "&.Mui-disabled fieldset": {
              borderColor: "transparent",
            },
          },
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
        disableTouchRipple: true,
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&:disabled": {
            backgroundColor: "#2F65F6",
            color: "#FFFFFF",
            opacity: "25%",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState, theme: baseTheme }) => ({
          minWidth: 0,
          borderRadius: "0.2rem",
          ...(ownerState.size === "small" && {
            padding: `${baseTheme.spacing(0.25)} ${baseTheme.spacing(1.25)}`,
          }),
          ...(ownerState.size === "medium" && {
            padding: `${baseTheme.spacing(1)} ${baseTheme.spacing(2)}`,
          }),
          ...(ownerState.size === "large" && {
            padding: `${baseTheme.spacing(1)} ${baseTheme.spacing(4)}`,
          }),
          "&:disabled": {
            backgroundColor: "#2F65F6",
            color: "#FFFFFF",
            opacity: "25%",
          },
        }),
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          height: "fit-content",
          border: "none",
          color: "#FFFFFF",
          background: "#4685FD",
          fontSize: "1.4rem",
          fontWeight: 700,
          borderRadius: "0.2rem",
          boxShadow: "none",
          padding: "0.4rem 0.8rem",
          "& .MuiChip-label": { paddingLeft: 0, paddingRight: 0 },
        },
        label: ({ ownerState, theme: baseTheme }) => ({
          ...(ownerState.size === "medium" && {
            padding: `${baseTheme.spacing(0.5)} ${baseTheme.spacing(1.5)}`,
            fontSize: "1.4rem",
          }),
          ...(ownerState.size === "small" && {
            padding: `${baseTheme.spacing(0.25)} ${baseTheme.spacing(1)}`,
            fontSize: "1.2rem",
          }),
        }),
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: ({ theme: baseTheme }) => ({
          borderRadius: `${baseTheme.spacing(0.5)}`,
          fontSize: "1.3rem",
          fontWeight: 600,
          backgroundColor: `${baseTheme.palette.common.black}`,
          color: `${baseTheme.palette.common.white}`,
        }),
        arrow: ({ theme: baseTheme }) => ({
          color: `${baseTheme.palette.common.black}`,
          fontSize: "1rem",
        }),
      },
    },
  },
})
