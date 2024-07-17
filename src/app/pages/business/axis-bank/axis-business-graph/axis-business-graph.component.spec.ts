import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AxisBusinessGraphComponent } from './axis-business-graph.component';

describe('AxisBusinessGraphComponent', () => {
  let component: AxisBusinessGraphComponent;
  let fixture: ComponentFixture<AxisBusinessGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AxisBusinessGraphComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AxisBusinessGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
