import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildHolderComponent } from './view-child-holder.component';

describe('ViewChildHolderComponent', () => {
  let component: ViewChildHolderComponent;
  let fixture: ComponentFixture<ViewChildHolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewChildHolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChildHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
