import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[betterHighlightThree]'
})

export class BetterHighlightDirective3 implements OnInit {
    /**
     * Renderer can be used but also as alternative you can use 
     * Host binding as well
     */
    @Input() defaultColor: string;
    @Input('mouseOver') hoverColor: string;

    @HostBinding('style.backgroundColor') background: string = this.defaultColor;
    constructor(private elRef: ElementRef, private renderer: Renderer2) {

    }
    ngOnInit() {
    }

    @HostListener('mouseenter') mouseEnterFn(eventFromDOMElement: Event) {
        this.background = this.hoverColor;
    }

    @HostListener('mouseleave') mouseLeaveFn(eventFromDOMElement: Event) {
        this.background = this.defaultColor;
    }
}