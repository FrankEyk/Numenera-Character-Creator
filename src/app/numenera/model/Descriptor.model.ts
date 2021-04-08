import { Benefit } from './Benefit.model';
import { Origin } from './Origin.model';

/**
 * Your descriptor defines your character—it
 * flavors everything you do. The differences
 * between a Charming glaive and a Graceful
 * glaive are considerable
 */
export interface Descriptor {
  /** Descriptor name */
  name: string;
  /** Origin of Descriptor e.g. Rulebook */
  origin: Origin;
  /** Description (optional)*/
  description?: string;
  /** List of benefits */
  benefits: Array<Benefit>;
}
