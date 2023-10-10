import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Trait } from '@app/views/games/A25/_services/a25.interface';
import { A25Service } from '@app/views/games/A25/_services/a25.service';
import { SeoService } from '@app/services/seo.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a25-trait.component.html',
  selector: 'a25-trait',
})
export class A25TraitComponent extends SingleComponent implements OnInit {
  trait: Trait;

  constructor(
    protected route: ActivatedRoute,
    protected seoService: SeoService,
    private a25service: A25Service,) {
    super(route, seoService);
    this.gameService(this.a25service, 'traits');
  }

  ngOnInit(): void {
    if (this.showNav) this.colset = "col-md-5 mx-auto ";
    this.a25service.getTrait(this.slug, this.language)
      .subscribe({
        next: trait => {
          this.trait = trait;
          if (this.language == "en") {
            this.genericSEO(this.trait.name_en, this.trait.desc);
          }
          else {
            this.genericSEO(this.trait.name_ja, this.trait.desc);
          }
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
} 