import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  root: resolve(__dirname, "ONG/html"),
  base: "./",
  publicDir: resolve(__dirname, "ONG/imagens"),
  build: {
    outDir: resolve(__dirname, "dist"),
    emptyOutDir: true
  }
});
