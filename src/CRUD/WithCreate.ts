import axios from "axios";
import {Constructor, Mixin} from "./Constructor";
import Record from "./Record";

export default function WithCreate<T extends Mixin<Attributes>, Attributes extends object>(Base: Constructor<T, Attributes>) {
    return class WithCreate extends Base {
        public async post(): Promise<Record<Attributes>> {
            const response = await this.POSTRequest()
            return this.commit()
        }

        public async POSTRequest(): Promise<Attributes> {
            try {
                const response = await axios({
                    method: 'POST',
                    url: (Base as any).url,
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    data: this.attributes
                });
                return response.data
            } catch (error) {
                throw error
            }
        }
    }
}