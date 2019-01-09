import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'appsecond',
    templateUrl: './second.component.html',
    //   styleUrls: ['./second.component.css']
})

export class AppSecondComponent implements OnInit {
    @Input() public ops: any;

    public ngOnInit() {
        console.log(this.ops);
    }
}
