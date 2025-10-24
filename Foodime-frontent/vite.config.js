import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ✅ Default configuration (root path /)
export default defineConfig({
  plugins: [react()],
  base: "/", // optional but safe to keep
});
