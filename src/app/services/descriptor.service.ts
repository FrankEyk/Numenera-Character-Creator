import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Descriptor } from '../model/descriptor.model';

@Injectable({
  providedIn: 'root'
})
export class DescriptorService {

  private charmingDesc = 'You’re a smooth talker and a charmer. Whether '+
  'through seemingly supernatural means or just a '+
  'way with words, you can convince others to do as '+
  'you wish. Most likely, you’re physically attractive '+
  'or at least highly charismatic, and others '+
  'enjoy listening to your voice. You probably pay '+
  'attention to your appearance, keeping yourself '+
  'well groomed. You make friends easily. '+
  'You play up the personality facet of your Intellect '+
  'stat; intelligence is not your strong suit. You’re '+
  'personable, not necessarily studious or strong-willed.'

  descriptors: Descriptor[] = [
    {
      name: 'Charming',
      description: this.charmingDesc,
      benefits: [
        {
          name: 'Personable',
          description: '+2 to your Intellect Pool'
        }
      ]
    }
  ];

  private selected = new Subject<Descriptor>();

  constructor() { }

  subToSelected(): Observable<Descriptor> {
    return this.selected.asObservable();
  }

  /**
   * Set the selected Descriptor.
   * @param selectedDesc The Descriptor which is the new selected.
   */
  setSelected(selectedDesc: Descriptor){
    this.selected.next(selectedDesc);
  }
}
