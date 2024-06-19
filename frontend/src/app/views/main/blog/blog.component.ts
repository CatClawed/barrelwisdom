import { CommonModule } from '@angular/common';
import { Component, OnInit, SecurityContext } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AuthenticationService } from '@app/services/authentication.service';
import { BreadcrumbService } from '@app/services/breadcrumb.service';
import { DestroyService } from '@app/services/destroy.service';
import { HistoryService } from '@app/services/history.service';
import { SeoService } from '@app/services/seo.service';
import { Blog, Comment } from '@app/views/main/_interfaces/blog';
import { User } from '@app/views/main/_interfaces/user';
import { BlogService } from '@app/views/main/_services/blog.service';
import { MarkdownComponent, MarkdownPipe, MarkdownService, provideMarkdown } from 'ngx-markdown';
import { of } from 'rxjs';
import { catchError, switchMap, takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'blog.component.html',
  styleUrls: ['blog.scss'],
  providers: [DestroyService, provideMarkdown({sanitize: SecurityContext.NONE})],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule,
    ReactiveFormsModule, RouterLink, MarkdownComponent, MarkdownPipe,
    CommonModule]
})

export class BlogComponent implements OnInit {
  user: User;
  blog: Blog;
  error: boolean = false;
  body: SafeHtml;
  allowedToEdit = false;
  gameName = "";
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
    protected breadcrumbService: BreadcrumbService,
    protected seoService: SeoService) {
    this.pageForm = this.formBuilder.nonNullable.group({
      name: "",
      comment: ""
    })
  }

  ngOnInit(): void {
    this.authenticationService.user.pipe(takeUntil(this.destroy$)).subscribe(x => this.user = x);
    this.route.paramMap.pipe(
      switchMap(params => {
        return this.blogService.getBlog(params.get('title'), params.get('section'))
          .pipe(
            catchError(error => {
              this.blog = null;
              this.error = this.breadcrumbService.setStatus(error.status);
              return of(undefined)
            })
          )
      }),
      takeUntil(this.destroy$)
    )
      .subscribe(data => {
        if (data) {
          this.setBlog(data)
          this.error = this.breadcrumbService.setStatus(200);
        }
      });
  }

  newForm(parent: Comment): void {
    parent.form = this.formBuilder.nonNullable.group({
      name: "",
      comment: ""
    })
  }

  checkAuthor(commentAuthor: string) {
    return this.blog.author.filter(author => author.username === commentAuthor)
  }

  postComment(parent?: Comment): void {
    let body = this.pageForm.controls['comment'].value;
    let name = this.pageForm.controls['name'].value
    let id = undefined
    if (parent !== undefined) {
      body = parent.form.controls['comment'].value;
      name = parent.form.controls['name'].value;
      id = parent.id
    }

    this.blogService.postComment(body, this.blog.id, name, id)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => {
          if (parent) {
            this.switchState(parent);
            parent.success = true;
          }
          else {
            this.success = true;
          }
        },
        error: () => {
          if (parent) {
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

  setBlog(blog) {
    this.blog = blog;
    this.gameName = (this.blog.section.fullname) ? `${this.blog.section.fullname} - ` : ""; // gotta make sure google sees the game name...
    this.body = this.markdownService.parse(this.blog.body);
    if (this.user) {
      if (this.blog.authorlock && this.user.id === this.blog.author[0].id) {
        this.allowedToEdit = true;
      }
      else if (this.user.group === 'admin') {
        this.allowedToEdit = true;
      }
      else if (!this.blog.authorlock) {
        if (this.user.group === 'trusted' || this.blog.section.name !== 'blog') {
          this.allowedToEdit = true;
        }
      }
    }
    if (this.blog.section.name !== "blog") {
      this.breadcrumbService.setBreadcrumbs(
        [[this.blog.section.fullname, `/${this.blog.section.name}`]],
        this.blog.title);
    }
    else {
      this.breadcrumbService.setBreadcrumbs(
        [],
        this.blog.title);
    }
    this.seoService.SEOSettings(
      `${this.blog.section.name}/${this.blog.slug}`,
      this.blog.section.fullname ? `${this.blog.title} - ${this.blog.section.fullname}` : this.blog.title,
      this.blog.desc,
      this.blog.image
    );
  }
  lineBreak(str): string {
    return str.replace(/\n/g, '</br>');
  }
}