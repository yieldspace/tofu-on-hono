import {defineConfig} from "vite"
import tofuOnHono from "tofu-on-hono/vite"

export default defineConfig({
    plugins: [tofuOnHono({})]
})
