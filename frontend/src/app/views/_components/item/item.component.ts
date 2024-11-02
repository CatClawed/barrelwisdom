import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';

@Component({
  templateUrl: 'item.component.html',
  selector: 'item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [...CommonImports, MatIcon, MatButtonModule]
})
export class ItemComponent {
  @Input()
  item: any;

  @Input()
  hideButton: boolean = false;

  @Output()
  buttonClicked = new EventEmitter<string>();

  @Input()
  url: string;

  @Input()
  imgURL: string;

  @Input()
  dimension: number;

  @Input()
  small: boolean = false;

}