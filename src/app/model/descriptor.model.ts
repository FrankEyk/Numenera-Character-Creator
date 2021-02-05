import { Benefit } from './benefit.model';

export class Descriptor {

  public name: string;
  public description: string;
  public benefits: Benefit[];

  constructor(name: string, desc: string, benefits: Benefit[]) {
    this.name = name;
    this.description = desc;
    this.benefits = benefits;
  }

}