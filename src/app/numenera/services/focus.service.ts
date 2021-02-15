import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { FOCUS, Focus } from '../model/focus.model';

@Injectable({
  providedIn: 'root'
})
export class FocusService {


  foci: Focus[] = FOCUS;

  private selected = new Subject<Focus>();

  constructor() { }

  subToSelected(): Observable<Focus> {
    return this.selected.asObservable();
  }

  /**
   * Set the selected Focus.
   * @param selectedFocus The Focus which is the new selected.
   */
  setSelected(selectedFocus: Focus): void {
    this.selected.next(selectedFocus);
  }
}
