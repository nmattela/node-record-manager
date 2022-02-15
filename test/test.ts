import Record from "../src/CRUD/Record";
import WithRead from "../src/CRUD/WithRead";
import User from "./User";

const getPrototypeChain = (obj: object) => {
    let supers: Array<string> = []
    let prototype = Object.getPrototypeOf(obj)
    while(prototype !== null) {
        supers = [...supers, prototype.constructor.name]
        prototype = Object.getPrototypeOf(prototype)
    }
    return supers
}

const main = async () => {

    const user1 = new User({id: 'eeeee', name: 'Nicolas', age: 22, address: {id: 'aaa', street: 'a', zip: 'b', city: 'c'}})

    await user1.post()

    const allUsers = await User.get()

    const user2 = await User.getOne()
}

main()