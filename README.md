# tofu-on-hono[WIP]

tofu-on-hono is a file based router for hono.

# Usage

It can use as vite plugin.
Route directory is `src/routes`.

```typescript
import {Handler} from "tofu-on-hono";

export default ((router) => router.get(
    async ctx => {
        return ctx.jsonT({
            hello: "world!"
        })
    }
)) satisfies Handler
```

see examples.
