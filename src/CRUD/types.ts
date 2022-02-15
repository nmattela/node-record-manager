export type GETResponse<Attributes extends object> =
    Attributes |
    Array<Attributes> |
    Pagination<Attributes>
export type GETOptions = {
    page?: number
}
export type Totals = {
    page: number,
    records: number
}
export type Pagination<Attributes extends object> = {
    records: Array<Attributes>,
    totals: Totals
}

export function GETResponseMatch<Attributes extends object, T>(response: GETResponse<Attributes>, cases: {
    single?: (attributes: Attributes) => T,
    list?: (attributes: Array<Attributes>) => T,
    page?: (pagination: Pagination<Attributes>) => T,
    default: (a: GETResponse<Attributes>) => T
}): T {
    if(Array.isArray(response)) {
        return cases.list ? cases.list(response) : cases.default(response)
    } else if(response.hasOwnProperty("records") && response.hasOwnProperty("totals")) {
        return cases.page ? cases.page(response as Pagination<Attributes>) : cases.default(response)
    } else {
        return cases.single ? cases.single(response as Attributes) : cases.default(response)
    }
}

