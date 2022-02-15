import RecordSet from "./RecordSet";
import Record from "./Record";
import {Mixin} from "./Constructor";

export default class Records<Attributes extends object> extends RecordSet<Attributes> {

    constructor(records: Array<Mixin<Attributes>>) {
        super(records);
    }
}