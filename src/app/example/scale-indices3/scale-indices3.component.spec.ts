import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaleIndices3Component } from './scale-indices3.component';

describe('ScaleIndices3Component', () => {
  let component: ScaleIndices3Component;
  let fixture: ComponentFixture<ScaleIndices3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScaleIndices3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScaleIndices3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
