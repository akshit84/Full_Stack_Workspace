import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "@fontsource/ubuntu";
import "@fontsource/ubuntu/400.css";
import "@fontsource/ubuntu/500.css";
import "@fontsource/ubuntu/700.css";
// import {defaultSystem } from "@chakra-ui/react";
import { Provider } from "./components/ui/provider";
// import { theme } from "./Theme/index.js";
import { ThemeProvider } from "next-themes";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { theme } from "./Theme";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider attribute="class" defaultTheme="light">
      <ChakraProvider value={defaultSystem} theme={theme}>
        <App />
      </ChakraProvider>
    </ThemeProvider>
  </StrictMode>
);
