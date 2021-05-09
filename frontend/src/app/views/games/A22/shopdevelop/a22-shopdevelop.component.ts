import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShopDevelop } from '@app/interfaces/a22';
import { A22Service } from '@app/services/a22.service';
import { ErrorCodeService } from '@app/services/errorcode.service';
import { SeoService } from '@app/services/seo.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  templateUrl: 'a22-shopdevelop.component.html',
  selector: 'a22-shopdevelop',
})
export class A22ShopDevelopComponent implements OnInit {
  slugname: string;
  loading = false;
  submitted = false;
  returnUrl: string;
  error: boolean = false;
  errorCode: string;
  errorVars: any[];
  errorMsg: string;
  shopdevelop: ShopDevelop[];
  colset: string;
  language = "";

  constructor(
    private route: ActivatedRoute,
    private a22service: A22Service,
    private errorService: ErrorCodeService,
    private seoService: SeoService,
    private metaService: Meta,
    private titleService: Title) {
  }
  ngOnInit(): void {
    this.language = this.route.snapshot.params.language;

    this.a22service.getShopDevList(this.language)
    .subscribe(shopdevelop => {
        this.error = false;
        this.shopdevelop = shopdevelop;

        this.seoService.createCanonicalURL(`ryza2/shopdevelop/${this.language}`);
        this.titleService.setTitle(`Shop Development - Atelier Ryza 2 - Barrel Wisdom`);
        this.metaService.updateTag({ name: `robots`, content: `index, archive` },`name="robots"`);
        this.metaService.updateTag({ name: `description`, content: `The full shop develop list.` }, `name="description"`);
        this.metaService.updateTag({ property: `og:title`, content: `Shop Development` }, `property="og:title"`);
        this.metaService.updateTag({ property: `og:description`, content: `The full shop develop list.` },`property="og:description"`);
        this.metaService.updateTag({ property: `og:type`, content: `webpage` }, `property="og:type"`);
        this.metaService.updateTag({ property: `og:image`, content: `/media/main/barrel.png` }, `property="og:image"`);
    },
    error => {
        console.log(error)
      this.error = true,
      this.errorCode = error.status.toString(),
      this.errorVars = this.errorService.getCodes(this.errorCode)
    });
  }
} 