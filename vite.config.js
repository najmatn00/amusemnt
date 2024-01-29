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
            src: "/logo/72.png",
            sizes: "72x72",
            type: "image/png",
          },
          {
            src: "/logo/144.png",
            sizes: "144x144",
            type: "image/png",
          },
          {
            src: "/logo/512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/logo/256.png",
            sizes: "256x256",
            type: "image/png",
          },
        ],
      },
    }),
  ],
};
