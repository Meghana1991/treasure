import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropDown]'
})
export class DropDownDirective {
  @HostBinding('style.color') color = 'orange';
  @HostListener('click') addClassToEl() {
    this.color = 'green'
  }
  constructor() { }
}