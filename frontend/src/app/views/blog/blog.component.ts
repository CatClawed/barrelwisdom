import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2, RendererFactory2 } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Blog } from '@app/interfaces/blog';
import { User } from '@app/interfaces/user';
import { AuthenticationService } from '@app/services/authentication.service';
import { BlogService } from '@app/services/blog.service';
import { HistoryService } from '@app/services/history.service';
import { SeoService } from '@app/services/seo.service';
import { WINDOW } from '@app/services/window.service';
import { environment } from '@environments/environment';
import { MarkdownService } from 'ngx-markdown';
import { takeUntil } from 'rxjs/operators';
import { DestroyService } from '@app/services/destroy.service';

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
  blogParam = '';
  renderer: Renderer2;
  change = false;
  s;
  backup = false;

  constructor(
    private route: ActivatedRoute,
    private readonly destroy$: DestroyService,
    public historyService: HistoryService,
    private blogService: BlogService,
    private authenticationService: AuthenticationService,
    private markdownService: MarkdownService,
    private seoService: SeoService,
    private rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) private dom,
    @Inject(WINDOW) private window) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }


  ngOnInit(): void {
    this.authenticationService.user.pipe(takeUntil(this.destroy$)).subscribe(x => this.user = x);
    this.route.paramMap.pipe(takeUntil(this.destroy$))
      .subscribe(params => {
        this.change = false;
        this.backup = false;
        this.window.commento = {}
        this.getBlog(params.get('section'), params.get('title'));
      });
  }

  ngAfterViewInit(): void {
    this.route.paramMap.subscribe(() => {
      if (this.window.commento.main !== 'function') {
        setTimeout(() => { // probably not necessary, who cares
          this.resetDiv();
          this.removeCSS();
          this.removeScript();
        })

        this.s = this.renderer.createElement('script');
        this.s.defer = true;
        this.renderer.setAttribute(this.s, 'data-auto-init', 'false')
        this.s.src = `${environment.commentoUrl}/js/commento.js`;
        this.renderer.appendChild(this.dom.head, this.s);

      }
    });
  }

  ngAfterViewChecked(): void {
    let element = this.dom.querySelectorAll('div[id="commento-main-area"]');

    if (element.length === 0 && typeof this.window.commento.main === "function" && !this.change) {
      this.window.commento.main();
      this.change = true;
    }
    // don't even question it, I give up for now
    else if (element.length === 0 && typeof this.window.commento.main === "function" && this.change && !this.backup) {
      this.window.commento.main();
      this.backup = true;
    }
  }


  resetDiv() {
    let element = this.dom.querySelector('div[id="comment"]')
    if (element) {
      let child = this.dom.querySelector('div[id="commento"]')
      this.renderer.removeChild(element, child);
      let d = this.renderer.createElement('div');
      d.id = "commento"
      this.renderer.appendChild(element, d)
    }
  }

  insertScript() {
    let s = this.renderer.createElement('script');
    s.src = `${environment.commentoUrl}/js/commento.js`;
    s.defer = true;
    this.renderer.appendChild(this.dom.head, s);
  }


  removeScript() {
    let element = this.dom.querySelectorAll(`script[src="${environment.commentoUrl}/js/commento.js"]`);
    for (let e of element) {
      this.renderer.removeChild(this.dom.head, e)
    }
  }

  removeCSS() {
    let element = this.dom.querySelectorAll(`link[href="${environment.commentoUrl}/css/commento.css"]`)
    for (let e of element) {
      this.renderer.removeChild(this.dom.head, e);
    }
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
              this.blogParam = `{ id : ${this.blog.id} }`;
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