import { Component, Input } from '@angular/core';

@Component({
  templateUrl: 'breadcrumb.component.html',
  selector: 'Breadcrumb'
})
export class BreadcrumbComponent {

  @Input()
  breadcrumbs = [];

  @Input()
  current = "";
  
  constructor() {
  }

}