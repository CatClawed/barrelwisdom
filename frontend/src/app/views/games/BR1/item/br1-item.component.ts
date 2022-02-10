import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute }from '@angular/router';
import { Item } from '@app/interfaces/br1';
import { BR1Service } from '@app/services/br1.service';
import { HistoryService} from '@app/services/history.service';
import { ErrorCodeService } from '@app/services/errorcode.service';
import { SeoService } from '@app/services/seo.service';

@Component({
  templateUrl: 'br1-item.component.html',
  selector: 'br1-item',
})
export class BR1ItemComponent implements OnInit {

  loading = false;
  submitted = false;
  returnUrl: string;
  error: boolean = false;
  errorCode: string;
  errorVars: any[];
  errorMsg: string;
  item: Item;
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
    private br1service: BR1Service,
    public historyService: HistoryService,

    private seoService: SeoService) {
      if(this.route.snapshot.params.item != null) {
      this.slugname = this.route.snapshot.params.item;
    }
  }
  ngOnInit(): void {
    this.language = this.route.snapshot.params.language;
    if(this.showNav) {
      this.colset = "col-md-7 mx-auto "
    }
    this.br1service.getItem(this.slugname, this.language)
    .subscribe(item => {
        this.error = false;
        this.item = item;

        this.gameTitle = this.br1service.gameTitle;
        this.gameURL = this.br1service.gameURL;
        this.imgURL = this.br1service.imgURL;

        this.seoURL = `${this.gameURL}/items/${this.item.slugname}/${this.language}`;
        this.seoTitle = `${this.item.name} - ${this.gameTitle}`;
        this.seoDesc = `${this.item.description}`
        this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
    },
    error => {
      this.error = true;
      this.errorCode = `${error.status}`;
      
    });
  }
} 