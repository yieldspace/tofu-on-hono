import {Env, Hono} from "hono";
import {Handler} from "./types";

export function applyRoutes<E extends Env = Env>(hono: Hono<any, any, any>) {
    const routes = import.meta.glob("/src/routes/**/*.{ts,tsx,js,jsx}", {eager: true, import: "default"})

    Object.entries(routes).forEach(([key, value]) => {
        if (!key.endsWith("route.ts")) {
            return
        }
        const router = new Hono<E, unknown, string>();
        (value as Handler<E>)(router)

        let path  = key.replace("/src/routes", "").replace("route.ts", "")
        if (path !== "/") {
            path = path.substring(0, path.length-1)
        }
        hono.route(path, router)
    })

    return hono
}
