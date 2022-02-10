import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute }from '@angular/router';
import { ItemFull } from '@app/interfaces/brsl';
import { BRSLService } from '@app/services/brsl.service';
import { HistoryService} from '@app/services/history.service';
import { ErrorCodeService } from '@app/services/errorcode.service';
import { SeoService } from '@app/services/seo.service';

@Component({
  templateUrl: 'brsl-item.component.html',
  selector: 'brsl-item',
})
export class BRSLItemComponent implements OnInit {

  loading = false;
  submitted = false;
  returnUrl: string;
  error: boolean = false;
  errorCode: string;
  errorVars: any[];
  errorMsg: string;
  item: ItemFull;
  colset: string;

  seoTitle: string;
  seoDesc: string;
  seoImage: string;
  seoURL: string;

  gameTitle: string;
  gameURL: string;
  imgURL: string;

  expand = false;

  @Input()
  slug: string = "";

  @Input()
  showNav: boolean = true;

  language = "";

  constructor(
    private route: ActivatedRoute,
    private brslservice: BRSLService,
    public historyService: HistoryService,

    private seoService: SeoService) {
      if(this.route.snapshot.params.item != null) {
      this.slug = this.route.snapshot.params.item;
    }
  }
  ngOnInit(): void {
    this.language = this.route.snapshot.params.language;
    if(this.showNav) {
      this.colset = "col-md-9 mx-auto "
    }
    this.brslservice.getItem(this.slug, this.language)
    .subscribe(item => {
        this.error = false;
        this.item = item;

        this.gameTitle = this.brslservice.gameTitle[this.language];
        this.gameURL = this.brslservice.gameURL;
        this.imgURL = this.brslservice.imgURL;

        this.seoURL = `${this.gameURL}/items/${this.item.slug}/${this.language}`;
        this.seoTitle = `${this.item.name} - ${this.gameTitle}`;
        this.seoDesc = `${this.item.desc}`
        this.seoImage = `${this.imgURL}items/${this.item.slug}.webp`
        this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
    },
    error => {
      this.error = true;
      this.errorCode = `${error.status}`;
      
    });
  }
} 