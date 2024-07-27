import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaleIndices2Component } from './scale-indices2.component';

describe('ScaleIndices2Component', () => {
  let component: ScaleIndices2Component;
  let fixture: ComponentFixture<ScaleIndices2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScaleIndices2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScaleIndices2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
