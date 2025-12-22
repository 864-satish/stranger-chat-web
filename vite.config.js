import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  server: {
    port: process.env.VITE_PORT || process.env.PORT || 4173,
    host: "0.0.0.0",
  },
  preview: {
    port: process.env.VITE_PORT || process.env.PORT || 4173,
    host: "0.0.0.0",
    allowedHosts: [
      "stranger-chat-web-production-22ae.up.railway.app",
      "https://fabulous-granita-a6b8ba.netlify.app",
      "https://strangerchat.co.in",
    ],
  },
});
