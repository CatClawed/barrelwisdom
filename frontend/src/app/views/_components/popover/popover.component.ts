import { ConnectionPositionPair, OverlayModule } from '@angular/cdk/overlay';
import { NgTemplateOutlet } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';

// TODO: Fix fake link style to appear as real link. adding 'wtf' fixes wut.

@Component({
  selector: 'popover',
  templateUrl: 'popover.component.html',
  styleUrl: 'popover.component.scss',
  standalone: true,
  imports: [OverlayModule, NgTemplateOutlet],
})
export class Popover {
  isOpen = false;
  noRun = false;

  @Input()
  title?: string;

  @Input()
  url?: string;

  @Input()
  template: TemplateRef<any>;

  @Input()
  context?: any = {};

  @Input()
  cls?: string = '';

  @Input()
  display?: string = 'inherit'

  toggle() {
    if (!this.noRun) {
      this.isOpen = !this.isOpen;
    }
  }

  // without the timer we get a double toggle that reopens the popover
  timeToggle() {
    this.isOpen = false;
    this.noRun = true;
    setTimeout(() => {
      this.noRun = false;
    }, 5)

  }
}