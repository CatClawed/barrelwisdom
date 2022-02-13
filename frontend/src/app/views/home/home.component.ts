import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPaginator } from '@app/interfaces/blog';
import { BlogService } from '@app/services/blog.service';
import { SeoService } from '@app/services/seo.service';
import { TagService } from '@app/services/tag.service';

@Component({
  templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
  blog: BlogPaginator;
  path: number;
  limit: number;
  pagecount: number;
  error: string = '';
  tagUrl: string;
  tagName: string;
  tagID: number;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private location: Location,
    private tagService: TagService,
    private seoService: SeoService,
  ) { }

  ngOnInit(): void {

    this.seoService.SEOSettings('','','The source for all things Atelier.','/media/blog/placeholder.webp');
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
        .subscribe({next: tag => {
          this.tagName = tag.name;
          this.tagID = tag.id;
          this.getBlog(this.path, this.limit);
        },
        error: error => {
          this.error =`${error.status}`;
        }});
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
      .subscribe({next: blog => {
        this.blog = blog;
      },
        error: error => {
          this.error =`${error.status}`;
        }});
  }

  setPagecount(num: number): void {
    this.pagecount = num;
  }
}