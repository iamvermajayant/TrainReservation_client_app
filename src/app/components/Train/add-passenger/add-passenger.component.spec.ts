import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPassengerComponent } from './add-passenger.component';

describe('AddPassengerComponent', () => {
  let component: AddPassengerComponent;
  let fixture: ComponentFixture<AddPassengerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPassengerComponent]
    });
    fixture = TestBed.createComponent(AddPassengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
