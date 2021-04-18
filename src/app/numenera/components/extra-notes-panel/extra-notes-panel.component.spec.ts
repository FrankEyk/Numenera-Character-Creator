import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraNotesPanelComponent } from './extra-notes-panel.component';

describe('ExtraNotesPanelComponent', () => {
  let component: ExtraNotesPanelComponent;
  let fixture: ComponentFixture<ExtraNotesPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtraNotesPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraNotesPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
