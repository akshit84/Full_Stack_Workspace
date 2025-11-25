import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Define the alias: "@" maps to the "src" directory
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
