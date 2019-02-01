import { Component } from '@angular/core';

import { UserService } from './users.service';

@Component({
  selector: 'app-assignment-solution',
  templateUrl: './assignment-solution.component.html',
  styleUrls: ['./assignment-solution.component.css'],
  providers: [UserService]
})
export class AssignmentSolutionComponent {
}
