import { NgTemplateOutlet } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Popover } from '@app/views/_components/popover/popover.component';
import { A16Service } from '@app/views/games/A16/_services/a16.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
    templateUrl: 'a16-property.component.html',
    selector: 'a16-property',
    imports: [...CommonImports, Popover, NgTemplateOutlet]
})
export class A16PropertyComponent extends SingleComponent {
  protected a16service = inject(A16Service);

  changeData() {
    this.gameService(this.a16service, 'properties');
    return this.a16service.getProperty(this.slug, this.language);
  }
  override afterAssignment(): void {
    this.genericSettings(this.data.name, this.data.desc,
      this.a16service.properties_translation[this.language],
      false,
      this.inputSlug ? false : true);
  }
}