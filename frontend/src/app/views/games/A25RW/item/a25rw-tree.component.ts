import { NgTemplateOutlet } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Tree } from '@app/views/games/A25RW/_services/a25rw.interface';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';

@Component({
  standalone: true,
  templateUrl: 'a25rw-tree.component.html',
  selector: 'a25rw-tree',
  imports: [...CommonImports, NgTemplateOutlet],
})
export class A25RWTreeComponent {
  @Input() tree: Tree[];
  @Input() gameURL: string;
  @Input() language: string;
  @Input() imgURL: string;
  max_width: number = 640;

  getColumns():  number {
    for (let i = 0; i <= 5; i++){
      if (this.tree[i].row != 1) {
        this.max_width = 120 * i + 10 * (i-1)
        return i;
      }
    }
    return 5;
  }
}