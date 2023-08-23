import {Plugin, UserConfig} from "vite"

export type TofuOnHonoConfig = {
    entry?: string
    outputDir?: string
}

function tofuOnHono({
    entry = "src/worker.ts",
    outputDir = "dist"
}: TofuOnHonoConfig): Plugin {
    return {
        name: "tofu-on-hono",
        config: ({}) => {
            return {
                build: {
                    ssr: entry,
                    rollupOptions: {
                        input: entry,
                        output: {
                            dir: outputDir
                        }
                    }
                }
            } satisfies UserConfig
        }
    }
}

export default tofuOnHono
