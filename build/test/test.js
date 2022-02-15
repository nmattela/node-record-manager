Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./User");
const getPrototypeChain = (obj) => {
    let supers = [];
    let prototype = Object.getPrototypeOf(obj);
    while (prototype !== null) {
        supers = [...supers, prototype.constructor.name];
        prototype = Object.getPrototypeOf(prototype);
    }
    return supers;
};
const main = async () => {
    const user1 = new User_1.default({ id: 'eeeee', name: 'Nicolas', age: 22, address: { id: 'aaa', street: 'a', zip: 'b', city: 'c' } });
    await user1.post();
    const allUsers = await User_1.default.get();
    const user2 = await User_1.default.getOne();
};
main();
//# sourceMappingURL=test.js.map