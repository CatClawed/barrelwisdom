import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';

import { BlogPaginator } from '@app/interfaces/blog';
import { BlogService } from '@app/services/blog.service';
import { ErrorCodeService } from "@app/services/errorcode.service";
import { TagService } from '@app/services/tag.service';
import { SeoService } from '@app/services/seo.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  templateUrl: 'home.component.html'
})


export class HomeComponent implements OnInit {
  blog: BlogPaginator;
  path: number;
  limit: number;
  pagecount: number;
  error: boolean = false;
  errorCode: string;
  errorVars: any[];
  tagUrl: string;
  tagName: string;
  tagID: number;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private location: Location,
    private errorService: ErrorCodeService,
    private tagService: TagService,
    private seoService: SeoService,
    private metaService: Meta,
    private titleService: Title
  ) { }

  ngOnInit(): void {

    let url = this.location.path().split("/");

    if (url.length == 4) {
      this.path = parseInt(url[3], 10);
    }
    else if (url.length == 2) {
      this.path = parseInt(url[1], 10);
    }
    else {
      this.path = 1;
    }

    this.limit = 10;

    if (this.route.snapshot.params.tagname) {
      const tag = this.route.snapshot.params.tagname;
      this.tagUrl = `tag/${tag}/`;
      this.tagService.getTagByName(tag)
        .subscribe(tag => {
          this.tagName = tag.name;
          this.tagID = tag.id;
          this.getBlog(this.path, this.limit);
          this.seoService.createCanonicalURL(`tag/${tag.slugname}`);
          this.titleService.setTitle(`${this.tagName} - Barrel Wisdom`);
          this.metaService.updateTag({ name: `robots`, content: `index, archive` },`name="robots"`);
          this.metaService.updateTag({ name: `description`, content: `Archive of ${this.tagName}.` }, `name="description"`);
          this.metaService.updateTag({ property: `og:title`, content: `${this.tagName}` }, `property="og:title"`);
          this.metaService.updateTag({ property: `og:description`, content: `Archive of ${this.tagName}.` },`property="og:description"`);
          this.metaService.updateTag({ property: `og:type`, content: `webpage` }, `property="og:type"`);
        },
        error => {
          this.error = true;
          console.log("fuk")
          this.errorCode = `${error.status}`;
          this.errorVars = this.errorService.getCodes(this.errorCode);
        });
    }
    else {
      this.getBlog(this.path, this.limit);
      this.seoService.createCanonicalURL(``);
      this.titleService.setTitle(`Barrel Wisdom`);
      this.metaService.updateTag({ name: `robots`, content: `index, archive` },`name="robots"`);
      this.metaService.updateTag({ name: `description`, content: `The best source for the Atelier series.` }, `name="description"`);
      this.metaService.updateTag({ property: `og:title`, content: `Barrel Wisdom` }, `property="og:title"`);
      this.metaService.updateTag({ property: `og:description`, content: `The best source for the Atelier series.` },`property="og:description"`);
      this.metaService.updateTag({ property: `og:type`, content: `webpage` }, `property="og:type"`);
    }
  }

  getBlog(num: number, limit: number): void {
    let tag;
    if(this.tagID) {
      tag = `${this.tagID}`;
    }
    this.blogService.getMainPageBlogs(num, limit, tag)
      .subscribe(blog => {
        this.blog = blog;
        
      },
        error => {
          this.error = true;
          console.log("fukk");
          this.errorCode = `${error.status}`;
          this.errorVars = this.errorService.getCodes(this.errorCode);
        }
      );
  }

  setPagecount(num: number): void {
    this.pagecount = num;
  }
}