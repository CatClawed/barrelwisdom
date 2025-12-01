import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
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
import { BlogService } from '@app/views/main/_services/blog.service';
import { MarkdownComponent, provideMarkdown } from 'ngx-markdown';
import { Observable, of } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';

@Component({
  templateUrl: 'blog.component.html',
  styleUrls: ['blog.scss'],
  providers: [DestroyService, provideMarkdown()],
  imports: [MatFormFieldModule, MatInputModule,
    ReactiveFormsModule, RouterLink, MarkdownComponent,
    CommonModule, CringeAdComponent,]
})

export class BlogComponent {
  private destroyRef = inject(DestroyRef);
  private cdr = inject(ChangeDetectorRef)
  private route = inject(ActivatedRoute)
  public historyService = inject(HistoryService)
  private blogService = inject(BlogService)
  private authenticationService = inject(AuthenticationService)
  private formBuilder = inject(UntypedFormBuilder)
  protected breadcrumbService = inject(BreadcrumbService)
  protected seoService = inject(SeoService)

  user = this.authenticationService.userSignal;
  //blog: Blog;
  error: boolean = false;
  allowedToEdit = signal<boolean>(false);
  pageForm: UntypedFormGroup = this.formBuilder.nonNullable.group({
    name: "",
    comment: ""
  })
  id: number = null;
  success: boolean;
  blog$: Observable<Blog | null> = this.route.paramMap.pipe(
      switchMap(params => {
        if (/[A-Z]+/.test(params.get('title') + params.get('section'))) {
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
    )

  newForm(parent: Comment): void {
    parent.form = this.formBuilder.nonNullable.group({
      name: "",
      comment: ""
    })
  }

  postComment(parent?: Comment): void {
    const sourceForm = parent?.form ?? this.pageForm;
    const body = sourceForm.controls['comment'].value;
    const name = sourceForm.controls['name'].value
    const parentId: number | undefined = parent?.id;
    if (parent) {
      parent.success = undefined;
    } else {
      this.success = undefined;
    }

    this.blogService.postComment(body, this.id, name, parentId)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () => {
          if (parent) {
            this.switchState(parent);
            parent.success = true;
          }
          else {
            this.success = true;
          }
          this.cdr.markForCheck()
        },
        error: () => {
          if (parent) {
            parent.success = false;
          }
          else {
            this.success = false
          }
          this.cdr.markForCheck()
        }
      });
  }

  switchState(parent: Comment): void {
    parent.open = false;
  }

  setBlog(blog) {
    this.id = blog.id;
    if (this.user()) {
      if (blog.authorlock && this.user().username === blog.author[0]) {
        this.allowedToEdit.set(true);
      }
      else if (this.user().group === 'admin') {
        this.allowedToEdit.set(true);
      }
      else if (!blog.authorlock) {
        if (this.user().group === 'trusted' || blog.section.slug !== 'blog') {
          this.allowedToEdit.set(true);
        }
      }
      this.cdr.detectChanges();
    }
    if (blog.section.slug !== "blog") {
      this.breadcrumbService.setBreadcrumbs(
        [[blog.section.name, `/${blog.section.slug}`]],
        blog.title);
    }
    else {
      this.breadcrumbService.setBreadcrumbs(
        [],
        blog.title);
    }
    this.seoService.SEOSettings(
      `${blog.section.slug}/${blog.slug}`,
      blog.section.name ? `${blog.title} - ${blog.section.name}` : blog.title,
      blog.desc,
      blog.image
    );
  }
  lineBreak(str): string {
    return str.replace(/\n/g, '</br>');
  }
}