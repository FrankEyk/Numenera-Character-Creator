import { Descriptor } from './Descriptor.model';
import { Focus } from './Focus.model';
import { CharacterType } from './Type.model';

export interface Origin {
  title: string;
  page?: number;
  url?: string;
  description?: string;
}

export interface SourceBook {
  title: string;
  isbn?: string;
  descriptors: Array<Descriptor>;
  foci: Array<Focus>;
  types: Array<CharacterType>;
}
