import { AsyncPipe, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ActivatedRoute, NavigationEnd, Router, RouterLink } from '@angular/router';
import { BreadcrumbService } from '@app/services/breadcrumb.service';
import { SeoService } from '@app/services/seo.service';
import { BlogPaginator } from '@app/views/main/_interfaces/blog';
import { BlogService } from '@app/views/main/_services/blog.service';
import { catchError, filter, Observable, of, startWith, switchMap, tap } from 'rxjs';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['home.scss'],
  imports: [RouterLink, DatePipe, MatPaginatorModule, AsyncPipe]
})

export class HomeComponent implements OnInit {
  blog: BlogPaginator;
  path: number;
  limit: number = 10;
  error: boolean = false;
  baseUrl: string;
  blogs$: Observable<BlogPaginator | null>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private blogService: BlogService,
    protected breadcrumbService: BreadcrumbService,
    protected seoService: SeoService) {
  }

  ngOnInit(): void {
    this.breadcrumbService.setBreadcrumbs([], undefined)

    this.seoService.SEOSettings('', '', 'The source for all things Atelier.', '/media/blog/placeholder.webp');
    this.blogs$ = this.router.events.pipe(
      filter(val => val instanceof NavigationEnd),
      startWith(null),
      switchMap(() => this.initializePage()),
      tap(data => {
        this.error = this.breadcrumbService.setStatus(200);
      }),
      catchError(error => {
        this.error = this.breadcrumbService.setStatus(error.status);
        return of(null);
      })
    );
  }

  private initializePage() {
    const tagname = this.route.snapshot.params['tagname'] || '';
    this.baseUrl = tagname ? `tag/${tagname}` : '/'
    this.path = Number(this.route.snapshot.params['number']) || 1;
    return this.blogService.getMainPageBlogs(this.path, this.limit, tagname);
  }

  changePage(e) {
    this.router.navigateByUrl(`${this.baseUrl}/${e.pageIndex + 1}`)
  }
}