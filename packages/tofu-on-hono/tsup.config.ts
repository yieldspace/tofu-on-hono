import {defineConfig} from "tsup";

export default defineConfig({
    entry: [
        "src/index.ts",
        "src/vite/index.ts"
    ],
    format: ["cjs", "esm"],
    clean: true,
    minify: true,
    dts: true,
    sourcemap: true
})