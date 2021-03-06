/**
 * If an ability is labeled Action, you
 * must take an action to use it. If an ability is labeled
 * Enabler, it makes other actions better or gives some
 * other benefit, but it’s not an action.
 */
export enum ActionType {
  ENABLER = 0,
  ACTION = 1,
}
