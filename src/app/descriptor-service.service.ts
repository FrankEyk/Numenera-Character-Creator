import { SelectionModel } from '@angular/cdk/collections';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DescriptorService {
  descriptors = ['Glaive', 'Nano', 'Jack'];
  private selected = new Subject<string>();

  subToSelected(): Observable<string> {
    return this.selected.asObservable();
  }

  /**
   * Set the selected Descriptor.
   * @param selectedDesc The Descriptor which is the new selected.
   */
  setSelected(selectedDesc: string){
    this.selected.next(selectedDesc);
  }
}
