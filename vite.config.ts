import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// Removed Replit plugin for local development

export default defineConfig({
  plugins: [
    react(),
  // ...existing code...
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  base: "./", // Ensures relative paths for GitHub Pages
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"), // Output to 'dist' for GitHub Pages
    emptyOutDir: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
