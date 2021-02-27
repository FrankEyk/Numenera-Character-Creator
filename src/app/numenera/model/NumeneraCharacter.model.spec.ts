import { FOCUS } from './Focus.model';
import { NumeneraCharacter } from './NumeneraCharacter.model';
import { TYPES } from './Type.model';

describe('Numenera Character Aggregate', () => {
  let aggregate: NumeneraCharacter;

  beforeEach(() => {
    aggregate = new NumeneraCharacter();
  });

  it('should be created', () => {
    expect(aggregate).toBeTruthy();
  });

  it('should set type, attributes and edge', () => {
    const type = TYPES[0];

    aggregate.type = type;

    expect(aggregate.type).toBe(type);
    expect(aggregate.attributes).toBe(type.attributes);
    expect(aggregate.edge).toBe(type.edge);
  });

  it('should set focus and abilities', () => {
    const focus = FOCUS[0];

    aggregate.focus = focus;

    expect(aggregate.focus).toBe(focus);
    expect(aggregate.abilities).toBe(focus.abilities);
  });
});
