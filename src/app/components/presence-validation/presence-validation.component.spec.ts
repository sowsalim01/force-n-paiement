import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresenceValidationComponent } from './presence-validation.component';

describe('PresenceValidationComponent', () => {
  let component: PresenceValidationComponent;
  let fixture: ComponentFixture<PresenceValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresenceValidationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresenceValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
