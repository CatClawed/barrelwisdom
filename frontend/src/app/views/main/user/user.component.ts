import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BreadcrumbService } from '@app/services/breadcrumb.service';
import { DestroyService } from '@app/services/destroy.service';
import { UserProfile } from '@app/views/main/_interfaces/user';
import { takeUntil } from 'rxjs';
import { BlogService } from '../_services/blog.service';

@Component({
  templateUrl: 'user.component.html',
  providers: [DestroyService],
  standalone: true,
  imports: [RouterLink]
})

export class UserComponent implements OnInit {
  userprofile: UserProfile;
  error: boolean = false;
  errorVars: any[];

  constructor(
    private readonly destroy$: DestroyService,
    private route: ActivatedRoute,
    private breadcrumbService: BreadcrumbService,
    private blogService: BlogService) { }

  ngOnInit(): void {
    this.breadcrumbService.setBreadcrumbs([], undefined)
    this.blogService.getUserProfile(this.route.snapshot.params.username)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: x => {
          this.userprofile = x
          this.error = this.breadcrumbService.setStatus(200);
        },
        error: error => {
          this.error = this.breadcrumbService.setStatus(error.status);
        }
      });
  }
}