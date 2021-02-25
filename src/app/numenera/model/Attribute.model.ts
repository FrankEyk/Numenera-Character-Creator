/**
 * Attribute Type.
 */
export enum AttributeType {
    MIGHT = 0,
    SPEED = 1,
    INTELLECT = 2,
}

/** Attribute */
export interface Attribute {
    type: AttributeType;
    name: string;
    value: number;
}
/** Edge */
export interface Edge {
    type: AttributeType;
    name: string;
    value: number;
}
