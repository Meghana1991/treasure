import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialRelatedPortionComponent } from './material-related-portion.component';

describe('MaterialRelatedPortionComponent', () => {
  let component: MaterialRelatedPortionComponent;
  let fixture: ComponentFixture<MaterialRelatedPortionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialRelatedPortionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialRelatedPortionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
