import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DemonFull } from '@app/interfaces/brsl';
import { BRSLService } from '@app/services/brsl.service';
import { SeoService } from '@app/services/seo.service';

@Component({
  templateUrl: 'brsl-demon.component.html',
  selector: 'brsl-demon',
})
export class BRSLDemonComponent implements OnInit {

  loading = false;
  submitted = false;
  returnUrl: string;
  error: string = '';
  demon: DemonFull;
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
    private brslservice: BRSLService,
    private seoService: SeoService) {
      if(this.route.snapshot.params.demon != null) {
      this.slug = this.route.snapshot.params.demon;
    }
  }
  ngOnInit(): void {
    this.language = this.route.snapshot.params.language;
    if(this.showNav) {
      this.colset = "col-md-9 mx-auto "
    }
    this.brslservice.getDemon(this.slug, this.language)
    .subscribe({next: demon => {
        this.error =``;
        this.demon = demon;

        this.gameTitle = this.brslservice.gameTitle[this.language];
        this.gameURL = this.brslservice.gameURL;
        this.imgURL = this.brslservice.imgURL;

        this.seoURL = `${this.gameURL}/demons/${this.demon.slug}/${this.language}`;
        this.seoTitle = `${this.demon.name} - ${this.gameTitle}`;
        this.seoDesc = `${this.demon.desc}`
        this.seoImage = `${this.imgURL}demons/${this.demon.slug}.webp`
        this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
    },
    error: error => {
      this.error =`${error.status}`;
    }});
  }
} 