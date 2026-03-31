import { Component, signal } from '@angular/core';
import { LayoutComponent } from '@app/layout/layout';

@Component({
  selector: 'app-root',
  template: '<app-layout></app-layout>',
  imports: [LayoutComponent],
})

export class App {
  protected readonly title = signal('frontend');
}
