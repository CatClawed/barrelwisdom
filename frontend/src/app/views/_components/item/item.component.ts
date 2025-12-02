import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';

@Component({
    templateUrl: 'item.component.html',
    selector: 'item',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [...CommonImports, MatButtonModule]
})
export class ItemComponent {
  @Input() item: any;
  @Input() hideButton: boolean = false;
  @Output() buttonClicked = new EventEmitter<string>();
  @Input() url: string;
  @Input() imgURL: string;
  @Input() dimension: string;
  @Input() small: boolean = false;
}