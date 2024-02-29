import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UserProfile } from '@app/views/main/_interfaces/user';
import { DestroyService } from '@app/services/destroy.service';
import { ErrorComponent } from '@app/views/_components/error/error.component';
import { takeUntil } from 'rxjs';
import { BlogService } from '../_services/blog.service';

@Component({
  templateUrl: 'user.component.html',
  providers: [DestroyService],
  standalone: true,
  imports: [ErrorComponent, RouterLink]
})

export class UserComponent implements OnInit {
  userprofile: UserProfile;
  error: string = '';
  errorVars: any[];

  constructor(
    private readonly destroy$: DestroyService,
    private route: ActivatedRoute,
    private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getUserProfile(this.route.snapshot.params.username)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: x => {
          this.userprofile = x
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
}