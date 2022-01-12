import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute }from '@angular/router';
import { MonsterFull } from '@app/interfaces/a12';
import { A12Service } from '@app/services/a12.service';
import { HistoryService} from '@app/services/history.service';
import { ErrorCodeService } from '@app/services/errorcode.service';
import { SeoService } from '@app/services/seo.service';

@Component({
  templateUrl: 'a12-monster.component.html',
  selector: 'a12-monster',
})
export class A12MonsterComponent implements OnInit {

  loading = false;
  submitted = false;
  returnUrl: string;
  error: boolean = false;
  errorCode: string;
  errorVars: any[];
  errorMsg: string;
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
    private a12service: A12Service, public historyService: HistoryService,
    private errorService: ErrorCodeService,
    private seoService: SeoService) {
      if(this.route.snapshot.params.monster != null) {
      this.slugname = this.route.snapshot.params.monster;
    }
  }
  ngOnInit(): void {
    this.language = this.route.snapshot.params.language;
    if(this.showNav) {
      this.colset = "col-md-9 mx-auto "
    }
    this.a12service.getMonster(this.slugname, this.language)
    .subscribe(monster => {
        this.error = false;
        this.monster = monster;

        this.gameTitle = this.a12service.gameTitle[this.language];
        this.gameURL = this.a12service.gameURL;
        this.imgURL = this.a12service.imgURL;

        this.seoURL = `${this.gameURL}/monsters/${this.monster.slugname}/${this.language}`;
        this.seoTitle = `${this.monster.name} - ${this.gameTitle}`;
        this.seoDesc = `${this.monster.desc}`
        this.seoImage = `${this.imgURL}monsters/${this.monster.slugname}.png`
        this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
    },
    error => {
      this.error = true;
      this.errorCode = `${error.status}`;
      this.errorVars = this.errorService.getCodes(this.errorCode);
    });
  }
} 