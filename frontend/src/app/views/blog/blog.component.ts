import { Component, OnInit, ElementRef, Inject, ViewChild, Renderer2, RendererFactory2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '@app/interfaces/blog';
import { User } from '@app/interfaces/user';
import { BlogService } from '@app/services/blog.service';
import { ErrorCodeService } from "@app/services/errorcode.service";
import {  SafeHtml } from '@angular/platform-browser';
import { AuthenticationService } from '@app/services/authentication.service';
import { MarkdownService } from 'ngx-markdown';
import { SeoService } from '@app/services/seo.service';
import { HistoryService } from '@app/services/history.service';
import { AppComponent } from '@app/app.component';
import { DOCUMENT } from '@angular/common';
import { environment } from '@environments/environment';

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
      gameName = "";
      breadcrumbs = [["Barrel Wisdom", "/"]];
      blogParam = '';
      renderer: Renderer2;

      constructor(
        private route: ActivatedRoute,
        public historyService: HistoryService,
        private blogService: BlogService,
        private errorService: ErrorCodeService,
        private authenticationService: AuthenticationService,
        private markdownService: MarkdownService,
        private seoService: SeoService,
        private rendererFactory: RendererFactory2,
        @Inject(DOCUMENT) private dom,) {
          this.renderer = this.rendererFactory.createRenderer(null, null);
      }


      ngOnInit(): void {
        this.authenticationService.user.subscribe(x => this.user = x);   
        this.route.paramMap.subscribe(params => {
          this.getBlog(params.get('section'), params.get('title'));
        }); 
      }

  ngAfterViewInit(): void {
    this.route.paramMap.subscribe(params => {
      let element = this.dom.querySelector('div[id="comment"]')
      if (element) {
        let child = this.dom.querySelector('div[id="commento"]')
        this.renderer.removeChild(element, child);
        let d = this.renderer.createElement('div');
        d.id = "commento"
        this.renderer.appendChild(element, d)
      }
      element = this.dom.querySelector(`script[src="${environment.commentoUrl}/js/commento.js"]`);
      if (element) {
        this.renderer.removeChild(this.dom.head, element);
      }
      element = this.dom.querySelector(`link[href="${environment.commentoUrl}/css/commento.css"]`)
      if (element) {
        this.renderer.removeChild(this.dom.head, element);
      }

      AppComponent.isBrowser.subscribe(isBrowser => {
        if (isBrowser) {
          let s = this.renderer.createElement('script');
          s.src = `${environment.commentoUrl}/js/commento.js`;
          s.defer = true;
          this.renderer.appendChild(this.dom.head, s);
        }
      });
    });
  }


      getBlog(section: string, title: string): void {
        this.blogService.getBlog(title, section)
          .subscribe(blog => { 
              this.error = false;
              this.blog = blog;
              this.gameName = (this.blog.section.fullname) ? `${this.blog.section.fullname} - ` : ""; // gotta make sure google sees the game name...
              this.body = this.markdownService.compile(this.blog.body);
              if(this.user) {
                if(this.blog.authorlock && this.user.id == this.blog.author[0].id) {
                  this.allowedToEdit = true;
                  this.blogParam = `{ id : ${this.blog.id} }`;
                }
                else if(this.user.group == 'admin') {
                  this.allowedToEdit = true;
                }
                else if(!this.blog.authorlock) {
                  if(this.user.group == 'trusted' || this.blog.section.name != 'blog') {
                    this.allowedToEdit = true;
                  }
                }
              }
              if(this.breadcrumbs.length > 1) {
                this.breadcrumbs.pop();
              }
              if(section != "blog") {
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
            error => { 
                this.error = true;
                this.errorCode = `${error.status}`;
                this.errorVars = this.errorService.getCodes(this.errorCode);
              }
            );
      }
  }