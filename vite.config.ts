import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), svgr()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
});
