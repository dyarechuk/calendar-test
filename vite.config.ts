import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/calendar-test/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rolldownOptions: {
      output: {
        manualChunks(id) {
          if (
            id.includes("node_modules/react/") ||
            id.includes("node_modules/react-dom/")
          ) {
            return "react";
          }

          if (
            id.includes("node_modules/react-big-calendar") ||
            id.includes("node_modules/date-fns")
          ) {
            return "calendar";
          }

          if (
            id.includes("node_modules/react-dnd") ||
            id.includes("node_modules/react-dnd-html5-backend")
          ) {
            return "dnd";
          }
        },
      },
    },
  },
});
