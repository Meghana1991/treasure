import { Directive, ElementRef, OnInit, Renderer2, HostListener } from '@angular/core';
import { Renderer3 } from '@angular/core/src/render3/interfaces/renderer';

@Directive({
    selector: '[betterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
    constructor(private elRef: ElementRef, private renderer: Renderer2) {

    }
    ngOnInit() {
        // this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');
    }

    /**
     * If you want to observe the events happening in the element where directive is placed then use hostlistener
     * Mention the event to be observed and also collect the event data into some custom function
     */
    @HostListener('mouseenter') mouseEnterFn(eventFromDOMElement: Event){
        this.renderer.setStyle(this.elRef.nativeElement,'background-color','transparent');
    }

    @HostListener('mouseleave') mouseLeaveFn(eventFromDOMElement: Event){
        this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');
    }
}