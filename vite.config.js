import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // lets the built site work on GitHub Pages / Netlify Drop
});
