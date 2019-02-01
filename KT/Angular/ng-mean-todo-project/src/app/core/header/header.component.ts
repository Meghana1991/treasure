import { Component, Output,EventEmitter } from "@angular/core";

@Component({
    selector: 'header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {
    // @Output() customEmitter = new EventEmitter;
    // public displayPage(page) {
    //     if (page == 'recipe') {
    //         this.customEmitter.emit('recipe')
    //     }else if(page == 'shopping'){
    //         this.customEmitter.emit('shopping')
    //     }
    // }
}