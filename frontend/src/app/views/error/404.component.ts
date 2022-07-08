import { Component, Input } from '@angular/core';
import { ErrorCodeService } from "@app/services/errorcode.service";

@Component({
  templateUrl: '404.component.html',
  selector: 'Error'
})
export class P404Component {

  @Input()
  errorCode: string = "404";

  @Input()
  errorVars: any = ["Oops! You're lost.", "Our puni told us that the page you're looking for doesn't exist."];
  
  constructor(private errorService: ErrorCodeService) {
    this.errorVars = this.errorService.getCodes(this.errorCode);
  }

}