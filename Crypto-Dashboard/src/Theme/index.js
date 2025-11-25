import { defineTextStyles, createSystem, defaultConfig } from "@chakra-ui/react";

export const theme = defineTextStyles({
  fonts: {
    heading: "Ubuntu",
    body: "Ubuntu",
  },
});

const mySystem = createSystem({
  ...defaultConfig,
  // Your customizations go here, e.g.,
  tokens: {
    colors: {
      brand: { value: '#0070f3' },
    },
  },
});

export default mySystem;
