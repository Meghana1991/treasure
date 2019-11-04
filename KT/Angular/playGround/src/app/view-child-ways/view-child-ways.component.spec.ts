import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildWaysComponent } from './view-child-ways.component';

describe('ViewChildWaysComponent', () => {
  let component: ViewChildWaysComponent;
  let fixture: ComponentFixture<ViewChildWaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewChildWaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChildWaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
