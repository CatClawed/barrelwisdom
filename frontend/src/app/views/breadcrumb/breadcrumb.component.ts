import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  templateUrl: 'breadcrumb.component.html',
  selector: 'Breadcrumb',
  imports: [CommonModule, RouterModule]
})
export class BreadcrumbComponent {

  @Input()
  breadcrumbs = [];

  @Input()
  current = "";

}