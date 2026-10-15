import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: process.env.VITE_BASE_PATH || (process.env.VERCEL ? "/" : "/lncvlsqz/"),
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    port: 5173,
  },
});
