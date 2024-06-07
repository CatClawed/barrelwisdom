import { ConnectionPositionPair, OverlayModule } from '@angular/cdk/overlay';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'popover',
  templateUrl: 'popover.component.html',
  styleUrl: 'popover.component.scss',
  standalone: true,
  imports: [OverlayModule],
})
export class Popover {
  isOpen = false;
  noRun = false;

  @Input()
  title?: string;

  // TODO: letting X be centered can cause the left offset to be negative
  // but dang I like the centered look
  positionPairs: ConnectionPositionPair[] = [
    {
      originX: 'start',
      originY: 'top',
      overlayX: 'start',
      overlayY: 'bottom'
    },
    {
      originX: 'start',
      originY: 'bottom',
      overlayX: 'start',
      overlayY: 'top'
    },
    {
      originX: 'end',
      originY: 'top',
      overlayX: 'end',
      overlayY: 'bottom'
    },
    {
      originX: 'end',
      originY: 'bottom',
      overlayX: 'end',
      overlayY: 'top'
    },
  ];

  toggle() {
    if (!this.noRun) {
      this.isOpen = !this.isOpen;
    }
  }

  // without the timer we get a double toggle that reopens the popover
  seize() {
    this.isOpen = false;
    this.noRun = true;
    setTimeout(() => {
      this.noRun = false;
    }, 5)

  }
}