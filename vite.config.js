import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/mern_full_stack_frontend/",
  plugins: [react()],
});
