import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemFull } from '@app/interfaces/a22';
import { A22Service } from '@app/services/a22.service';
import { SeoService } from '@app/services/seo.service';

@Component({
  templateUrl: 'a22-item.component.html',
  selector: 'a22-item',
})
export class A22ItemComponent implements OnInit {

  loading = false;
  submitted = false;
  returnUrl: string;
  error: boolean = false;
  errorCode: string;
  item: ItemFull;
  colset: string;
  default: any[] = [];
  eff1: any[] = [];
  eff2: any[] = [];
  eff3: any[] = [];
  eff4: any[] = [];

  @Input()
  slug: string = "";

  @Input()
  showNav: boolean = true;

  language = "";

  seoTitle: string;
  seoDesc: string;
  seoImage: string;
  seoURL: string;

  gameTitle: string;
  gameURL: string;
  imgURL: string;

constructor(
    private route: ActivatedRoute,
    private a22service: A22Service,
    private seoService: SeoService) {
      if(this.route.snapshot.params.item != null) {
      this.slug = this.route.snapshot.params.item;
    }
  }
  ngOnInit(): void {
    this.language = this.route.snapshot.params.language;
    if(this.showNav) {
      this.colset = "col-md-9 mx-auto "
    }
    this.a22service.getItem(this.slug, this.language)
    .subscribe({next: item => {
        this.error = false;
        this.item = item;

        this.gameTitle = this.a22service.gameTitle[this.language];
        this.gameURL = this.a22service.gameURL;
        this.imgURL = this.a22service.imgURL;

        this.seoURL = `${this.gameURL}/items/${this.item.slug}/${this.language}`;
        this.seoTitle = `${this.item.name} - ${this.gameTitle}`;
        this.seoDesc = `${this.item.desc}`
        this.seoImage = `${this.imgURL}items/${this.item.slug}.webp`
        this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);

        if(this.item.effectline_set) {
            if(this.item.effectline_set.length > 1) {
                let line = 0;
                for(let e of this.item.effectline_set) {
                    if(e.number == 0) {
                        this.default.push([e.name, e.slug]);
                        line = line+1;
                    }
                    if(line < e.line) {
                        line = line+1;
                        this.default.push([]);
                    }
                    if(e.number > 0) {
                        if(e.line == 1) { this.eff1.push([e.name, e.slug]); }
                        if(e.line == 2) { this.eff2.push([e.name, e.slug]); }
                        if(e.line == 3) { this.eff3.push([e.name, e.slug]); }
                        if(e.line == 4) { this.eff4.push([e.name, e.slug]); }
                    }
                }
            }
        }
    },
    error: error => {
      this.error = true;
      this.errorCode = `${error.status}`;
    }});
  }
} 