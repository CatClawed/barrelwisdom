import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute }from '@angular/router';
import { FacilityFull } from '@app/interfaces/brsl';
import { BRSLService } from '@app/services/brsl.service';
import { HistoryService} from '@app/services/history.service';
import { ErrorCodeService } from '@app/services/errorcode.service';
import { SeoService } from '@app/services/seo.service';

@Component({
  templateUrl: 'brsl-facility.component.html',
  selector: 'brsl-facility',
})
export class BRSLFacilityComponent implements OnInit {

  loading = false;
  submitted = false;
  returnUrl: string;
  error: boolean = false;
  errorCode: string;
  errorVars: any[];
  errorMsg: string;
  facility: FacilityFull;
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
      if(this.route.snapshot.params.facility != null) {
      this.slug = this.route.snapshot.params.facility;
    }
  }
  ngOnInit(): void {
    this.language = this.route.snapshot.params.language;
    if(this.showNav) {
      this.colset = "col-md-9 mx-auto "
    }
    this.brslservice.getFacility(this.slug, this.language)
    .subscribe(facility => {
        this.error = false;
        this.facility = facility;

        this.gameTitle = this.brslservice.gameTitle[this.language];
        this.gameURL = this.brslservice.gameURL;
        this.imgURL = this.brslservice.imgURL;

        this.seoURL = `${this.gameURL}/facilities/${this.facility.slug}/${this.language}`;
        this.seoTitle = `${this.facility.name} - ${this.gameTitle}`;
        this.seoDesc = `${this.facility.desc}`
        this.seoImage = `${this.imgURL}facilities/${this.facility.slug}.webp`
        this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
    },
    error => {
      this.error = true;
      this.errorCode = `${error.status}`;
      
    });
  }
} 