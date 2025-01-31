import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardPaiementComponent } from './admin-dashboard-paiement.component';

describe('AdminDashboardPaiementComponent', () => {
  let component: AdminDashboardPaiementComponent;
  let fixture: ComponentFixture<AdminDashboardPaiementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDashboardPaiementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDashboardPaiementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
