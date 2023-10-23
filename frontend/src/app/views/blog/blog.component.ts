import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Blog, Comment } from '@app/interfaces/blog';
import { User } from '@app/interfaces/user';
import { AuthenticationService } from '@app/services/authentication.service';
import { BlogService } from '@app/services/blog.service';
import { DestroyService } from '@app/services/destroy.service';
import { HistoryService } from '@app/services/history.service';
import { SeoService } from '@app/services/seo.service';
import { MarkdownService } from 'ngx-markdown';
import { takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'blog.component.html',
  providers: [DestroyService]
})

export class BlogComponent implements OnInit {
  user: User;
  blog: Blog;
  error: string = '';
  body: SafeHtml;
  allowedToEdit = false;
  gameName = "";
  breadcrumbs = [];
  pageForm: UntypedFormGroup;
  fakeComment: Comment = null;
  success: boolean;

  constructor(
    private route: ActivatedRoute,
    private readonly destroy$: DestroyService,
    public historyService: HistoryService,
    private blogService: BlogService,
    private authenticationService: AuthenticationService,
    private formBuilder: UntypedFormBuilder,
    private markdownService: MarkdownService,
    protected seoService: SeoService) {
      this.pageForm = this.formBuilder.nonNullable.group({
        name: "",
        comment: ""
      })
  }

  ngOnInit(): void {
    this.authenticationService.user.pipe(takeUntil(this.destroy$)).subscribe(x => this.user = x);
    this.route.paramMap.pipe(takeUntil(this.destroy$))
      .subscribe(params => {
        this.getBlog(params.get('section'), params.get('title'));
      });
  }

  newForm(parent: Comment): void {
    parent.form = this.formBuilder.nonNullable.group({
      name: "",
      comment: ""
    })
  }

  postComment(parent?: Comment): void {
    let body = this.pageForm.controls['comment'].value;
    let name = this.pageForm.controls['name'].value
    let id = undefined
    if(parent !== undefined) {
      body = parent.form.controls['comment'].value;
      name = parent.form.controls['name'].value;
      id = parent.id
    }

    this.blogService.postComment(body, this.blog.id, name, id)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: () => {
        if(parent) {
          this.switchState(parent);
          parent.success = true;
        }
        else {
          this.success = true;
        }
      },
      error: error => {
        if(parent) {
          parent.success = false;
        }
        else {
          this.success = false
        }
      }
    });
  }

  switchState(parent: Comment): void {
    parent.open = false;
  }

  getBlog(section: string, title: string): void {
    this.blogService.getBlog(title, section)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: blog => {
          this.error = ``;
          this.blog = blog;
          this.gameName = (this.blog.section.fullname) ? `${this.blog.section.fullname} - ` : ""; // gotta make sure google sees the game name...
          this.body = this.markdownService.parse(this.blog.body);
          if (this.user) {
            if (this.blog.authorlock && this.user.id == this.blog.author[0].id) {
              this.allowedToEdit = true;
            }
            else if (this.user.group == 'admin') {
              this.allowedToEdit = true;
            }
            else if (!this.blog.authorlock) {
              if (this.user.group == 'trusted' || this.blog.section.name != 'blog') {
                this.allowedToEdit = true;
              }
            }
          }
          if (this.breadcrumbs.length > 0) {
            this.breadcrumbs.pop();
          }
          if (section != "blog") {
            this.seoService.SEOSettings(
              `${this.blog.section.name}/${this.blog.slugtitle}`,
              `${this.blog.title} - ${this.blog.section.fullname}`,
              this.blog.description,
              this.blog.image
            );
            this.breadcrumbs.push([this.blog.section.fullname, '/' + this.blog.section.name])
          }
          else {
            this.seoService.SEOSettings(
              `${this.blog.section.name}/${this.blog.slugtitle}`,
              this.blog.title,
              this.blog.description,
              this.blog.image
            );
          }
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
  lineBreak(str): string {
    return str.replace(/\n/g, '</br>');
  }
}