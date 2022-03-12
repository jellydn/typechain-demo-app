import presetWind from "@unocss/preset-wind";
import react from "@vitejs/plugin-react";
import { presetAttributify, presetUno } from "unocss";
import Unocss from "unocss/vite";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Unocss({
      presets: [presetAttributify(), presetUno(), presetWind()],
    }),
  ],
});
