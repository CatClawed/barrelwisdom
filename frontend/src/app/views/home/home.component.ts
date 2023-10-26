import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BlogPaginator } from '@app/interfaces/blog';
import { BlogService } from '@app/services/blog.service';
import { SeoService } from '@app/services/seo.service';
import { TagService } from '@app/services/tag.service';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['home.scss']
})

export class HomeComponent implements OnInit, OnDestroy {
  blog: BlogPaginator;
  path: number;
  limit: number = 10;
  error: string = '';
  tagName: string;
  tagID: number;
  rt;
  totalPages: number;
  baseUrl: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private blogService: BlogService,
    private location: Location,
    private tagService: TagService,
    protected seoService: SeoService) {
    this.rt = router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        this.initializePage();
      }
    });
  }

  ngOnInit(): void {
    this.seoService.SEOSettings('', '', 'The source for all things Atelier.', '/media/blog/placeholder.webp');
    this.initializePage()
  }

  initializePage() {
    let url = this.location.path().split("/");

    if (url.length === 4) {
      this.path = parseInt(url[3], 10);
      this.baseUrl = this.location.path().substring(0, this.location.path().lastIndexOf('/'));
    }
    else if (url.length === 2) {
      this.path = parseInt(url[1], 10);
      this.baseUrl = this.location.path().substring(0, this.location.path().lastIndexOf('/'));
    }
    else {
      this.path = 1;
      this.baseUrl = this.location.path()
    }
    if (this.route.snapshot.params.tagname) {
      const tag = this.route.snapshot.params.tagname;
      this.tagService.getTagByName(tag)
        .subscribe({
          next: tag => {
            this.tagName = tag.name;
            this.tagID = tag.id;
            this.getBlog(this.path, this.limit);
          },
          error: error => {
            this.error = `${error.status}`;
          }
        });
    }
    else {
      this.getBlog(this.path, this.limit);
    }
  }

  changePage(e) {
    this.router.navigateByUrl(`${this.baseUrl}/${e.pageIndex + 1}`)
  }

  getBlog(num: number, limit: number): void {
    this.blogService.getMainPageBlogs(num, limit, this.tagID ? `${this.tagID}` : '')
      .subscribe({
        next: blog => {
          this.blog = blog;
          this.totalPages = Math.ceil(blog.count / this.limit)
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }

  ngOnDestroy() {
    this.rt.unsubscribe();
  }
}