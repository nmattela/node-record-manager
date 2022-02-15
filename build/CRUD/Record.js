Object.defineProperty(exports, "__esModule", { value: true });
class Record {
    constructor(attributes, url) {
        this.attributes = attributes;
        //Shortcut to query attributes directly from the object
        Object.entries(attributes).forEach(([key, value]) => {
            this[key] = value;
        });
        this.url = url;
    }
    merge(partialAttributes) {
        return new this.constructor({ ...this.attributes, ...partialAttributes }, this.url);
    }
}
exports.default = Record;
//# sourceMappingURL=Record.js.map