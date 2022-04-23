import { Component, OnInit } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Blog } from '@app/interfaces/blog';
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

  constructor(
    private route: ActivatedRoute,
    private readonly destroy$: DestroyService,
    public historyService: HistoryService,
    private blogService: BlogService,
    private authenticationService: AuthenticationService,
    private markdownService: MarkdownService,
    private seoService: SeoService) {
  }

  ngOnInit(): void {
    this.authenticationService.user.pipe(takeUntil(this.destroy$)).subscribe(x => this.user = x);
    this.route.paramMap.pipe(takeUntil(this.destroy$))
      .subscribe(params => {
        this.getBlog(params.get('section'), params.get('title'));
      });
  }

  getBlog(section: string, title: string): void {
    this.blogService.getBlog(title, section)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: blog => {
          this.error = ``;
          this.blog = blog;
          this.gameName = (this.blog.section.fullname) ? `${this.blog.section.fullname} - ` : ""; // gotta make sure google sees the game name...
          this.body = this.markdownService.compile(this.blog.body);
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
}