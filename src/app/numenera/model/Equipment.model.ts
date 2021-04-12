/**
 * Model For Numenera Equipment (Artifacts and so on.)
 */
export interface Equipment {
  /** Equipment name */
  name: string;
  /** Equipment description (optional)*/
  description?: string;
  /** Minor Effects Suggestions. */
  minorEffects?: Array<string>;
  /** Major Effects Suggestions.  */
  majorEffects?: Array<string>;
}
