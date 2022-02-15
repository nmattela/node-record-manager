import Record from "./Record";
import {Mixin} from "./Constructor";

export default abstract class RecordSet<Attributes extends object> {

    public records: Array<Mixin<Attributes>>

    constructor(records: Array<Mixin<Attributes>>) {
        this.records = records
    }
}