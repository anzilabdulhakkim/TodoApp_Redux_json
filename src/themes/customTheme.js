import { extendTheme } from "@chakra-ui/react";

export const customDarkTheme = extendTheme({
  colors: {
    brand: {
      100: "#2F2F2F", 
      900: "#191919", 
    },
  },
  styles: {
    global: {
      body: {
        bg: "#242424",
        color: "white",
      },
    },
  },
});

export const customLightTheme = extendTheme({
  colors: {
    brand: {
      100: "white",
      lightGray: "#F5F5F5", 
    },
  },
  styles: {
    global: {
      body: {
        bg: "brand.lightGray",
        color: "black",
      },
    },
  },
});
