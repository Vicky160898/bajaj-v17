import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsheetComponent } from './goalsheet.component';

describe('GoalsheetComponent', () => {
  let component: GoalsheetComponent;
  let fixture: ComponentFixture<GoalsheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GoalsheetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GoalsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
