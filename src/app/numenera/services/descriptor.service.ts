import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DESCRIPTIONS, Descriptor } from '../model/descriptor.model';

@Injectable({
  providedIn: 'root'
})
export class DescriptorService {

  descriptors: Descriptor[] = DESCRIPTIONS;

  private selected = new Subject<Descriptor>();

  constructor() { }

  subToSelected(): Observable<Descriptor> {
    return this.selected.asObservable();
  }

  /**
   * Set the selected Descriptor.
   * @param selectedDesc The Descriptor which is the new selected.
   */
  setSelected(selectedDesc: Descriptor): void {
    this.selected.next(selectedDesc);
  }
}
