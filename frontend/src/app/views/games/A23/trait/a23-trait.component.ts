import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Trait } from '@app/interfaces/a23';
import { A23Service } from '@app/services/a23.service';
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
    private seoService: SeoService,
    private a23service: A23Service,) {
    super(route);
    this.gameService(this.a23service);
  }

  ngOnInit(): void {
    if (this.showNav) this.colset = "col-md-5 mx-auto ";
    this.a23service.getTrait(this.slug, this.language)
      .subscribe({
        next: trait => {
          this.trait = trait;
          this.seoURL = `${this.gameURL}/traits/${this.trait.slug}/${this.language}`;
          this.seoTitle = `${this.trait.name} - ${this.gameTitle}`;
          this.seoDesc = `${this.trait.desc}`;
          this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
} 