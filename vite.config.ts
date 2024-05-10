import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: "/src/*" },
      { find: "@pages", replacement: "/src/pages" },
      { find: "@modals", replacement: "/src/components/modals" },
      { find: "@layout", replacement: "/src/layout" },
      { find: "@notification", replacement: "/src/plugins/notification.ts" },
      { find: "@router", replacement: "/src/router" },
      { find: "@auth-interface", replacement: "/src/interfaces/auth.ts" },
      { find: "@global-interface", replacement: "/src/interfaces/global.ts" },
      { find: "@service", replacement: "/src/service" },
      { find: "@validation", replacement: "/src/utils/validations.ts" },
      { find: "@token-service", replacement: "/src/utils/token-service.ts" },
    ],
  },
});
