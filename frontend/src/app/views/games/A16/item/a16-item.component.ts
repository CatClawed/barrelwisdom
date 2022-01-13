import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute }from '@angular/router';
import { ItemFull } from '@app/interfaces/a16';
import { A16Service } from '@app/services/a16.service';
import { HistoryService} from '@app/services/history.service';
import { ErrorCodeService } from '@app/services/errorcode.service';
import { SeoService } from '@app/services/seo.service';

@Component({
  templateUrl: 'a16-item.component.html',
  selector: 'a16-item',
})
export class A16ItemComponent implements OnInit {

  loading = false;
  submitted = false;
  returnUrl: string;
  error: boolean = false;
  errorCode: string;
  errorVars: any[];
  errorMsg: string;
  item: ItemFull;
  colset: string;

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
    private a16service: A16Service,
    public historyService: HistoryService,
    private errorService: ErrorCodeService,
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
    this.a16service.getItem(this.slugname, this.language)
    .subscribe(item => {
        this.error = false;
        this.item = item;

        this.gameTitle = this.a16service.gameTitle[this.language];
        this.gameURL = this.a16service.gameURL;
        this.imgURL = this.a16service.imgURL;

        this.seoURL = `${this.gameURL}/items/${this.item.slugname}/${this.language}`;
        this.seoTitle = `${this.item.name} - ${this.gameTitle}`;
        this.seoDesc = `${this.item.desc}`
        this.seoImage = `${this.imgURL}items/${this.item.slugname}.webp`
        this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
    },
    error => {
      this.error = true;
      this.errorCode = `${error.status}`;
      this.errorVars = this.errorService.getCodes(this.errorCode);
    });
  }
} 