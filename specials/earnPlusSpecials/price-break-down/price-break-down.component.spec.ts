import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceBreakDownComponent } from './price-break-down.component';

describe('PriceBreakDownComponent', () => {
  let component: PriceBreakDownComponent;
  let fixture: ComponentFixture<PriceBreakDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceBreakDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceBreakDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
