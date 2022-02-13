import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemFull } from '@app/interfaces/a15';
import { A15Service } from '@app/services/a15.service';
import { SeoService } from '@app/services/seo.service';

@Component({
  templateUrl: 'a15-item.component.html',
  selector: 'a15-item',
})
export class A15ItemComponent implements OnInit {

  loading = false;
  submitted = false;
  returnUrl: string;
  error: string = '';
  item: ItemFull;
  colset: string;
  fire = false;
  water = false;
  wind = false;
  earth = false;

  @Input()
  slugname: string = "";

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
    private a15service: A15Service,
    private seoService: SeoService) {
      if(this.route.snapshot.params.item != null) {
      this.slugname = this.route.snapshot.params.item;
    }
  }
  ngOnInit(): void {
    this.language = this.route.snapshot.params.language;
    if (this.showNav) {
      this.colset = "col-md-9 mx-auto "
    }

    this.a15service.getItem(this.slugname, this.language)
      .subscribe({next: item => {
        this.error =``;
        this.item = item;

        this.gameTitle = this.a15service.gameTitle[this.language];
        this.gameURL = this.a15service.gameURL;
        this.imgURL = this.a15service.imgURL;

        this.seoURL = `${this.gameURL}/items/${this.item.slugname}/${this.language}`;
        this.seoTitle = `${this.item.name} - ${this.gameTitle}`;
        this.seoDesc = `${this.item.desc}`
        this.seoImage = `${this.imgURL}items/${this.item.slugname}.webp`
        this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);

        if (this.item.effectline_set) {
          for (let eff of this.item.effectline_set) {
            switch(eff.elem) {
              case "fire":
                this.fire = true;
                break;
              case "water":
                this.water = true;
                break;
              case "wind":
                this.wind = true;
                break;
              case "earth":
                this.earth = true;
                break;
            }
          }
        }
      },
        error: error => {
          this.error =`${error.status}`;
        }});
  }
} 