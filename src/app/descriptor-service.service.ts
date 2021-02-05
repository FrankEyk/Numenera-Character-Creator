import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Descriptor } from './model/description.model';

@Injectable({
  providedIn: 'root'
})
export class DescriptorService {
  descriptors: Descriptor[] = [
    {
      name: 'Glaive',
      description: 'Glaive desc'
    },
    {
      name: 'Nano',
      description: 'Nano desc'
    },
    {
      name: 'Jack',
      description: 'Jack desc'
    }];

  private selected = new Subject<Descriptor>();

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
