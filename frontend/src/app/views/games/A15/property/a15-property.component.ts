import { NgTemplateOutlet } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Popover } from '@app/views/_components/popover/popover.component';
import { A15Service } from '@app/views/games/A15/_services/a15.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
    templateUrl: 'a15-property.component.html',
    selector: 'a15-property',
    imports: [...CommonImports, Popover, NgTemplateOutlet]
})
export class A15PropertyComponent extends SingleComponent {
  protected a15service = inject(A15Service);

  changeData() {
    this.gameService(this.a15service, 'properties');
    return this.a15service.getProperty(this.slug, this.language);
  }
  override afterAssignment(): void {
    this.genericSettings(this.data.name, this.data.desc,
      this.a15service.properties_translation[this.language],
      false,
      this.inputSlug ? false : true);
  }
}