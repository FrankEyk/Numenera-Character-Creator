import { Attribute } from './Attribute.model';
import { Descriptor } from './descriptor.model';
import { Focus } from './focus.model';
import { Type } from './type.model';

/**
 * Domain Aggregate.
 */
export class NumeneraCharacter {

    public name = '';
    public attributes: Array<Attribute> = [];

    private _type!: Type;
    private _focus!: Focus;
    private _descriptor!: Descriptor;


    get type(): Type {
        return this._type;
    }

    set type(type: Type) {
        this._type = type;
        this.attributes = type.attributes;
    }


}
