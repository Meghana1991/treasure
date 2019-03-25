import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceBreakDownListComponent } from './price-break-down-list.component';

describe('PriceBreakDownListComponent', () => {
  let component: PriceBreakDownListComponent;
  let fixture: ComponentFixture<PriceBreakDownListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceBreakDownListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceBreakDownListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
