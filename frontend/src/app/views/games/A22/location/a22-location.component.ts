import { Location, ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Region } from '@app/interfaces/a22';
import { A22Service } from '@app/services/a22.service';
import { SeoService } from '@app/services/seo.service';
import { first } from 'rxjs/operators';

@Component({
    templateUrl: 'a22-location.component.html',
  })

  export class A22LocationComponent implements OnInit {
    error: string = '';
    errorVars: any[];
    errorMsg: string;
    region: Region;
    language: string;
    dig = true;

    seoTitle: string;
    seoDesc: string;
    seoImage: string;
    seoURL: string;
  
    gameTitle: string;
    gameURL: string;
    imgURL: string;
  
    constructor(
      private route: ActivatedRoute,
      private loc: Location,
      private router: Router,
      private a22service: A22Service,
      private seoService: SeoService,
      private viewportScroller: ViewportScroller
    ) { 
    }

    ngOnInit(): void {
        this.language = this.route.snapshot.params.language;
        this.region = this.route.snapshot.data.loc;

          if(this.region.areas.length == 0 || !this.region) {
            this.error =`404`;
          }
          else {
              for(let g of this.region.areas[0].gatherdata) {
                if(g.tool == 'Dig' ) {
                  this.dig = true;
                  break;
                }
                this.dig = false;
              }
              this.gameTitle = this.a22service.gameTitle[this.language];
              this.gameURL = this.a22service.gameURL;
              this.imgURL = this.a22service.imgURL;
      
              this.seoURL = `${this.gameURL}/locations/${this.region.slug}/${this.language}`;
              this.seoTitle = `${this.region.name} - ${this.gameTitle}`;
              this.seoDesc = `All items in ${this.region.name}`
              this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, '');
          }

    }

    ngAfterViewInit(): void {
        this.route.fragment.pipe(
          first()
        ).subscribe(fragment => this.viewportScroller.scrollToAnchor(fragment));
     }
     scroll(id: string) {
        this.loc.replaceState(`${this.gameURL}/locations/${this.region.slug}/${this.language}#${id}`);
        this.viewportScroller.scrollToAnchor(id);
     }

    scrollTo(fragment): void {
        this.router.navigate([], { fragment: fragment }).then(() => {
          const element = document.getElementById(fragment);
          if (element != undefined) element.scrollIntoView();
        });
      }
}