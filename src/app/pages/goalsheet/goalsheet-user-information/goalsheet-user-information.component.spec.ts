import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsheetUserInformationComponent } from './goalsheet-user-information.component';

describe('GoalsheetUserInformationComponent', () => {
  let component: GoalsheetUserInformationComponent;
  let fixture: ComponentFixture<GoalsheetUserInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GoalsheetUserInformationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GoalsheetUserInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
