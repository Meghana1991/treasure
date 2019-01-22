import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[betterHighlightTwo]'
})

export class BetterHighlightDirective2 implements OnInit {
    /**
     * Renderer can be used but also as alternative you can use 
     * Host binding as well
     */
    @HostBinding('style.backgroundColor') background: string = "purple";
    constructor(private elRef: ElementRef, private renderer: Renderer2) {

    }
    ngOnInit() {
    }

    @HostListener('mouseenter') mouseEnterFn(eventFromDOMElement: Event){
        this.background = "green";
    }

    @HostListener('mouseleave') mouseLeaveFn(eventFromDOMElement: Event){
        this.background = "yellow";
    }
}