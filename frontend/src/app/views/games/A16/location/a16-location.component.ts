import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AreaData } from '@app/interfaces/a16';
import { A16Service } from '@app/services/a16.service';
import { ErrorCodeService } from '@app/services/errorcode.service';
import { SeoService } from '@app/services/seo.service';
import { Meta, Title } from '@angular/platform-browser';
import { ViewportScroller } from '@angular/common';
import { first } from 'rxjs/operators';

@Component({
  templateUrl: 'a16-location.component.html',
  selector: 'a16-location',
})
export class A16LocationComponent implements OnInit {
  slugname: string;
  loading = false;
  submitted = false;
  returnUrl: string;
  error: boolean = false;
  errorCode: string;
  errorVars: any[];
  errorMsg: string;
  location: AreaData;
  colset: string;
  language = "";

  constructor(
    private route: ActivatedRoute,
    private a16service: A16Service,
    private errorService: ErrorCodeService,
    private seoService: SeoService,
    private metaService: Meta,
    private titleService: Title,
    private viewportScroller: ViewportScroller
    ) {
  }
  ngOnInit(): void {
    this.slugname = this.route.snapshot.params.location;
    this.language = this.route.snapshot.params.language;

    this.a16service.getRegion(this.slugname, this.language)
    .subscribe(location => {
        this.error = false;
        this.location = location;

        this.seoService.createCanonicalURL(`shallie/locations/${this.location.slugname}/${this.language}`);
        this.titleService.setTitle(`${this.location.name} - Atelier Shallie - Barrel Wisdom`);
        this.metaService.updateTag({ name: `robots`, content: `index, archive` },`name="robots"`);
        this.metaService.updateTag({ name: `description`, content: `All items in ${this.location.name}` }, `name="description"`);
        this.metaService.updateTag({ property: `og:title`, content: `${this.location.name}` }, `property="og:title"`);
        this.metaService.updateTag({ property: `og:description`, content: `All items in ${this.location.name}` },`property="og:description"`);
        this.metaService.updateTag({ property: `og:type`, content: `webpage` }, `property="og:type"`);
        this.metaService.updateTag({ property: `og:image`, content: `/media/main/barrel.png` }, `property="og:image"`);
    },
    error => {
      this.error = true,
      this.errorCode = error.status.toString(),
      this.errorVars = this.errorService.getCodes(this.errorCode)
    });
  }
  ngAfterViewInit(): void {
    this.route.fragment.pipe(
      first()
    ).subscribe(fragment => this.viewportScroller.scrollToAnchor(fragment));
  }
} 