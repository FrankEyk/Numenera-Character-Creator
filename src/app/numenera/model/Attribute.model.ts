
export enum AttributeType {
    MIGHT = 0,
    SPEED = 1,
    INTELLECT = 2,
}

export interface Attribute {
    type: AttributeType;
    name: string;
    value: number;
}
