import Record from "./Record";
import RecordSet from "./RecordSet";
import {Totals} from "./types";
import {Mixin} from "./Constructor";

export default class Page<Attributes extends object> extends RecordSet<Attributes> {

    public totals: Totals

    constructor(records: Array<Mixin<Attributes>>, totals: Totals) {
        super(records);

        this.totals = totals
    }
}