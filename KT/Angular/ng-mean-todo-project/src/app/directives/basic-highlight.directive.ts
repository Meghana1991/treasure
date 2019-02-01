import { Directive, ElementRef, OnInit } from '@angular/core';
import { element } from '@angular/core/src/render3';

@Directive({
    selector: '[basicHighlight]' // attribute based
    // selector    :   'basic-highlight' //Element based
})

export class BasicHighlightDirective implements OnInit {
    constructor(private elementRef: ElementRef) {
    }

    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
}