import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
// https://vitejs.dev/config/
export default {
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: "amusemnt",
        short_name: "amusemnt",
        description: "",
        icons: [
          {
            src: "/64.png",
            sizes: "64x64",
            type: "image/png",
          },
          {
            src: "/logo/85.png",
            sizes: "64x64",
            type: "image/png",
          },
          {
            src: "/logo/512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/logo/128.png",
            sizes: "256x256",
            type: "image/png",
          },
        ],
      },
    }),
  ],
};
