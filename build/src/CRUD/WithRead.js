Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const Records_1 = require("./Records");
const Page_1 = require("./Page");
function WithRead(Base) {
    return class WithRead extends Base {
        static async get(options) {
            const response = await this.GETRequest();
            const Class = this;
            //const Class = (this as new (...args: Array<any>) => V)
            if (Array.isArray(response) || (response.hasOwnProperty("records") && response.hasOwnProperty("totals"))) {
                if (options.page === undefined) {
                    return new Records_1.default(response.map(r => new Class(r)));
                }
                else {
                    return new Page_1.default(response.records.map(r => new Class(r)), response.totals);
                }
            }
            else {
                throw new Error(`Expected a set of records, but got one. Use getOne instead?`);
            }
        }
        static async getOne() {
            const response = await this.GETRequest();
            const Class = this;
            if (Array.isArray(response) || (response.hasOwnProperty("records") && response.hasOwnProperty("totals"))) {
                throw new Error(`Expected a single record, but got a set of records. Use get instead`);
            }
            else {
                return new Class(response);
            }
        }
        static async GETRequest() {
            try {
                const response = await (0, axios_1.default)({
                    method: 'GET',
                    url: Base.url,
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                });
                return response.data;
            }
            catch (error) {
                throw error;
            }
        }
    };
}
exports.default = WithRead;
//'abstract new (...args: any[]) => (<T extends Mixin<Attributes>, TConstructor extends Constructor<T, Attributes>, Attributes extends object>(Base: TConstructor) => ...) & T'.
//# sourceMappingURL=WithRead.js.map