import {Constructor, Mixin} from "./Constructor";
import Record from "./Record";

export default function WithUpdate<T extends Mixin<Attributes>, Attributes extends object>(Base: Constructor<T, Attributes>) {
    return class WithUpdate extends Base {

    }
}