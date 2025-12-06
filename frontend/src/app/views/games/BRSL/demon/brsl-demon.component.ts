import { NgTemplateOutlet } from '@angular/common';
import { Component, inject } from '@angular/core';
import { BRSLService } from '@app/views/games/BRSL/_services/brsl.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
    templateUrl: 'brsl-demon.component.html',
    selector: 'brsl-demon',
    imports: [...CommonImports, NgTemplateOutlet]
})
export class BRSLDemonComponent extends SingleComponent {
  protected brslservice = inject(BRSLService);

  changeData() {
    this.gameService(this.brslservice, 'demons');
    return this.brslservice.getDemon(this.slug, this.language);
  }

  override afterAssignment(): void {
    this.seoImage = `${this.imgURL}${this.section}/${this.data.slug}.webp`
    this.genericSettings(this.data.name, this.data.desc,
      'Demons',
      false,
      this.inputSlug ? false : true);
  }
}