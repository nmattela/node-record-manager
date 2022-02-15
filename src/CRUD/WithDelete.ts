import {Constructor, Mixin} from "./Constructor";
import Record from "./Record";

export default function WithDelete<T extends Mixin<Attributes>, Attributes extends object>(Base: Constructor<T, Attributes>) {
    return class WithDelete extends Base {

    }
}