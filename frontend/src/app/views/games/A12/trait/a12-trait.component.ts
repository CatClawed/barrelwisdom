import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Trait } from '@app/interfaces/a12';
import { A12Service } from '@app/services/a12.service';
import { SeoService } from '@app/services/seo.service';

@Component({
  templateUrl: 'a12-trait.component.html',
  selector: 'a12-trait',
})
export class A12TraitComponent implements OnInit {

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
  slugname: string = "";

  @Input()
  showNav: boolean = true;

  language = "";

  constructor(
    private route: ActivatedRoute,
    private a12service: A12Service,
    protected seoService: SeoService) {
      if(this.route.snapshot.params.trait != null) {
      this.slugname = this.route.snapshot.params.trait;
    }
  }
  ngOnInit(): void {
    this.language = this.route.snapshot.params.language;
    if(this.showNav) {
      this.colset = "col-md-5 mx-auto "
    }
    this.a12service.getTrait(this.slugname, this.language)
    .subscribe({next: trait => {
      this.trait = trait;
      this.gameTitle = this.a12service.gameTitle[this.language];
      this.gameURL = this.a12service.gameURL;
      this.imgURL = this.a12service.imgURL;

      this.seoURL = `${this.gameURL}/traits/${this.trait.slugname}/${this.language}`;
      this.seoTitle = `${this.trait.name} - ${this.gameTitle}`;
      this.seoDesc = `${this.trait.desc}`
      this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
    },
    error: error => {
      this.error =`${error.status}`;
    }});
  }
} 