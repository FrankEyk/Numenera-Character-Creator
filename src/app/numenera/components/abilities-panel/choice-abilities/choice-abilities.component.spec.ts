import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceAbilitiesComponent } from './choice-abilities.component';

describe('ChoiceAbilitiesComponent', () => {
  let component: ChoiceAbilitiesComponent;
  let fixture: ComponentFixture<ChoiceAbilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoiceAbilitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoiceAbilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
