import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Tooltip } from '@app/views/_components/tooltip/tooltip.component';
import { A18Service } from '@app/views/games/A18/_services/a18.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a18-trait.component.html',
  selector: 'a18-trait',
  providers: [DestroyService],
  standalone: true,
  imports: [...CommonImports, Tooltip]
})
export class A18TraitComponent extends SingleComponent {
  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    protected seoService: SeoService,
    private a18service: A18Service) {
    super(destroy$, route, seoService);
  }

  changeData() {
    this.gameService(this.a18service, 'traits');
    return this.a18service.getTrait(this.slug, this.language);
  }

  afterAssignment(): void {
    this.genericSEO(this.data.name, this.data.desc);
  }
} 