import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Only GitHub Pages needs the "/codespaces-rails/" subpath. Every other
  // host (Bolt, Vercel, Railway static, etc.) serves from the domain root,
  // so default to "/" and let the GH Pages workflow override it.
  base: process.env.VITE_BASE_PATH || "/",
  plugins: [react()],
  build: {
    outDir: "dist",
  },
});
