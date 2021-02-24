import { Ability } from './ability.model';
import { Attribute, AttributeType, Edge } from './Attribute.model';
import { Descriptor } from './descriptor.model';
import { Focus } from './focus.model';
import { Type } from './type.model';
import { PLUS_TWO_INT } from './upgrade.model';

/**
 * Domain Aggregate.
 */
export class NumeneraCharacter {

    public name = '';
    public attributes: Array<Attribute> = [];
    public edge: Array<Edge> = [];
    public abilities: Array<Ability> = [];

    private _type!: Type;
    private _focus!: Focus;
    private _descriptor!: Descriptor;

    get type(): Type {
        return this._type;
    }

    set type(type: Type) {
        this._type = type;
        this.attributes = type.attributes;
        this.edge = type.edge;
    }

    get descriptor(): Descriptor {
        return this._descriptor;
    }

    set descriptor(descriptor: Descriptor) {
        this._descriptor = descriptor;

        for (const benefit of descriptor.benefits) {
            if (benefit.upgrade === PLUS_TWO_INT) {
                this.attributes.filter(a => a.type === AttributeType.INTELLECT).map(a => a.value + 2);
            }
        }
    }

    get focus(): Focus {
        return this._focus;
    }

    set focus(focus: Focus) {
        this._focus = focus;
        this.abilities = focus.abilities;
    }

}
