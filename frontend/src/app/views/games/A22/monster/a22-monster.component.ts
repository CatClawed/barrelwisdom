import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MonsterFull } from '@app/interfaces/a22';
import { A22Service } from '@app/services/a22.service';
import { HistoryService } from '@app/services/history.service';
import { ErrorCodeService } from '@app/services/errorcode.service';
import { SeoService } from '@app/services/seo.service';

@Component({
  templateUrl: 'a22-monster.component.html',
  selector: 'a22-monster',
})
export class A22MonsterComponent implements OnInit {

  loading = false;
  submitted = false;
  returnUrl: string;
  error: boolean = false;
  errorCode: string;
  errorVars: any[];
  errorMsg: string;
  monster: MonsterFull;
  colset: string;
  hp:  boolean[] = [];
  atk: boolean[] = [];
  def: boolean[] = [];
  spd: boolean[] = [];

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
    public historyService: HistoryService,
    private a22service: A22Service,

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
    this.a22service.getMonster(this.slug, this.language)
    .subscribe(monster => {
        this.error = false;
        this.monster = monster;
        for(let i = 0; i < 5; i++) {
          if(i < this.monster.hp_rank) {
            this.hp.push(true);
          }
          else {
            this.hp.push(false);
          }
          if(i < this.monster.str_rank) {
            this.atk.push(true);
          }
          else {
            this.atk.push(false);
          }
          if(i < this.monster.def_rank) {
            this.def.push(true);
          }
          else {
            this.def.push(false);
          }
          if(i < this.monster.spd_rank) {
            this.spd.push(true);
          }
          else {
            this.spd.push(false);
          }
        }

        this.gameTitle = this.a22service.gameTitle[this.language];
        this.gameURL = this.a22service.gameURL;
        this.imgURL = this.a22service.imgURL;

        this.seoURL = `${this.gameURL}/monsters/${this.monster.slug}/${this.language}`;
        this.seoTitle = `${this.monster.name} - ${this.gameTitle}`;
        this.seoDesc = `${this.monster.desc}`
        this.seoImage = `${this.imgURL}monsters/${this.monster.slug}.webp`
        this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
    },
    error => {
      this.error = true;
      this.errorCode = `${error.status}`;
      
    });
  }

} 