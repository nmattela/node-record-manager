import Record from "../src/CRUD/Record";
import WithRead from "../src/CRUD/WithRead";
import WithCreate from "../src/CRUD/WithCreate";

export type AddressAttributes = {id: string, street: string, zip: string, city: string}

class Address extends Record<AddressAttributes> {
    public static url = `http://localhost:3000/addresses`
}

export default WithRead<Address, typeof Address, AddressAttributes>(Address)