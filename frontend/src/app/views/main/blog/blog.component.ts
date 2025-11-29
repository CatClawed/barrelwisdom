import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AuthenticationService } from '@app/services/authentication.service';
import { BreadcrumbService } from '@app/services/breadcrumb.service';
import { DestroyService } from '@app/services/destroy.service';
import { HistoryService } from '@app/services/history.service';
import { SeoService } from '@app/services/seo.service';
import { CringeAdComponent } from '@app/views/_components/cringe/cringe.component';
import { Blog, Comment } from '@app/views/main/_interfaces/blog';
import { User } from '@app/views/main/_interfaces/user';
import { BlogService } from '@app/views/main/_services/blog.service';
import { MarkdownComponent, provideMarkdown } from 'ngx-markdown';
import { Observable, of } from 'rxjs';
import { catchError, switchMap, takeUntil, tap } from 'rxjs/operators';

@Component({
  templateUrl: 'blog.component.html',
  styleUrls: ['blog.scss'],
  providers: [DestroyService, provideMarkdown()],
  imports: [MatFormFieldModule, MatInputModule,
    ReactiveFormsModule, RouterLink, MarkdownComponent,
    CommonModule, CringeAdComponent,]
})

export class BlogComponent implements OnInit {
  user; //: User;
  blog: Blog;
  error: boolean = false;
  allowedToEdit = false;
  gameName = "";
  pageForm: UntypedFormGroup;
  success: boolean;
  blog$: Observable<Blog | null>;

  constructor(
    private route: ActivatedRoute,
    private readonly destroy$: DestroyService,
    public historyService: HistoryService,
    private blogService: BlogService,
    private authenticationService: AuthenticationService,
    private formBuilder: UntypedFormBuilder,
    protected breadcrumbService: BreadcrumbService,
    protected seoService: SeoService) {
    this.pageForm = this.formBuilder.nonNullable.group({
      name: "",
      comment: ""
    })
    this.user = this.authenticationService.userSignal;
  }

  ngOnInit(): void {


    this.blog$ = this.route.paramMap.pipe(
      switchMap(params => {
        if (/[A-Z]+/.test(params.get('title') + params.get('section'))) {
          this.blog = null;
          this.error = this.breadcrumbService.setStatus(404);;
          return of(undefined)
        }
        return this.blogService.getBlog(params.get('title'), params.get('section'))
          .pipe(
            tap(data => {
              this.setBlog(data);
            }),
            tap(() => this.error = this.breadcrumbService.setStatus(200)),
            catchError(error => {
              this.error = this.breadcrumbService.setStatus(error.status);
              return of(null);
            })
          );
      }),
      takeUntil(this.destroy$)
    )

  }

  newForm(parent: Comment): void {
    parent.form = this.formBuilder.nonNullable.group({
      name: "",
      comment: ""
    })
  }

  checkAuthor(commentAuthor: string) {
    return this.blog.author.includes(commentAuthor)
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
    this.gameName = (this.blog.section.name) ? `${this.blog.section.name} - ` : ""; // gotta make sure google sees the game name...
    if (this.user()) {
      if (this.blog.authorlock && this.user().username === this.blog.author[0]) {
        this.allowedToEdit = true;
      }
      else if (this.user().group === 'admin') {
        this.allowedToEdit = true;
      }
      else if (!this.blog.authorlock) {
        if (this.user().group === 'trusted' || this.blog.section.slug !== 'blog') {
          this.allowedToEdit = true;
        }
      }
    }
    if (this.blog.section.slug !== "blog") {
      this.breadcrumbService.setBreadcrumbs(
        [[this.blog.section.name, `/${this.blog.section.slug}`]],
        this.blog.title);
    }
    else {
      this.breadcrumbService.setBreadcrumbs(
        [],
        this.blog.title);
    }
    this.seoService.SEOSettings(
      `${this.blog.section.slug}/${this.blog.slug}`,
      this.blog.section.name ? `${this.blog.title} - ${this.blog.section.name}` : this.blog.title,
      this.blog.desc,
      this.blog.image
    );
  }
  lineBreak(str): string {
    return str.replace(/\n/g, '</br>');
  }
}