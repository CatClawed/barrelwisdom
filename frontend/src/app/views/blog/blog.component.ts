import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Blog } from '@app/interfaces/blog';
import { User } from '@app/interfaces/user';
import { BlogService } from '@app/services/blog.service';
import { ErrorCodeService } from "@app/services/errorcode.service";
import { SafeHtml } from '@angular/platform-browser';
import { AuthenticationService } from '@app/services/authentication.service';
import { Section } from '@app/interfaces/section';
import { SectionService } from '@app/services/section.service';
import { MarkdownService } from 'ngx-markdown';

@Component({
    templateUrl: 'blog.component.html',
  })


  export class BlogComponent implements OnInit {
      user: User;
      blog: Blog;
      error: boolean = false;
      errorCode: string;
      errorVars: any[];
      body: SafeHtml;
      allowedToEdit = false;
      section: Section;
      gameName = "";

      constructor(
        private route: ActivatedRoute,
        private blogService: BlogService,
        private location: Location,
        private errorService: ErrorCodeService,
        private authenticationService: AuthenticationService,
        private sectionService: SectionService,
        private markdownService: MarkdownService,
      ) {  }

      ngOnInit(): void {
        this.authenticationService.user.subscribe(x => this.user = x);
        this.sectionService.getSectionByName(this.route.snapshot.params.section).subscribe(x => {
          this.section = x;
          this.gameName = (this.section.fullname) ? `${this.section.fullname} - ` : ""; // gotta make sure google sees the game name...
          this.getBlog(this.section.id, this.route.snapshot.params.title);
        },
        error => { 
          this.error = true;
          this.errorCode = error.status.toString();
          this.errorVars = this.errorService.getCodes(this.errorCode);
        });
      }

      getBlog(section: Number, title: string): void {
        this.blogService.getBlog(title, section)
          .subscribe(blog => { 
            if(blog.length == 0) {
              this.error = true;
              this.errorCode = "404";
              this.errorVars = this.errorService.getCodes(this.errorCode);
            }
            else {

              this.blog = blog[0];
              this.body = this.markdownService.compile(this.blog.body);
              if(this.user) {
                if(this.blog.authorlock && this.user.id == this.blog.author[0].id) {
                  this.allowedToEdit = true;
                }
                else if(this.user.group == 'admin') {
                  this.allowedToEdit = true;
                }
                else if(!this.blog.authorlock) {
                  if(this.user.group == 'trusted' || this.section.name != 'blog') {
                    this.allowedToEdit = true;
                  }
                }
              }
            }
            },
            error => { 
                this.error = true;
                this.errorCode = error.status.toString();
                this.errorVars = this.errorService.getCodes(this.errorCode);
              }
            );
      }
  }