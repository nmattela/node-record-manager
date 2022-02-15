import Record from "./Record";
import WithCreate from "./WithCreate";

export type Constructor<T extends Mixin<Attributes>, Attributes extends object> = new (...args: Array<any>) => T

export type AnyFunction<A = any> = (...input: Array<any>) => A
export type MixinType<A extends AnyFunction> = InstanceType<ReturnType<A>>
export type Mixin<Attributes extends object> = Record<Attributes> | MixinType<typeof WithCreate>