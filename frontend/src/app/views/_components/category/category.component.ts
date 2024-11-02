import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';

@Component({
  templateUrl: 'category.component.html',
  selector: 'category',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [...CommonImports]
})
export class CategoryComponent {

  @Input()
  name: string;

  @Input()
  using: boolean = false;

  @Input()
  colspan: number = 1;

}