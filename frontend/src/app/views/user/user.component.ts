import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { UserProfile } from '@app/interfaces/user';
import { ErrorCodeService } from "@app/services/errorcode.service";
import { SectionService } from '@app/services/section.service';
import { MarkdownService } from 'ngx-markdown';
import { UserService } from '@app/services/user.service';

@Component({
    templateUrl: 'user.component.html',
  })


  export class UserComponent implements OnInit {
      userprofile: UserProfile;
      error: boolean = false;
      errorCode: string;
      errorVars: any[];

      constructor(
        private route: ActivatedRoute,
        private userService: UserService,
        private location: Location,
        private errorService: ErrorCodeService,
        private sectionService: SectionService,
        private markdownService: MarkdownService,
      ) {  }

      ngOnInit(): void {
        this.userService.getUserProfile(this.route.snapshot.params.username)
        .subscribe(x => {
            this.userprofile = x
         },
         error => { 
            this.error = true;
            this.errorCode = `${error.status}`;
            this.errorVars = this.errorService.getCodes(this.errorCode);
          });
      }
  }