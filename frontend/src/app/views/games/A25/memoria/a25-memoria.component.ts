import { Component, inject } from '@angular/core';
import { A25Service } from '@app/views/games/A25/_services/a25.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
    templateUrl: 'a25-memoria.component.html',
    selector: 'a25-memoria',
    imports: [...CommonImports]
})
export class A25MemoriaComponent extends SingleComponent {
  protected a25service = inject(A25Service);
  rarity = {
    1: "R",
    2: "SR",
    3: "SSR"
  }

  changeData() {
    this.gameService(this.a25service, 'memoria');
    return this.a25service.getMemoria(this.slug, this.language)
  }
  override afterAssignment(): void {
    this.seoImage = `${this.imgURL}memoria/${this.data.slug}.webp`
    this.genericSettings(this.data.name, this.data.skill_desc.replaceAll('{0}', this.data.lv1 + ' ~ ' + this.data.lv5).replaceAll('{1}', this.data.lv1 + ' ~ ' + this.data.lv5), this.a25service.memoria_translation[this.language], false, this.inputSlug ? false : true);
  }

}