import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmpUserInformationComponent } from './smp-user-information.component';

describe('SmpUserInformationComponent', () => {
  let component: SmpUserInformationComponent;
  let fixture: ComponentFixture<SmpUserInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmpUserInformationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SmpUserInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
