import {Handler} from "tofu-on-hono";

export default ((router) => router.get(
    async ctx => {
        return ctx.jsonT({
            hello: "world!"
        })
    }
)) satisfies Handler
