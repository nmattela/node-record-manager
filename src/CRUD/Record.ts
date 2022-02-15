export default abstract class Record<Attributes extends object> {

    public static url: string = '';
    public attributes: Attributes
    public dirty: boolean = false;
    public reflected: boolean = true;


    constructor(attributes: Attributes, params?: {dirty?: boolean, reflected?: boolean}) {
        if((this.constructor as any).url === '') {
            throw new Error(`A class extending Record has no URL defined. Please define a URL on the class as such: \n public static url: string = 'YOUR URL HERE'`)
        }
        this.attributes = attributes
        //Shortcut to query attributes directly from the object
        Object.entries(attributes).forEach(([key, value]) => {
            this[key] = value;
        })

        this.dirty = params && params.dirty !== undefined ? params.dirty : false
        this.reflected = params && params.reflected !== undefined ? params.reflected : true
    }

    public merge(partialAttributes: Partial<Attributes>): Record<Attributes> {
        return new (this.constructor as new (...args: Array<any>) => Record<Attributes>)({...this.attributes, ...partialAttributes}, {dirty: true, reflected: this.reflected})
    }

    public commit(): Record<Attributes> {
        return new (this.constructor as new (...args: Array<any>) => Record<Attributes>)(this.attributes, {dirty: false, reflected: true})
    }
}