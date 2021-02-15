import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Type, TYPES } from '../model/type.model';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  types: Type[] = TYPES;

  private selected = new Subject<Type>();

  subToSelected(): Observable<Type> {
    return this.selected.asObservable();
  }

  /**
   * Set the selected Type.
   * @param selectedType The Type which is the new selected.
   */
  setSelected(selectedType: Type): void{
    this.selected.next(selectedType);
  }

}
