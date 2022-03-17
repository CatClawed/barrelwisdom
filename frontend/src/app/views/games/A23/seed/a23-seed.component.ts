import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Seed } from '@app/interfaces/a23';
import { A23Service } from '@app/services/a23.service';
import { SeoService } from '@app/services/seo.service';

@Component({
  templateUrl: 'a23-seed.component.html',
})
export class A23SeedComponent implements OnInit {
  slugname: string;
  loading = false;
  submitted = false;
  returnUrl: string;
  error: string = '';
  seeds: Seed[];
  colset: string;
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
    private a23service: A23Service,
    private seoService: SeoService) {
  }
  ngOnInit(): void {
    this.slugname = this.route.snapshot.params.category;
    this.language = this.route.snapshot.params.language;

    this.a23service.getSeeds(this.language)
    .subscribe({next: category => {
        this.error =``;
        this.seeds = category;

        this.gameTitle = this.a23service.gameTitle[this.language];
        this.gameURL = this.a23service.gameURL;
        this.imgURL = this.a23service.imgURL;

        this.seoURL = `${this.gameURL}/seeds/${this.language}`;
        this.seoTitle = `Seeds - ${this.gameTitle}`;
        this.seoDesc = `About growing seeds, and the list of items you can get.`
        this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
    },
    error: error => {
      this.error =`${error.status}`;
    }});
  }
} 