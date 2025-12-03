import { NgTemplateOutlet } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { A25Service } from '@app/views/games/A25/_services/a25.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
    templateUrl: 'a25-trait.component.html',
    selector: 'a25-trait',
    imports: [...CommonImports, NgTemplateOutlet]
})
export class A25TraitComponent extends SingleComponent {
  protected a25service = inject(A25Service);
  @Output() charClicked = new EventEmitter<string>();

  @Output() itemClicked = new EventEmitter<string>();

  changeData() {
    this.gameService(this.a25service, 'traits');
    return this.a25service.getTrait(this.slug, this.language)
  }

  override afterAssignment(): void {
    this.genericSettings(this.data.name,
      this.data.desc.replaceAll('{0}', this.data.val[0] + ' ~ ' + this.data.val[4]),
      this.a25service.trait_translation[this.language],
      false,
      this.inputSlug ? false : true);
  }
}