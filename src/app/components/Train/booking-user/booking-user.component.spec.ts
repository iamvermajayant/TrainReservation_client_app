import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingUserComponent } from './booking-user.component';

describe('BookingUserComponent', () => {
  let component: BookingUserComponent;
  let fixture: ComponentFixture<BookingUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingUserComponent]
    });
    fixture = TestBed.createComponent(BookingUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
