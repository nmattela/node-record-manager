import Record from "../src/CRUD/Record";
import WithRead from "../src/CRUD/WithRead";
import WithCreate from "../src/CRUD/WithCreate";
import {AddressAttributes} from "./Address";
import {Constructor} from "../src/CRUD/Constructor";

type UserAttributes = {id: string, name: string, age: number, address: AddressAttributes}

class User extends Record<UserAttributes> {
    public static url = `http://localhost:3000/users`

    public sayHello() {
        return 'hello'
    }
}

const withCreate = WithCreate<User, UserAttributes>(User)
export default WithRead<(typeof WithCreate & User), UserAttributes>(withCreate)