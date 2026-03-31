import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BreadcrumbService } from '@app/services/breadcrumb.service';
import { SeoService } from '@app/services/seo.service';
import { catchError, of, switchMap, tap } from 'rxjs';
import { BlogService } from '../_services/blog.service';

@Component({
  templateUrl: 'user.component.html',
  imports: [RouterLink, AsyncPipe]
})
export class UserComponent {
  private route = inject(ActivatedRoute);
  private breadcrumbService = inject(BreadcrumbService);
  private blogService = inject(BlogService);
  private seoService = inject(SeoService);
  error: boolean = false;

  user$ = this.route.paramMap.pipe(
    switchMap(params => {
      const username = params.get('username');
      if (username) {
        return this.blogService.getUserProfile(username).pipe(
          tap(data => {
            this.error = this.breadcrumbService.setStatus(200);
            const userSlug = `/user/${data.user.username}`;
            const title = `User: ${data.user.username}`;
            this.breadcrumbService.setBreadcrumbs([], title);
            this.seoService.updateSEOSettings({url: userSlug, title:title, description:data.bio});
          }),
          catchError(error => {
            this.error = this.breadcrumbService.setStatus(error.status);
            return of(null)
          })
        )
      }
      return of(null)
    })
  )

  constructor() {
    this.breadcrumbService.setBreadcrumbs([], undefined);
  }
}