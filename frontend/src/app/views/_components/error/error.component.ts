import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '@app/services/breadcrumb.service';

@Component({
  standalone: true,
  template: ''
})
export class ErrorComponent implements OnInit {
  constructor(
    protected breadcrumbService: BreadcrumbService) { }

  ngOnInit(): void {
    this.breadcrumbService.setStatus(404)
  }
}