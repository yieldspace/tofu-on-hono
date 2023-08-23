import {Handler} from "tofu-on-hono";

export default (router => router.get(
    async ctx => {
        const name = ctx.req.param<":name">("name")
        return ctx.jsonT({
            text: `Hello, ${name}!`
        })
    }
)) satisfies Handler
