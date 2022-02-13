import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Trait } from '@app/interfaces/a22';
import { A22Service } from '@app/services/a22.service';
import { SeoService } from '@app/services/seo.service';

@Component({
  templateUrl: 'a22-trait.component.html',
  selector: 'a22-trait',
})
export class A22TraitComponent implements OnInit {

  loading = false;
  submitted = false;
  returnUrl: string;
  error: string = '';
  trait: Trait;
  colset: string;

  seoTitle: string;
  seoDesc: string;
  seoImage: string;
  seoURL: string;

  gameTitle: string;
  gameURL: string;
  imgURL: string;

  @Input()
  slug: string = "";

  @Input()
  showNav: boolean = true;

  language = "";

  constructor(
    private route: ActivatedRoute,
    private a22service: A22Service,
    private seoService: SeoService) {
      if(this.route.snapshot.params.trait != null) {
      this.slug = this.route.snapshot.params.trait;
    }
  }
  ngOnInit(): void {
    this.language = this.route.snapshot.params.language;
    if(this.showNav) {
      this.colset = "col-md-5 mx-auto "
    }
    this.a22service.getTrait(this.slug, this.language)
    .subscribe({next: trait => {
      this.trait = trait;
      this.gameTitle = this.a22service.gameTitle[this.language];
      this.gameURL = this.a22service.gameURL;
      this.imgURL = this.a22service.imgURL;
      
      this.seoURL = `${this.gameURL}/traits/${this.trait.slug}/${this.language}`;
      this.seoTitle = `${this.trait.name} - ${this.gameTitle}`;
      this.seoDesc = `${this.trait.desc}`;
      this.seoImage = ``;
      this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
    },
    error: error => {
      this.error =`${error.status}`;
    }});
  }
} 