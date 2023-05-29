import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PnrDetailsComponent } from './pnr-details.component';

describe('PnrDetailsComponent', () => {
  let component: PnrDetailsComponent;
  let fixture: ComponentFixture<PnrDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PnrDetailsComponent]
    });
    fixture = TestBed.createComponent(PnrDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
