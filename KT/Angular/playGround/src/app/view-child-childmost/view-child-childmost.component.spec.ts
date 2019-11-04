import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildChildmostComponent } from './view-child-childmost.component';

describe('ViewChildChildmostComponent', () => {
  let component: ViewChildChildmostComponent;
  let fixture: ComponentFixture<ViewChildChildmostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewChildChildmostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChildChildmostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
