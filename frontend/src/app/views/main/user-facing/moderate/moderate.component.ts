import { AsyncPipe, DatePipe } from '@angular/common';
import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AuthenticationService } from '@app/services/authentication.service';
import { BreadcrumbService } from '@app/services/breadcrumb.service';
import { HistoryService } from '@app/services/history.service';
import { UserService } from '@app/views/main/_services/user.service';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  templateUrl: 'moderate.component.html',
  imports: [DatePipe, AsyncPipe]
})

export class ModerateComponent {
  public historyService = inject(HistoryService);
  private userService = inject(UserService);
  private breadcrumbService = inject(BreadcrumbService);
  private authenticationService = inject(AuthenticationService);
  private destroyRef = inject(DestroyRef)
  user = this.authenticationService.userSignal;
  error: boolean = this.breadcrumbService.setStatus(200);

  comments$ = this.userService.getComments()
    .pipe(
      catchError(error => {
        this.error = this.breadcrumbService.setStatus(error.status);
        return of(null)
      })
    );

  constructor() {
    this.breadcrumbService.setBreadcrumbs([], undefined)
  }

  approveComment(id: number) {
    this.userService.approveComment(id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () => { },
        error: error => {
          this.error = this.breadcrumbService.setStatus(error.status);
        }
      });
  }

  deleteComment(id: number) {
    this.userService.deleteComment(id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () => { },
        error: error => {
          this.error = this.breadcrumbService.setStatus(error.status);
        }
      });
  }
}