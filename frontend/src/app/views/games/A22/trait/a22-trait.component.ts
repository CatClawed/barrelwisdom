import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from '@app/services/seo.service';
import { Trait } from '@app/views/games/A22/_services/a22.interface';
import { A22Service } from '@app/views/games/A22/_services/a22.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a22-trait.component.html',
  selector: 'a22-trait',
})
export class A22TraitComponent extends SingleComponent implements OnInit {
  trait: Trait;

  constructor(
    protected route: ActivatedRoute,
    private a22service: A22Service,
    protected seoService: SeoService) {
    super(route, seoService);
    this.gameService(this.a22service);
  }
  ngOnInit(): void {
    if (this.showNav) this.colset = "col-md-5 mx-auto "
    this.a22service.getTrait(this.slug, this.language)
      .subscribe({
        next: trait => {
          this.trait = trait;
          this.seoURL = `${this.gameURL}/traits/${this.trait.slug}/${this.language}`;
          this.seoTitle = `${this.trait.name} - ${this.gameTitle}`;
          this.seoDesc = `${this.trait.desc}`;
          this.seoImage = ``;
          this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
} 