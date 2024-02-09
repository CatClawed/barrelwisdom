import { Component, Input } from '@angular/core';

import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  templateUrl: 'breadcrumb.component.html',
  selector: 'Breadcrumb',
  imports: [RouterModule]
})
export class BreadcrumbComponent {

  @Input()
  breadcrumbs = [];

  @Input()
  current = "";

}