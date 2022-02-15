Object.defineProperty(exports, "__esModule", { value: true });
const Record_1 = require("../src/CRUD/Record");
const WithRead_1 = require("../src/CRUD/WithRead");
const WithCreate_1 = require("../src/CRUD/WithCreate");
class User extends Record_1.default {
    sayHello() {
        return 'hello';
    }
}
User.url = `http://localhost:3000/users`;
const withCreate = (0, WithCreate_1.default)(User);
exports.default = (0, WithRead_1.default)(withCreate);
//# sourceMappingURL=User.js.map