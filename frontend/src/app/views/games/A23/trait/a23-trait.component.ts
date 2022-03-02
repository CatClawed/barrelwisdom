import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Trait } from '@app/interfaces/a23';
import { A23Service } from '@app/services/a23.service';
import { SeoService } from '@app/services/seo.service';

@Component({
  templateUrl: 'a23-trait.component.html',
  selector: 'a23-trait',
})
export class A23TraitComponent implements OnInit {

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
    private a23service: A23Service,
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
    this.a23service.getTrait(this.slug, this.language)
    .subscribe({next: trait => {
      this.trait = trait;
      this.gameTitle = this.a23service.gameTitle[this.language];
      this.gameURL = this.a23service.gameURL;
      this.imgURL = this.a23service.imgURL;
      
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