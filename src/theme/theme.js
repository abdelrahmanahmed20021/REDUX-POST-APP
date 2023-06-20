import { extendTheme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  light: {
    900: "#fff",
    800: "#fcfcfc",
    700: "#F9F3F3",
    600: "#D9D9D9",
  },
  main: {
    900: "#7ed6df",
    800: "#82ccdd",
    700: "#60a3bc",
  },
  primary: {
    900: "lightblue",
    800: "#00d2d3",
    700: "#82ccdd",
    600: "#87A3BD",
    500: "#B4D7EE",
  },
  dark: {
    900: "#303952",
    800: "#1e272e",
  },
  layer: {
    900: "#00000096",
    800: "#40353594",
  },
};

const semanticTokens = {
  colors: {
    abdo: {
      default: "green",
      _dark: "red",
    },
  },
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

export const theme = extendTheme({ config, colors, semanticTokens });
