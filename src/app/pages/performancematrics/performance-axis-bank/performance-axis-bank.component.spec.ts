import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceAxisBankComponent } from './performance-axis-bank.component';

describe('PerformanceAxisBankComponent', () => {
  let component: PerformanceAxisBankComponent;
  let fixture: ComponentFixture<PerformanceAxisBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PerformanceAxisBankComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerformanceAxisBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
