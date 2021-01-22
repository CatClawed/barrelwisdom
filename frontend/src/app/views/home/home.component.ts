import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { BlogPaginator } from '../../interfaces/blog';
import { BlogPaginatorService } from '../../services/blog-paginator.service';
import { ErrorCodeService } from "../../services/errorcode.service";


@Component({
    templateUrl: 'home.component.html'
  })


  export class HomeComponent implements OnInit {
      blog: BlogPaginator;
      path: number;
      limit: number;
      pagecount: number;
      error: boolean = false;
      errorCode: string;
      errorVars: any[];

      constructor(
        private route: ActivatedRoute,
        private blogService: BlogPaginatorService,
        private location: Location,
        private errorService: ErrorCodeService
      ) {
          if(this.location.path().substring(1))
          {
            this.path = parseInt(this.location.path().substring(1), 10);
          }
          else
          {
            this.path = 1;
          }

          this.limit = 10;
        }

      ngOnInit(): void {
        this.getBlog(this.path, this.limit);
      }

      getBlog(num: number, limit: number): void {

        this.blogService.getBlog(num, limit)
          .subscribe(blog =>
            {
              this.blog = blog;
              this.error = (this.blog.results.length === 0) ? true : false,
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

      setPagecount(num: number): void {
        this.pagecount = num;
      }
  }