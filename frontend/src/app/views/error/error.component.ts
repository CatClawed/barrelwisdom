import { Component, Input } from '@angular/core';
import { ErrorCodeService } from "@app/services/errorcode.service";
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  templateUrl: 'error.component.html',
  selector: 'Error',
  imports: [CommonModule]
})
export class ErrorComponent {

  @Input()
  errorCode: string = "404";

  errorVars: any = ["Oops! You're lost.", "Our puni told us that the page you're looking for doesn't exist."];
  
  constructor(private errorService: ErrorCodeService) {
    this.errorVars = this.errorService.getCodes(this.errorCode);
  }

}