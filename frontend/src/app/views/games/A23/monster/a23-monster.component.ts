import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Monster } from '@app/interfaces/a23';
import { A23Service } from '@app/services/a23.service';
import { SeoService } from '@app/services/seo.service';

@Component({
  templateUrl: 'a23-monster.component.html',
  selector: 'a23-monster',
})
export class A23MonsterComponent implements OnInit {

  loading = false;
  submitted = false;
  returnUrl: string;
  error: string = '';
  monster: Monster;
  colset: string;

  seoTitle: string;
  seoDesc: string;
  seoImage: string;
  seoURL: string;

  gameTitle: string;
  gameURL: string;
  imgURL: string;

  chart = {
    RESIST:`<i class="fas fa-chevron-up"></i>`,
    NOEFFECT:`<i class="fas fa-chevron-up"></i><i class="fas fa-chevron-up"></i><i class="fas fa-chevron-up"></i>`,
    SUPER_RESIST:`<i class="fas fa-chevron-up"></i><i class="fas fa-chevron-up"></i>`,
    WEAK:`<i class="fas fa-chevron-down"></i>`,
    SUPER_WEAK:`<i class="fas fa-chevron-down"></i><i class="fas fa-chevron-down"></i><i class="fas fa-chevron-down"></i>`,
    GREAT_WEAK:`<i class="fas fa-chevron-down"></i><i class="fas fa-chevron-down"></i>`,
  }

  @Input()
  slug: string = "";

  @Input()
  showNav: boolean = true;

  language = "";

  constructor(
    private route: ActivatedRoute,
    private a23service: A23Service,
    private seoService: SeoService) {
      if(this.route.snapshot.params.monster != null) {
      this.slug = this.route.snapshot.params.monster;
    }
  }
  ngOnInit(): void {
    this.language = this.route.snapshot.params.language;
    if(this.showNav) {
      this.colset = "col-md-9 mx-auto "
    }
    this.a23service.getMonster(this.slug, this.language)
    .subscribe({next: monster => {
        this.error =``;
        this.monster = monster;

        this.gameTitle = this.a23service.gameTitle[this.language];
        this.gameURL = this.a23service.gameURL;
        this.imgURL = this.a23service.imgURL;

        this.seoURL = `${this.gameURL}/monsters/${this.monster.slug}/${this.language}`;
        this.seoTitle = `${this.monster.name} - ${this.gameTitle}`;
        this.seoDesc = `${this.monster.desc1}`
        this.seoImage = `${this.imgURL}monsters/${this.monster.slug}.webp`
        this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
    },
    error: error => {
      this.error =`${error.status}`;
    }});
  }

} 