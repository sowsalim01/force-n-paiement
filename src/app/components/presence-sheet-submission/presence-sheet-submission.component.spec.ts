import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresenceSheetSubmissionComponent } from './presence-sheet-submission.component';

describe('PresenceSheetSubmissionComponent', () => {
  let component: PresenceSheetSubmissionComponent;
  let fixture: ComponentFixture<PresenceSheetSubmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresenceSheetSubmissionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresenceSheetSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
