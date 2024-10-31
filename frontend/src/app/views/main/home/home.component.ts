import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ActivatedRoute, NavigationEnd, Router, RouterLink } from '@angular/router';
import { BreadcrumbService } from '@app/services/breadcrumb.service';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { BlogPaginator } from '@app/views/main/_interfaces/blog';
import { BlogService } from '@app/views/main/_services/blog.service';
import { catchError, mergeMap, of, takeUntil } from 'rxjs';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['home.scss'],
  providers: [DestroyService],
  standalone: true,
  imports: [RouterLink, DatePipe, MatPaginatorModule]
})

export class HomeComponent implements OnInit {
  blog: BlogPaginator;
  path: number;
  limit: number = 10;
  error: boolean = false;
  totalPages: number;
  baseUrl: string;

  constructor(
    private readonly destroy$: DestroyService,
    private router: Router,
    private route: ActivatedRoute,
    private blogService: BlogService,
    protected breadcrumbService: BreadcrumbService,
    protected seoService: SeoService) {
  }

  ngOnInit(): void {
    this.breadcrumbService.setBreadcrumbs([], undefined)
    this.initializePage()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: data => {
          this.blog = data
          this.error = this.breadcrumbService.setStatus(200);
          this.totalPages = Math.ceil(this.blog.count / this.limit)
        },
        error: error => {
          this.blog = null;
          this.error = this.breadcrumbService.setStatus(error.status);
        }
      })

    this.seoService.SEOSettings('', '', 'The source for all things Atelier.', '/media/blog/placeholder.webp');
    this.router.events.pipe(
        mergeMap(val => {
          if (val instanceof NavigationEnd) {
            return this.initializePage();
          }
          return of(undefined)
        }),
        catchError(error => {
          this.blog = null;
          this.error = this.breadcrumbService.setStatus(error.status);
          return of(undefined)
        }),
        takeUntil(this.destroy$)
      ).subscribe(data => {
        if (data) {
          this.blog = data;
          this.error = this.breadcrumbService.setStatus(200);
          this.totalPages = Math.ceil(this.blog.count / this.limit)
        }
      });
  }

  initializePage() {
    this.baseUrl = this.route.snapshot.params.tagname ?
      `tag/${this.route.snapshot.params.tagname}` : '/'
    this.path = this.route.snapshot.params.number ?
      this.route.snapshot.params.number : 1;
    return this.blogService.getMainPageBlogs(this.path, this.limit, this.route.snapshot.params.tagname)
  }

  changePage(e) {
    this.router.navigateByUrl(`${this.baseUrl}/${e.pageIndex + 1}`)
  }
}