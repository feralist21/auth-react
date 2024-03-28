import { defineConfig } from "vite";
import path from 'path';
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
            "@ui": path.resolve(__dirname, "src/shared/ui"),
            "@assets": path.resolve(__dirname, "src/assets/"),
        },
    },
    plugins: [react()],
});
