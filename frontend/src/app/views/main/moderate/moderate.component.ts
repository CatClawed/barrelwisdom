import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@app/services/authentication.service';
import { DestroyService } from '@app/services/destroy.service';
import { HistoryService } from '@app/services/history.service';
import { ErrorComponent } from '@app/views/_components/error/error.component';
import { Comment } from '@app/views/main/_interfaces/blog';
import { User } from '@app/views/main/_interfaces/user';
import { UserService } from '@app/views/main/_services/user.service';
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
    private userService: UserService,
    private authenticationService: AuthenticationService,) {
  }

  ngOnInit(): void {
    this.authenticationService.user
      .pipe(takeUntil(this.destroy$))
      .subscribe(x => this.user = x);
    this.getComments();
  }

  getComments(): void {
    this.userService.getComments()
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
    this.userService.approveComment(id)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: () => {},
      error: error => {
        this.error = `${error.status}`;
      }
    });
  }

  deleteComment(id: number) {
    this.userService.deleteComment(id)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: () => {},
      error: error => {
        this.error = `${error.status}`;
      }
    });
  }
}