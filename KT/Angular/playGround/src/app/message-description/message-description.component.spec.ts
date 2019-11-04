import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageDescriptionComponent } from './message-description.component';

describe('MessageDescriptionComponent', () => {
  let component: MessageDescriptionComponent;
  let fixture: ComponentFixture<MessageDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
