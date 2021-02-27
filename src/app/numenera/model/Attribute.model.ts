/** Attribute Type. */
export enum AttributeType {
  MIGHT = 0,
  SPEED = 1,
  INTELLECT = 2,
}

/** Attribute */
export interface Attribute {
  type: AttributeType;
  value: number;
}

/** Edge */
export interface Edge {
  type: AttributeType;
  value: number;
}
