import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { DestroyService } from '@app/services/destroy.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';

@Component({
  templateUrl: 'effect.component.html',
  selector: 'effect',
  providers: [DestroyService],
  standalone: true,
  imports: [...CommonImports, MatIcon, MatButtonModule]
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
  language: string;

  @Input()
  small: boolean = false;
} 