import { Component, Input } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
    selector: 'tooltip',
    templateUrl: 'tooltip.component.html',
    styleUrl: 'tooltip.component.scss',
    imports: [MatTooltipModule]
})
export class Tooltip {
  @Input()
  tip: string;
}