import { Component, Input } from '@angular/core';

@Component({
  templateUrl: '404.component.html',
  selector: 'Error'
})
export class P404Component {

  @Input()
  errorCode: string = '404'

  @Input()
  errorVars: any = ["Oops! You're lost.", "Our puni told us that the page you're looking for doesn't exist.", true];
  
  constructor() {
  }

}