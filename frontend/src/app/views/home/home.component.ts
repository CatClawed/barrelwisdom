import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { BlogPaginator } from '@app/interfaces/blog';
import { BlogService } from '@app/services/blog.service';
import { ErrorCodeService } from "@app/services/errorcode.service";
import { TagService } from '@app/services/tag.service';
import { SeoService } from '@app/services/seo.service';

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
    private seoService: SeoService
  ) { }

  ngOnInit(): void {

    this.seoService.SEOSettings('','','The source for all things Atelier.','/media/blog/placeholder.png');
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
        },
        error => {
          this.error = true;
          this.errorCode = `${error.status}`;
          this.errorVars = this.errorService.getCodes(this.errorCode);
        });
    }
    else {
      this.getBlog(this.path, this.limit);
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
          this.errorCode = `${error.status}`;
          this.errorVars = this.errorService.getCodes(this.errorCode);
        }
      );
  }

  setPagecount(num: number): void {
    this.pagecount = num;
  }
}