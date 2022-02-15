Object.defineProperty(exports, "__esModule", { value: true });
class Record {
    constructor(attributes, params) {
        this.dirty = false;
        this.reflected = true;
        if (this.constructor.url === '') {
            throw new Error(`A class extending Record has no URL defined. Please define a URL on the class as such: \n public static url: string = 'YOUR URL HERE'`);
        }
        this.attributes = attributes;
        //Shortcut to query attributes directly from the object
        Object.entries(attributes).forEach(([key, value]) => {
            this[key] = value;
        });
        this.dirty = params && params.dirty !== undefined ? params.dirty : false;
        this.reflected = params && params.reflected !== undefined ? params.reflected : true;
    }
    merge(partialAttributes) {
        return new this.constructor({ ...this.attributes, ...partialAttributes }, { dirty: true, reflected: this.reflected });
    }
    commit() {
        return new this.constructor(this.attributes, { dirty: false, reflected: true });
    }
}
exports.default = Record;
Record.url = '';
//# sourceMappingURL=Record.js.map