import { defineConfig } from "vite";
import { cpSync } from "node:fs";
import { resolve } from "node:path";

const raizDoProjeto = resolve(__dirname);

export default defineConfig({
  root: resolve(__dirname, "ONG/html"),
  base: "./",
  publicDir: resolve(__dirname, "ONG/imagens"),
  plugins: [{
    name: "copy-ong-images",
    closeBundle() {
      cpSync(
        resolve(raizDoProjeto, "ONG/imagens"),
        resolve(raizDoProjeto, "dist/imagens"),
        { recursive: true }
      );
    }
  }],
  build: {
    outDir: resolve(__dirname, "dist"),
    emptyOutDir: true
  }
});
