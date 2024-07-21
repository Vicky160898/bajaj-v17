import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncentiveUserInformationComponent } from './incentive-user-information.component';

describe('IncentiveUserInformationComponent', () => {
  let component: IncentiveUserInformationComponent;
  let fixture: ComponentFixture<IncentiveUserInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IncentiveUserInformationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IncentiveUserInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
