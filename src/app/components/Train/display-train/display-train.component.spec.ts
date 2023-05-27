import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTrainComponent } from './display-train.component';

describe('DisplayTrainComponent', () => {
  let component: DisplayTrainComponent;
  let fixture: ComponentFixture<DisplayTrainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayTrainComponent]
    });
    fixture = TestBed.createComponent(DisplayTrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
