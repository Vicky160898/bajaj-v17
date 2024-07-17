import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AxisBusinessDataComponent } from './axis-business-data.component';

describe('AxisBusinessDataComponent', () => {
  let component: AxisBusinessDataComponent;
  let fixture: ComponentFixture<AxisBusinessDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AxisBusinessDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AxisBusinessDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
