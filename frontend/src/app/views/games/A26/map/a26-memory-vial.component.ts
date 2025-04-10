import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from '@app/services/breadcrumb.service';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { A26Service } from '@app/views/games/A26/_services/a26.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';
import { A26MapComponent } from './a26-map.component';

@Component({
    template: `
    @if (data) {
        <h1>{{title}}</h1>
        <p>Need help with Pioneering in Sivash? Want to just collect them all?
          This map shows all non-story vials.</p>
        @defer {
          <a26-map [data]="data" [tracker]="true"></a26-map>
        }
    }
    `,
    providers: [DestroyService],
    imports: [...CommonImports, A26MapComponent]
})
export class A26MemoryVialComponent extends SingleComponent {
  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    protected seoService: SeoService,
    protected breadcrumbService: BreadcrumbService,
    protected a26service: A26Service) {
    super(destroy$, route, breadcrumbService, seoService);
    this.title = this.a26service.memoryVialString[this.language]
  }

  title: string;

  changeData() {
    this.gameService(this.a26service, 'memory-vial-locations');
    this.title = this.a26service.memoryVialString[this.language]
    return this.a26service.getMemoryVials()
  }

  afterAssignment(): void {
    this.genericSettings(this.title, `Need help with Pioneering in Sivash? Want to just collect them all?`, '', true);
  }
}