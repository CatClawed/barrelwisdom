import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { BlogPaginator } from './blog';
import { BlogService } from './blog.service';

@Component({
    templateUrl: 'home.component.html'
  })


  export class HomeComponent implements OnInit {
      blog: BlogPaginator;

      constructor(
        private route: ActivatedRoute,
        private blogService: BlogService,
        private location: Location
      ) {}

      ngOnInit(): void {
        this.getBlog();
      }

      getBlog(): void {

        this.blogService.getBlog()
          .subscribe(blog => this.blog = blog);
      }
  }