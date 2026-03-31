import { Component, inject } from '@angular/core';
import { A26Service } from '@app/views/games/A26/_services/a26.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';
import { A26MapComponent } from '../map/a26-map.component';

@Component({
    template: `
    @if (data) {
        <h1>{{language == 'en' ? data.name + " Map" : data.name}}</h1>
        <p>A map to ease your suffering. There are 50 Treasure Troves and 50 keys.</p>
        @defer {
          <a26-map [data]="data.location" [tracker]="true"></a26-map>
        }
    }
    `,
    imports: [...CommonImports, A26MapComponent]
})

export class A26TreasureTroveComponent extends SingleComponent {
  protected a26service = inject(A26Service);
  changeData() {
    this.gameService(this.a26service, 'treasure-trove-key-locations');
    return this.a26service.getItem("392", this.language);
  }

  override afterAssignment(): void {

    this.genericSettings(`${this.language == 'en' ? this.data.name + " Map" : this.data.name}`, "A map to ease your suffering. There are 50 Treasure Troves and 50 keys.");
  }
}