export class commodity{
    _name: string;
    _typecommodity: string

    constructor(name:string,
                typecommodity:string) {
        this._name = name;
        this._typecommodity = typecommodity
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get typecommodity(): string {
        return this._typecommodity;
    }

    set typecommodity(value: string) {
        this._typecommodity = value;
    }
}