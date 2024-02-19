import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Comment } from '@app/interfaces/blog';
import { User } from '@app/interfaces/user';
import { AuthenticationService } from '@app/services/authentication.service';
import { BlogService } from '@app/services/blog.service';
import { DestroyService } from '@app/services/destroy.service';
import { HistoryService } from '@app/services/history.service';
import { ErrorComponent } from '@app/views/_components/error/error.component';
import { takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'moderate.component.html',
  providers: [DestroyService],
  standalone: true,
  imports: [ErrorComponent, DatePipe]
})

export class ModerateComponent implements OnInit {
  user: User;
  comments: Comment[];
  error: string = '';

  constructor(
    private readonly destroy$: DestroyService,
    public historyService: HistoryService,
    private blogService: BlogService,
    private authenticationService: AuthenticationService,) {
  }

  ngOnInit(): void {
    this.authenticationService.user
      .pipe(takeUntil(this.destroy$))
      .subscribe(x => this.user = x);
    this.getComments();
  }

  getComments(): void {
    this.blogService.getComments()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: comments => {
          this.error = ``;
          this.comments = comments;
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }

  approveComment(id: number) {
    this.blogService.approveComment(id)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: () => {},
      error: error => {
        this.error = `${error.status}`;
      }
    });
  }

  deleteComment(id: number) {
    this.blogService.deleteComment(id)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: () => {},
      error: error => {
        this.error = `${error.status}`;
      }
    });
  }
}