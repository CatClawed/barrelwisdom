import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';

@Component({
    templateUrl: 'effect.component.html',
    selector: 'effect',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [...CommonImports, MatButtonModule]
})
export class EffectComponent {
  @Input()
  effect: any;

  @Input()
  hideContents: boolean = false;

  @Output()
  buttonClicked = new EventEmitter<string>();

  @Input()
  url: string;

  @Input()
  small: boolean = false;
}