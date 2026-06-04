import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
	// Treat media asset extensions (like .mkv) as static assets so Vite
	// doesn't try to parse them as JS during import analysis.
	// This lets us import video files from src/assets safely.
	assetsInclude: ["**/*.mkv", "**/*.webm", "**/*.mp4"],
	plugins: [react()],
});
