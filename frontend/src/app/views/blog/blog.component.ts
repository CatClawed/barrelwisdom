import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Blog } from '../../interfaces/blog';
import { BlogService } from '../../services/blog.service';
import { ErrorCodeService } from "../../services/errorcode.service";
import { title } from 'process';
import { throwError } from 'rxjs';


@Component({
    templateUrl: 'blog.component.html'
  })


  export class BlogComponent implements OnInit {
      blog: Blog;
      error: boolean = false;
      errorCode: string;
      errorVars: any[];

      constructor(
        private route: ActivatedRoute,
        private blogService: BlogService,
        private location: Location,
        private errorService: ErrorCodeService
      ) {  }

      ngOnInit(): void {
        this.getBlog(this.route.snapshot.params.title);
      }

      getBlog(title: string): void {

        this.blogService.getBlog(title)
          .subscribe(blog => { 
              this.blog = blog[0],
              this.error = (this.blog == null) ? true : false,
              this.errorCode = (this.error) ? "404" : "THIS IS A BUG",
              this.errorVars = this.errorService.getCodes(this.errorCode)
            },
            error => { 
                this.error = true,
                this.errorCode = error.status.toString(),
                this.errorVars = this.errorService.getCodes(this.errorCode)
              }
            );
      }
  }