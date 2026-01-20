import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  // ✅ Use relative paths so Vercel serves assets correctly
  base: "./",

  // ✅ Dev server config for local development
  server: {
    host: "::",
    port: 8080,
  },

  // ✅ Plugins: React SWC and optional dev plugin
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),

  // ✅ Path aliases
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // Optional: build options for optimization
  build: {
    outDir: "dist",       // Vercel expects this folder
    sourcemap: mode === "development", // optional, for debugging
    rollupOptions: {
      output: {
        manualChunks: undefined, // Let Vite handle code splitting automatically
      },
    },
  },
}));
