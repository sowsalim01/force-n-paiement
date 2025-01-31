import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardPresencesComponent } from './admin-dashboard-presences.component';

describe('AdminDashboardPresencesComponent', () => {
  let component: AdminDashboardPresencesComponent;
  let fixture: ComponentFixture<AdminDashboardPresencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDashboardPresencesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDashboardPresencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
