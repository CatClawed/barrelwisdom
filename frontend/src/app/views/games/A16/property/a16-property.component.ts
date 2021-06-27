import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Property } from '@app/interfaces/a16';
import { A16Service } from '@app/services/a16.service';
import { ErrorCodeService } from '@app/services/errorcode.service';
import { SeoService } from '@app/services/seo.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  templateUrl: 'a16-property.component.html',
  selector: 'a16-property',
})
export class A16PropertyComponent implements OnInit {

  loading = false;
  submitted = false;
  returnUrl: string;
  error: boolean = false;
  errorCode: string;
  errorVars: any[];
  errorMsg: string;
  property: Property;
  colset: string;

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
      if(this.route.snapshot.params.property != null) {
      this.slugname = this.route.snapshot.params.property;
    }
  }
  ngOnInit(): void {
    this.language = this.route.snapshot.params.language;
    if(this.showNav) {
      this.colset = "col-md-5 mx-auto "
    }
    this.a16service.getProperty(this.slugname, this.language)
    .subscribe(property => {
      this.property = property;
      this.seoService.createCanonicalURL(`escha/properties/${this.property.slugname}/${this.language}`);
      this.titleService.setTitle(`${property.name} - Atelier Shallie - Barrel Wisdom`);
      this.metaService.updateTag({ name: `robots`, content: `index, archive` },`name="robots"`);
      this.metaService.updateTag({ name: `description`, content: `${property.desc}` }, `name="description"`);
      this.metaService.updateTag({ property: `og:title`, content: `${property.name}` }, `property="og:title"`);
      this.metaService.updateTag({ property: `og:description`, content: `${property.desc}` },`property="og:description"`);
      this.metaService.updateTag({ property: `og:type`, content: `webpage` }, `property="og:type"`);
      this.metaService.updateTag({ property: `og:image`, content: `/media/main/barrel.png` }, `property="og:image"`);
    },
    error => {
      this.error = true,
      this.errorCode = error.status.toString(),
      this.errorVars = this.errorService.getCodes(this.errorCode)
    });
  }
} 