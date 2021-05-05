import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MonsterFull } from '@app/interfaces/a22';
import { A22Service } from '@app/services/a22.service';
import { ErrorCodeService } from '@app/services/errorcode.service';
import { SeoService } from '@app/services/seo.service';
import { Meta, Title } from '@angular/platform-browser';

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

  @Input()
  slugname: string = "";

  @Input()
  showNav: boolean = true;

  language = "";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private a22service: A22Service,
    private errorService: ErrorCodeService,
    private seoService: SeoService,
    private metaService: Meta,
    private titleService: Title) {
      if(this.route.snapshot.params.monster != null) {
      this.slugname = this.route.snapshot.params.monster;
    }
  }
  ngOnInit(): void {
    this.language = this.route.snapshot.params.language;
    if(this.showNav) {
      this.colset = "col-md-9 mx-auto "
    }
    this.a22service.getMonster(this.slugname, this.language)
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

        this.seoService.createCanonicalURL(`ryza2/monsters/${this.monster.slugname}/${this.language}`);
        this.titleService.setTitle(`${this.monster.name} - Atelier Ryza 2 - Barrel Wisdom`);
        this.metaService.updateTag({ name: `robots`, content: `index, archive` },`name="robots"`);
        this.metaService.updateTag({ name: `description`, content: `${this.monster.description}` }, `name="description"`);
        this.metaService.updateTag({ property: `og:title`, content: `${this.monster.name}` }, `property="og:title"`);
        this.metaService.updateTag({ property: `og:description`, content: `${this.monster.description}` },`property="og:description"`);
        this.metaService.updateTag({ property: `og:type`, content: `webpage` }, `property="og:type"`);
        this.metaService.updateTag({ property: `og:image`, content: `https://media.barrelwisdom.com/file/barrelwisdom/main/barrel.png` }, `property="og:image"`);
    },
    error => {
      this.error = true,
      this.errorCode = error.status.toString(),
      this.errorVars = this.errorService.getCodes(this.errorCode)
    });
  }
} 