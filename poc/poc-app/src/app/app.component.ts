import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Fleet Charts POC';
  view: any[] = [1000, 150];
  pieView: any[] = [400, 200];
  plotObj = {
    name: '',
    series: '',
    value: ''
  }
  pieSingle = [{
    "name": "ENGINE",
    "value": 8940000
  },
  {
    "name": "PACKAGE",
    "value": 5000000
  }]

  multi = [
    {
      "name": "Unit 1",
      "series": [
        {
          "name": "Risk 2",
          "value": 1000
        },
        {
          "name": "Risk 1",
          "value": 5000
        },
        {
          "name": "Risk 3",
          "value": 4000
        },
        {
          "name": "Risk 4",
          "value": 8000
        },
        {
          "name": "Risk 5",
          "value": 6000
        }
      ]
    },

    {
      "name": "Unit 2",
      "series": [
        {
          "name": "Risk 2",
          "value": 3000
        },
        {
          "name": "Risk 1",
          "value": 6000
        },
        {
          "name": "Risk 3",
          "value": 7000
        }
      ]
    },

    {
      "name": "Unit 3",
      "series": [
        {
          "name": "Risk 2",
          "value": 5000
        },
        {
          "name": "Risk 1",
          "value": 2000
        },
        {
          "name": "Risk 3",
          "value": 4000
        },
        {
          "name": "Risk 4",
          "value": 8000
        }
      ]
    },

    {
      "name": "Unit 4",
      "series": [
        {
          "name": "Risk 4",
          "value": 6000
        },
        {
          "name": "Risk 1",
          "value": 2000
        },
        {
          "name": "Risk 2",
          "value": 4000
        },
        {
          "name": "Risk 4",
          "value": 8000
        }
      ]
    }
  ];

  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = false;
  showYAxisLabel = false;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  closeResult: string;

  constructor(private modalService: NgbModal) {
    // Object.assign(this, { single })
  }

  open(content, event, some, some1) {
    this.plotObj = {
      name: event.name,
      series: event.series,
      value: event.value
    }
    console.log(some)
    console.log(some1)
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  onPieSelect(event) {
    console.log("pie")
  }
}
