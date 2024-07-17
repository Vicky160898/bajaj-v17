import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersistencyComponent } from './persistency.component';

describe('PersistencyComponent', () => {
  let component: PersistencyComponent;
  let fixture: ComponentFixture<PersistencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersistencyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersistencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
