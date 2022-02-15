import {Constructor, Mixin} from "./Constructor";
import axios from "axios";
import {GETOptions, GETResponse, GETResponseMatch, Pagination} from "./types";
import Records from "./Records";
import Page from "./Page";
import RecordSet from "./RecordSet";
import Record from "./Record";

export default function WithRead<T extends Mixin<Attributes>, Attributes extends object>(Base: Constructor<T, Attributes>) {
    return class WithRead extends Base {
        public static async get(options?: GETOptions): Promise<RecordSet<Attributes>> {
            const response = await this.GETRequest()
            const Class = ((this as unknown) as new (...args: Array<any>) => WithRead & T)
            //const Class = (this as new (...args: Array<any>) => V)

            if(Array.isArray(response) || (response.hasOwnProperty("records") && response.hasOwnProperty("totals"))) {
                if(options.page === undefined) {
                    return new Records((response as Array<Attributes>).map(r => new Class(r)))
                } else {
                    return new Page((response as Pagination<Attributes>).records.map(r => new Class(r)), (response as Pagination<Attributes>).totals)
                }
            } else {
                throw new Error(`Expected a set of records, but got one. Use getOne instead?`)
            }
        }

        public static async getOne(): Promise<WithRead & T> {
            const response = await this.GETRequest()
            const Class = ((this as unknown) as new (...args: Array<any>) => WithRead & T)


            if(Array.isArray(response) || (response.hasOwnProperty("records") && response.hasOwnProperty("totals"))) {
                throw new Error(`Expected a single record, but got a set of records. Use get instead`)
            } else {
                return new Class(response as Attributes)
            }
        }

        public static async GETRequest(): Promise<GETResponse<Attributes>> {
            try {
                const response = await axios({
                    method: 'GET',
                    url: (Base as any).url,
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                });
                return response.data
            } catch (error) {
                throw error
            }
        }
    }
}

//'abstract new (...args: any[]) => (<T extends Mixin<Attributes>, TConstructor extends Constructor<T, Attributes>, Attributes extends object>(Base: TConstructor) => ...) & T'.