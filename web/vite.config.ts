import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/codespaces-rails/",
  plugins: [react()],
  build: {
    outDir: "dist",
  },
});
