import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Property } from '@app/interfaces/a16';
import { A16Service } from '@app/services/a16.service';
import { SeoService } from '@app/services/seo.service';

@Component({
  templateUrl: 'a16-property.component.html',
  selector: 'a16-property',
})
export class A16PropertyComponent implements OnInit {

  loading = false;
  submitted = false;
  returnUrl: string;
  error: string = '';
  property: Property;
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
    private a16service: A16Service,
    private seoService: SeoService) {
      if(this.route.snapshot.params.property != null) {
      this.slugname = this.route.snapshot.params.property;
    }
  }
  ngOnInit(): void {
    this.language = this.route.snapshot.params.language;
    if(this.showNav) {
      this.colset = "col-md-5 mx-auto "
    }
    this.a16service.getProperty(this.slugname, this.language)
    .subscribe({next: property => {
      this.property = property;
      this.gameTitle = this.a16service.gameTitle[this.language];
      this.gameURL = this.a16service.gameURL;
      this.imgURL = this.a16service.imgURL;

      this.seoURL = `${this.gameURL}/properties/${this.property.slugname}/${this.language}`;
      this.seoTitle = `${this.property.name} - ${this.gameTitle}`;
      this.seoDesc = `${this.property.desc}`
      this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
    },
    error: error => {
      this.error =`${error.status}`;
    }});
  }
} 