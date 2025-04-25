import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    watch: {
      usePolling: true, // Enable polling for file changes
    },
    host: true, // Allow access from outside the container
    strictPort: true,
    port: 5173, // Ensure the port matches the one exposed in Docker
  },
});
