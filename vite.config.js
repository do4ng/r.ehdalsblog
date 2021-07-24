import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  server: { fs: { allow: ["/service-worker.js"] } },
  alias: {
    "/@/": path.resolve("./src"),
  },
});
