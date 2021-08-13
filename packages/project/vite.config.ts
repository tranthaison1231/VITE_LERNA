import reactRefresh from "@vitejs/plugin-react-refresh";
import tsConfigPath from "vite-tsconfig-paths";
import styleImport from "vite-plugin-style-import";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    reactRefresh(),
    tsConfigPath(),
    styleImport({
      libs: [
        {
          libraryName: "antd",
          resolveStyle: (name) => {
            return `antd/es/${name}/style/index`;
          }
        }
      ]
    })
  ],
  base: "./",
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
});
