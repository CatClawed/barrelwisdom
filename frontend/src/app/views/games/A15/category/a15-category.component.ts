import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryData } from '@app/interfaces/a15';
import { A15Service } from '@app/services/a15.service';
import { ErrorCodeService } from '@app/services/errorcode.service';
import { SeoService } from '@app/services/seo.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  templateUrl: 'a15-category.component.html',
  selector: 'a15-category',
})
export class A15CategoryComponent implements OnInit {
  slugname: string;
  loading = false;
  submitted = false;
  returnUrl: string;
  error: boolean = false;
  errorCode: string;
  errorVars: any[];
  errorMsg: string;
  category: CategoryData;
  colset: string;
  language = "";

  constructor(
    private route: ActivatedRoute,
    private a15service: A15Service,
    private errorService: ErrorCodeService,
    private seoService: SeoService,
    private metaService: Meta,
    private titleService: Title) {
  }
  ngOnInit(): void {
    this.slugname = this.route.snapshot.params.category;
    this.language = this.route.snapshot.params.language;

    this.a15service.getCategory(this.slugname, this.language)
    .subscribe(category => {
        this.error = false;
        this.category = category;

        this.seoService.createCanonicalURL(`escha/categories/${this.category.slugname}/${this.language}`);
        this.titleService.setTitle(`${this.category.name} - Atelier Escha & Logy - Barrel Wisdom`);
        this.metaService.updateTag({ name: `robots`, content: `index, archive` },`name="robots"`);
        this.metaService.updateTag({ name: `description`, content: `All items in ${this.category.name}` }, `name="description"`);
        this.metaService.updateTag({ property: `og:title`, content: `${this.category.name}` }, `property="og:title"`);
        this.metaService.updateTag({ property: `og:description`, content: `All items in ${this.category.name}` },`property="og:description"`);
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