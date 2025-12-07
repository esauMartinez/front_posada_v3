// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///C:/Users/marti/Documents/desarrollo/vue/sistema-rifa-posada/node_modules/.pnpm/vite@5.4.21_@types+node@20._8202822e2d6df97df11019e44911af47/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/marti/Documents/desarrollo/vue/sistema-rifa-posada/node_modules/.pnpm/@vitejs+plugin-vue@5.2.4_vi_ccde2f7437a3bb04f987e43eece16fcb/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueDevTools from "file:///C:/Users/marti/Documents/desarrollo/vue/sistema-rifa-posada/node_modules/.pnpm/vite-plugin-vue-devtools@7._f13424d1f1590415c2e985cc4889ab9a/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
var __vite_injected_original_import_meta_url = "file:///C:/Users/marti/Documents/desarrollo/vue/sistema-rifa-posada/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  },
  server: {
    host: "0.0.0.0"
  },
  build: {
    outDir: "dist"
  },
  css: {
    preprocessorOptions: {
      sass: {
        // Use this option to disable Sass deprecation warnings
        additionalData: '@import "@/styles/global.scss";',
        // This suppresses the deprecation warnings by telling Sass to use a more compatible syntax
        sassOptions: {
          quietDeps: true
          // This will suppress deprecation warnings and other non-fatal messages
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxtYXJ0aVxcXFxEb2N1bWVudHNcXFxcZGVzYXJyb2xsb1xcXFx2dWVcXFxcc2lzdGVtYS1yaWZhLXBvc2FkYVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcbWFydGlcXFxcRG9jdW1lbnRzXFxcXGRlc2Fycm9sbG9cXFxcdnVlXFxcXHNpc3RlbWEtcmlmYS1wb3NhZGFcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL21hcnRpL0RvY3VtZW50cy9kZXNhcnJvbGxvL3Z1ZS9zaXN0ZW1hLXJpZmEtcG9zYWRhL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXG5cbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCB2dWVEZXZUb29scyBmcm9tICd2aXRlLXBsdWdpbi12dWUtZGV2dG9vbHMnXG5cbi8vIGh0dHBzOi8vdml0ZS5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3Z1ZSgpLCB2dWVEZXZUb29scygpXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKSxcbiAgICB9LFxuICB9LFxuICBzZXJ2ZXI6IHtcbiAgICBob3N0OiAnMC4wLjAuMCcsXG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgb3V0RGlyOiAnZGlzdCcsXG4gIH0sXG4gIGNzczoge1xuICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcbiAgICAgIHNhc3M6IHtcbiAgICAgICAgLy8gVXNlIHRoaXMgb3B0aW9uIHRvIGRpc2FibGUgU2FzcyBkZXByZWNhdGlvbiB3YXJuaW5nc1xuICAgICAgICBhZGRpdGlvbmFsRGF0YTogJ0BpbXBvcnQgXCJAL3N0eWxlcy9nbG9iYWwuc2Nzc1wiOycsXG4gICAgICAgIC8vIFRoaXMgc3VwcHJlc3NlcyB0aGUgZGVwcmVjYXRpb24gd2FybmluZ3MgYnkgdGVsbGluZyBTYXNzIHRvIHVzZSBhIG1vcmUgY29tcGF0aWJsZSBzeW50YXhcbiAgICAgICAgc2Fzc09wdGlvbnM6IHtcbiAgICAgICAgICBxdWlldERlcHM6IHRydWUsIC8vIFRoaXMgd2lsbCBzdXBwcmVzcyBkZXByZWNhdGlvbiB3YXJuaW5ncyBhbmQgb3RoZXIgbm9uLWZhdGFsIG1lc3NhZ2VzXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFpWCxTQUFTLGVBQWUsV0FBVztBQUVwWixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxpQkFBaUI7QUFKbU4sSUFBTSwyQ0FBMkM7QUFPNVIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLElBQUksR0FBRyxZQUFZLENBQUM7QUFBQSxFQUM5QixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLElBQ3REO0FBQUEsRUFDRjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxFQUNWO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSCxxQkFBcUI7QUFBQSxNQUNuQixNQUFNO0FBQUE7QUFBQSxRQUVKLGdCQUFnQjtBQUFBO0FBQUEsUUFFaEIsYUFBYTtBQUFBLFVBQ1gsV0FBVztBQUFBO0FBQUEsUUFDYjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
