import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalScaleComponent } from './final-scale.component';

describe('FinalScaleComponent', () => {
  let component: FinalScaleComponent;
  let fixture: ComponentFixture<FinalScaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinalScaleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinalScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
