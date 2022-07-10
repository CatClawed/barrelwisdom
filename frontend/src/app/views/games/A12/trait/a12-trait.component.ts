import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Trait } from '@app/views/games/A12/_services/a12.interface';
import { A12Service } from '@app/views/games/A12/_services/a12.service';
import { SeoService } from '@app/services/seo.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a12-trait.component.html',
  selector: 'a12-trait',
})
export class A12TraitComponent extends SingleComponent implements OnInit {
  trait: Trait;

  constructor(
    protected route: ActivatedRoute,
    private a12service: A12Service,
    protected seoService: SeoService) {
    super(route, seoService);
    this.gameService(this.a12service, 'traits');
  }
  ngOnInit(): void {
    if (this.showNav) this.colset = "col-md-5 mx-auto ";
    this.a12service.getTrait(this.slug, this.language)
    .subscribe({next: trait => {
      this.error = ``;
      this.trait = trait;
      this.genericSEO(this.trait.name, this.trait.desc);
    },
    error: error => {
      this.error =`${error.status}`;
    }});
  }
} 