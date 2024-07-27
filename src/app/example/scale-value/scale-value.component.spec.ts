import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaleValueComponent } from './scale-value.component';

describe('ScaleValueComponent', () => {
  let component: ScaleValueComponent;
  let fixture: ComponentFixture<ScaleValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScaleValueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScaleValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
