import {Env, Hono, Schema} from "hono"

export type Handler<E extends Env = Env, BasePath extends string = string> = (router: Hono<E, unknown, BasePath>) => Hono<E, any, BasePath>

export type InferHandler<Handler, Path extends string> =
    Handler extends (router: Hono<any, unknown, any>) => Hono<infer E, Schema<infer M, any, infer I, infer O>, any>
        ? Hono<E, Schema<M, Path, I, O>, "/"> : never
