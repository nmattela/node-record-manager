Object.defineProperty(exports, "__esModule", { value: true });
const RecordSet_1 = require("./RecordSet");
class Page extends RecordSet_1.default {
    constructor(records, totals) {
        super(records);
        this.totals = totals;
    }
}
exports.default = Page;
//# sourceMappingURL=Page.js.map