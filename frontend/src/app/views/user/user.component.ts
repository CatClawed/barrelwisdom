import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserProfile } from '@app/interfaces/user';
import { UserService } from '@app/services/user.service';

@Component({
  templateUrl: 'user.component.html',
})

export class UserComponent implements OnInit {
  userprofile: UserProfile;
  error: string = '';
  errorVars: any[];

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,

  ) { }

  ngOnInit(): void {
    this.userService.getUserProfile(this.route.snapshot.params.username)
      .subscribe({
        next: x => {
          this.userprofile = x
        },
        error: error => {
          this.error =`${error.status}`;
        }});
  }
}