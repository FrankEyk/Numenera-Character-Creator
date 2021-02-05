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

  private cleverDesc = 'You’re quick-witted, thinking well on your '+
  'feet. You understand people, so you can fool '+
  'them but are rarely fooled. Because you easily '+
  'see things for what they are, you get the lay '+
  'of the land swiftly, size up threats and allies, '+
  'and assess situations with accuracy. Perhaps '+
  'you’re physically attractive, or maybe you use '+
  'your wit to overcome any physical or mental '+
  'imperfections.';

  descriptors: Descriptor[] = [
    {
      name: 'Charming',
      description: this.charmingDesc,
      benefits: [
        {
          name: 'Personable',
          description: '+2 to your Intellect Pool'
        },
        {
          name: 'Skill',
          description: 'You’re trained in all tasks involving positive or pleasant social interaction.'
        },
        {
         name: 'Skill' ,
         description: 'You’re trained when using esoteries or special abilities that influence the minds of others.'
        },
        {
         name: 'Contact' ,
         description: 'You have an important contact who is in an influential position, such as a minor noble, the captain of the town guard, an Aeon Priest, or the head of a large gang of thieves. You and the GM should work out the details together.'
        },
        {
          name: 'Inability',
          description: 'You were never good at studying or retaining facts. Any task involving lore, knowledge, or understanding is hindered.'
        },
        {
          name: 'Inability',
          description: 'Your willpower is not one of your strong points. Whenever you try to resist a mental attack, you’re hindered.'
        }
      ]
    },
    {
      name: 'Clever',
      description: this.cleverDesc,
      benefits: [
        {
          name: 'Smart',
          description: '+2 to your Intellect Pool'
        },
        {
          name: 'Skill',
          description: 'You’re trained in all interactions involving lies or trickery.'
        },
        {
          name: 'Skill',
          description: 'You’re trained in defense rolls to resist mental effects.'
        },
        {
          name: 'Skill',
          description: 'You’re trained in all tasks involving, identifying, or assessing danger, lies, quality, importance, function, or power.'
        },
        {
          name: 'Inability',
          description: 'You were never good at studying or retaining trivial knowledge. Any task involving lore, knowledge, or understanding is hindered.'
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
