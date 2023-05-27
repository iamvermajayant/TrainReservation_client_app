import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTrainListComponent } from './display-train-list.component';

describe('DisplayTrainListComponent', () => {
  let component: DisplayTrainListComponent;
  let fixture: ComponentFixture<DisplayTrainListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayTrainListComponent]
    });
    fixture = TestBed.createComponent(DisplayTrainListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
