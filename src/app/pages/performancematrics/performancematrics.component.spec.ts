import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformancematricsComponent } from './performancematrics.component';

describe('PerformancematricsComponent', () => {
  let component: PerformancematricsComponent;
  let fixture: ComponentFixture<PerformancematricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PerformancematricsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerformancematricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
