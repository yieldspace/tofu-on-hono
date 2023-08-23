import {Hono} from "hono";
import {applyRoutes} from "tofu-on-hono"

const hono = new Hono()

applyRoutes(hono)

export default hono
