import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MonsterFull } from '@app/interfaces/a15';
import { A15Service } from '@app/services/a15.service';
import { SeoService } from '@app/services/seo.service';

@Component({
  templateUrl: 'a15-monster.component.html',
  selector: 'a15-monster',
})
export class A15MonsterComponent implements OnInit {
  loading = false;
  submitted = false;
  returnUrl: string;
  error: string = '';
  monster: MonsterFull;
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
    private a15service: A15Service,
    protected seoService: SeoService) {
      if(this.route.snapshot.params.monster != null) {
      this.slugname = this.route.snapshot.params.monster;
    }
  }
  ngOnInit(): void {
    this.language = this.route.snapshot.params.language;
    if(this.showNav) {
      this.colset = "col-md-9 mx-auto "
    }
    this.a15service.getMonster(this.slugname, this.language)
    .subscribe({next: monster => {
        this.error =``;
        this.monster = monster;

        this.gameTitle = this.a15service.gameTitle[this.language];
        this.gameURL = this.a15service.gameURL;
        this.imgURL = this.a15service.imgURL;

        this.seoURL = `${this.gameURL}/monsters/${this.monster.slugname}/${this.language}`;
        this.seoTitle = `${this.monster.name} - ${this.gameTitle}`;
        this.seoDesc = `${this.monster.desc}`
        this.seoImage = `${this.imgURL}monsters/${this.monster.slugname}.webp`
        this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
    },
    error: error => {
      this.error =`${error.status}`;
    }});
  }
} 