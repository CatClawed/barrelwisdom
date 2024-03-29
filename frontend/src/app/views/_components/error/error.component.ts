import { Component, Input, OnInit } from '@angular/core';

@Component({
  standalone: true,
  templateUrl: 'error.component.html',
  selector: 'Error',
  imports: []
})
export class ErrorComponent implements OnInit {

  @Input()
  errorCode: string = '404';

  errorTitle: string;
  errorDescription: string;

  ngOnInit(): void {
    if (this.errorCode === '404') {
      this.errorTitle = "Oops! You're lost.";
      this.errorDescription = "Our puni told us that the page you're looking for doesn't exist.";
    }
    else {
      this.errorTitle = "The server puni died.";
      this.errorDescription = "We'll replace that puni soon. The site is either broken or under maintenance.";
    }
  }
}
