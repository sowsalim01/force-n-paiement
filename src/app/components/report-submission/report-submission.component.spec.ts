import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportSubmissionComponent } from './report-submission.component';

describe('ReportSubmissionComponent', () => {
  let component: ReportSubmissionComponent;
  let fixture: ComponentFixture<ReportSubmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportSubmissionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
