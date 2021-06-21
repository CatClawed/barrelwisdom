import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegionData } from '@app/interfaces/a15';
import { A15Service } from '@app/services/a15.service';
import { ErrorCodeService } from '@app/services/errorcode.service';
import { SeoService } from '@app/services/seo.service';
import { Meta, Title } from '@angular/platform-browser';
import { ViewportScroller } from '@angular/common';
import { first } from 'rxjs/operators';

@Component({
  templateUrl: 'a15-location.component.html',
  selector: 'a15-location',
})
export class A15LocationComponent implements OnInit {
  slugname: string;
  loading = false;
  submitted = false;
  returnUrl: string;
  error: boolean = false;
  errorCode: string;
  errorVars: any[];
  errorMsg: string;
  location: RegionData;
  colset: string;
  language = "";

  constructor(
    private route: ActivatedRoute,
    private a15service: A15Service,
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

    this.a15service.getRegion(this.slugname, this.language)
    .subscribe(location => {
        this.error = false;
        this.location = location;

        this.seoService.createCanonicalURL(`escha/locations/${this.location.slugname}/${this.language}`);
        this.titleService.setTitle(`${this.location.name} - Atelier Escha & Logy - Barrel Wisdom`);
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