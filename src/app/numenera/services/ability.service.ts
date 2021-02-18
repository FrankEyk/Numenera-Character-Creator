import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Ability } from '../model/ability.model';

@Injectable({
  providedIn: 'root'
})
export class AbilityService {

  private selected = new Subject<Ability>();

  constructor() { }

  subToSelected(): Observable<Ability> {
    return this.selected.asObservable();
  }
  
  /**
   * Set the selected Ability.
   * @param selected The Ability which is the new selected.
   */
  setSelected(selected: Ability): void{
    this.selected.next(selected);
  }
}
