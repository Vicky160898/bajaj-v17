import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessGraphComponent } from './business-graph.component';

describe('BusinessGraphComponent', () => {
  let component: BusinessGraphComponent;
  let fixture: ComponentFixture<BusinessGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BusinessGraphComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BusinessGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
