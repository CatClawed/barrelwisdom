import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  templateUrl: 'a25-icon.component.html',
  selector: 'a25-icon',
})
export class A25IconComponent {
  @Input()
  kind: string;

  @Input()
  colors: string[];
}