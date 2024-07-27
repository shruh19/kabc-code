import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaleIndicesComponent } from './scale-indices.component';

describe('ScaleIndicesComponent', () => {
  let component: ScaleIndicesComponent;
  let fixture: ComponentFixture<ScaleIndicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScaleIndicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScaleIndicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
