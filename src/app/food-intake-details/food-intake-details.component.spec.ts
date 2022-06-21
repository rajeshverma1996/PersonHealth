import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodIntakeDetailsComponent } from './food-intake-details.component';

describe('FoodIntakeDetailsComponent', () => {
  let component: FoodIntakeDetailsComponent;
  let fixture: ComponentFixture<FoodIntakeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodIntakeDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodIntakeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
