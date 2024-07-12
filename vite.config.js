import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path"; // Import the path module

export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      external: ["primevue/FloatLabel"],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
