import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: process.env.BASE_PATH || "/",
  plugins: [react()],
  server: {
    host: true, // allow external access
    allowedHosts: [
      "spark-labs-and-technologies-1.onrender.com"
    ]
  },
  preview: {
    allowedHosts: [
      "spark-labs-and-technologies-1.onrender.com"
    ]
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
