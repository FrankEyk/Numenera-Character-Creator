import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumeneraComponent } from './numenera.component';

describe('NumeneraComponent', () => {
  let component: NumeneraComponent;
  let fixture: ComponentFixture<NumeneraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumeneraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumeneraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
