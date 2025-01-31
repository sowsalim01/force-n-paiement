import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresenceValidationTeamDashboardComponent } from './presence-validation-team-dashboard.component';

describe('PresenceValidationTeamDashboardComponent', () => {
  let component: PresenceValidationTeamDashboardComponent;
  let fixture: ComponentFixture<PresenceValidationTeamDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresenceValidationTeamDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresenceValidationTeamDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
