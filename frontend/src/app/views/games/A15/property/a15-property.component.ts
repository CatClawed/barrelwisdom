import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute }from '@angular/router';
import { Property } from '@app/interfaces/a15';
import { A15Service } from '@app/services/a15.service';
import { HistoryService} from '@app/services/history.service';
import { ErrorCodeService } from '@app/services/errorcode.service';
import { SeoService } from '@app/services/seo.service';

@Component({
  templateUrl: 'a15-property.component.html',
  selector: 'a15-property',
})
export class A15PropertyComponent implements OnInit {

  loading = false;
  submitted = false;
  returnUrl: string;
  error: boolean = false;
  errorCode: string;
  errorVars: any[];
  errorMsg: string;
  property: Property;
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

    public historyService: HistoryService,
    private seoService: SeoService) {
      if(this.route.snapshot.params.property != null) {
      this.slugname = this.route.snapshot.params.property;
    }
  }
  ngOnInit(): void {
    this.language = this.route.snapshot.params.language;
    if(this.showNav) {
      this.colset = "col-md-5 mx-auto "
    }
    this.a15service.getProperty(this.slugname, this.language)
    .subscribe(property => {
      this.property = property;
      this.gameTitle = this.a15service.gameTitle[this.language];
      this.gameURL = this.a15service.gameURL;
      this.imgURL = this.a15service.imgURL;

      this.seoURL = `${this.gameURL}/properties/${this.property.slugname}/${this.language}`;
      this.seoTitle = `${this.property.name} - ${this.gameTitle}`;
      this.seoDesc = `${this.property.desc}`
      this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
    },
    error => {
      this.error = true;
      this.errorCode = `${error.status}`;
      
    });
  }
} 