import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Trait } from '@app/views/games/A18/_services/a18.interface';
import { A18Service } from '@app/views/games/A18/_services/a18.service';
import { SeoService } from '@app/services/seo.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a18-trait.component.html',
  selector: 'a18-trait',
})
export class A18TraitComponent extends SingleComponent implements OnInit {
  trait: Trait;

  constructor(
    protected route: ActivatedRoute,
    protected seoService: SeoService,
    private a18service: A18Service,) {
    super(route, seoService);
    this.gameService(this.a18service, 'traits');
  }

  ngOnInit(): void {
    if (this.showNav) this.colset = "col-md-5 mx-auto ";
    this.a18service.getTrait(this.slug, this.language)
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