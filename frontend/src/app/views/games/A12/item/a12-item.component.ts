import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemFull } from '@app/interfaces/a12';
import { A12Service } from '@app/services/a12.service';
import { SeoService } from '@app/services/seo.service';

@Component({
  templateUrl: 'a12-item.component.html',
  selector: 'a12-item',
})
export class A12ItemComponent implements OnInit {

  loading = false;
  submitted = false;
  returnUrl: string;
  error: boolean = false;
  errorCode: string;
  item: ItemFull;
  colset: string;
  itemone = false;
  itemtwo = false;
  itemthree = false;

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
    private seoService: SeoService) {
      if(this.route.snapshot.params.item != null) {
      this.slugname = this.route.snapshot.params.item;
    }
  }
  ngOnInit(): void {
    this.language = this.route.snapshot.params.language;
    if(this.showNav) {
      this.colset = "col-md-9 mx-auto "
    }
    this.a12service.getItem(this.slugname, this.language)
    .subscribe({next: item => {
        this.error = false;
        this.item = item;

        if(this.item.effectline_set) {
         for(let effline of this.item.effectline_set) {
           if (effline.itemnum == 1) { this.itemone = true; }
           if (effline.itemnum == 2) { this.itemtwo = true; }
           if (effline.itemnum == 3) { this.itemthree = true; }
         }
        }

        this.gameTitle = this.a12service.gameTitle[this.language];
        this.gameURL = this.a12service.gameURL;
        this.imgURL = this.a12service.imgURL;

        this.seoURL = `${this.gameURL}/items/${this.item.slugname}/${this.language}`;
        this.seoTitle = `${this.item.name} - ${this.gameTitle}`;
        this.seoDesc = `${this.item.desc}`
        this.seoImage = `${this.imgURL}items/${this.item.slugname}.webp`
        this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
    },
    error: error => {
      this.error = true;
      this.errorCode = `${error.status}`;
    }});
  }
} 