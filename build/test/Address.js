Object.defineProperty(exports, "__esModule", { value: true });
const Record_1 = require("../src/CRUD/Record");
const WithRead_1 = require("../src/CRUD/WithRead");
class Address extends Record_1.default {
}
Address.url = `http://localhost:3000/addresses`;
exports.default = (0, WithRead_1.default)(Address);
//# sourceMappingURL=Address.js.map