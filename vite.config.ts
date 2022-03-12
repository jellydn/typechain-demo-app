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
      shortcuts: [
        // you could still have object style
        {
          btn: "py-2 px-4 font-semibold rounded-lg shadow-md ml-2 mr-2",
        },
        // dynamic shortcuts
        [
          /^btn-(.*)$/,
          ([, c]) => `bg-${c}-400 text-${c}-100 py-2 px-4 ml-2 mr-2 rounded-lg`,
        ],
      ],
      presets: [presetAttributify(), presetUno(), presetWind()],
    }),
  ],
});
