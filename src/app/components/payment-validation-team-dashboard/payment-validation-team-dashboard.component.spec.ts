import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentValidationTeamDashboardComponent } from './payment-validation-team-dashboard.component';

describe('PaymentValidationTeamDashboardComponent', () => {
  let component: PaymentValidationTeamDashboardComponent;
  let fixture: ComponentFixture<PaymentValidationTeamDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentValidationTeamDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentValidationTeamDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
