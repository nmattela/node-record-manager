Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
function WithCreate(Base) {
    return class WithCreate extends Base {
        async post() {
            const response = await this.POSTRequest();
            return this.commit();
        }
        async POSTRequest() {
            try {
                const response = await (0, axios_1.default)({
                    method: 'POST',
                    url: Base.url,
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    data: this.attributes
                });
                return response.data;
            }
            catch (error) {
                throw error;
            }
        }
    };
}
exports.default = WithCreate;
//# sourceMappingURL=WithCreate.js.map