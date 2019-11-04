import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding, Input } from "@angular/core";

@Directive({
    selector: '[basicHighlight]'
})

export class BasicHighlight implements OnInit {
    constructor(private elRef: ElementRef, private renderer: Renderer2) { }
    @Input() defaultColor: any;

    @HostBinding('style.backgroundColor') backgroundColor: any;

    @HostListener('mouseenter') mouseenter() {
        //Either renderer or hostbinding
        this.renderer.setStyle(this.elRef.nativeElement, 'color', 'purple')
        this.renderer.setStyle(this.elRef.nativeElement, 'fontWeight', 'bold')
        // this.backgroundColor = '#e2e2e2'
        this.backgroundColor = this.defaultColor
    }

    @HostListener('mouseleave') mouseleave() {
        this.renderer.setStyle(this.elRef.nativeElement, 'textDecoration', 'underline')
        this.renderer.setStyle(this.elRef.nativeElement, 'color', 'pink')
        this.backgroundColor = 'unset'
    }

    ngOnInit() {
        // this.elRef.nativeElement.style.color = 'red'
        // this.elRef.nativeElement.style.fontWeight = 'bold'

        //this.renderer.setStyle(this.elRef.nativeElement, 'color', 'purple')
        //this.renderer.setStyle(this.elRef.nativeElement, 'fontWeight', 'bold')
    }
}