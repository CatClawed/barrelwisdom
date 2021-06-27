import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MonsterFull } from '@app/interfaces/a16';
import { A16Service } from '@app/services/a16.service';
import { ErrorCodeService } from '@app/services/errorcode.service';
import { SeoService } from '@app/services/seo.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  templateUrl: 'a16-monster.component.html',
  selector: 'a16-monster',
})
export class A16MonsterComponent implements OnInit {

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
    private a16service: A16Service,
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
    this.a16service.getMonster(this.slugname, this.language)
    .subscribe(monster => {
        this.error = false;
        this.monster = monster;

        this.seoService.createCanonicalURL(`shallie/monsters/${this.monster.slugname}/${this.language}`);
        this.titleService.setTitle(`${this.monster.name} - Atelier Shallie - Barrel Wisdom`);
        this.metaService.updateTag({ name: `robots`, content: `index, archive` },`name="robots"`);
        this.metaService.updateTag({ name: `description`, content: `${this.monster.desc}` }, `name="description"`);
        this.metaService.updateTag({ property: `og:title`, content: `${this.monster.name}` }, `property="og:title"`);
        this.metaService.updateTag({ property: `og:description`, content: `${this.monster.desc}` },`property="og:description"`);
        this.metaService.updateTag({ property: `og:type`, content: `webpage` }, `property="og:type"`);
        this.metaService.updateTag({ property: `og:image`, content: `/media/games/shallie/monsters/${this.monster.slugname}.png` }, `property="og:image"`);
    },
    error => {
      this.error = true;
      this.errorCode = error.status.toString();
      this.errorVars = this.errorService.getCodes(this.errorCode);
    });
  }
} 