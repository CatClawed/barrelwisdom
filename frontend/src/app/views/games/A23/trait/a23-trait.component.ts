import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Trait } from '@app/views/games/A23/_services/a23.interface';
import { A23Service } from '@app/views/games/A23/_services/a23.service';
import { SeoService } from '@app/services/seo.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a23-trait.component.html',
  selector: 'a23-trait',
})
export class A23TraitComponent extends SingleComponent implements OnInit {
  trait: Trait;

  constructor(
    protected route: ActivatedRoute,
    protected seoService: SeoService,
    private a23service: A23Service,) {
    super(route, seoService);
    this.gameService(this.a23service, 'traits');
  }

  ngOnInit(): void {
    if (this.showNav) this.colset = "col-md-5 mx-auto ";
    this.a23service.getTrait(this.slug, this.language)
      .subscribe({
        next: trait => {
          this.trait = trait;
          this.genericSEO(this.trait.name, this.trait.desc);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
} 