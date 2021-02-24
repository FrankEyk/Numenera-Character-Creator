import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Type } from '../model/type.model';

@Injectable({
  providedIn: 'root'
})
export class NumeneraCharacterService {

  readonly type$ = new Subject<Type>();

  constructor() {
  }

}
