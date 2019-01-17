import { Component, OnInit, OnChanges, Input, SimpleChange, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-child4',
  templateUrl: './child4.component.html',
  styleUrls: ['./child4.component.css']
})
export class Child4Component implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input('choice') somedata: any;
  @ViewChild('divTag') divTag: ElementRef;
  @ContentChild('contentRef') contentReference: ElementRef;

  constructor() {
    console.log('Constructor called')
  }

  /**
   * This is the only hook which recieves an argument
   */
  ngOnChanges(changes: SimpleChanges) {
    /**
     * Triggered whenever there is change in the @Input which means
     * @Input is coming as input to the child component from parent componen
     * But ideally both of the child and parent variable which is communicated between them are pointing to same location in the memory
     * Hence, any change in the parent variable will trigger child's ngOnChanges because the variable is sent to the child component
     * Example - choice which is somedata coming from parent component, if choice is changed in the parents component then the child ngOnChanges is triggered.
     */
    console.log('ngOnChanges called')
    console.log(changes)
  }

  ngOnInit() {
    console.log('ngOnInit called')
  }

  ngDoCheck() {
    console.log('ngDoCheck called')
  }

  /**
   * This is called once the ng-content is loaded
   */
  ngAfterContentInit() {
    console.log('ngAfterContentInit called')
    console.log('Text Content Content Child- ' + this.contentReference.nativeElement.textContent)
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called')
  }

  /**
   * This called after view is rendered with content
   */
  ngAfterViewInit() {
    console.log('ngAfterViewInit called')
    /**
     * Once the view is rendered, this viewchild element can be accessed
     * The below line in ngOnInit gives empty as view is not rendered
     */
    console.log('Text Content - ' + this.divTag.nativeElement.textContent)
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called')
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called')
  }

  doCheck() { }
}