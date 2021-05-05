import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { Region, ItemArea, ItemNode } from '@app/interfaces/a22';
import { A22Service } from '@app/services/a22.service';
import { ErrorCodeService } from "@app/services/errorcode.service";
import { first } from 'rxjs/operators';
import { SeoService } from '@app/services/seo.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
    templateUrl: 'a22-location.component.html',
    selector: 'a22-location',
  })

  export class A22LocationComponent implements OnInit {
    error: boolean = false;
    errorCode: string;
    errorVars: any[];
    errorMsg: string;
    region: Region;
    language: string;
    dig = true;
  
    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private a22service: A22Service,
      private errorService: ErrorCodeService,
      private seoService: SeoService,
      private metaService: Meta,
      private titleService: Title,
      private viewportScroller: ViewportScroller
    ) { 
    }

    ngOnInit(): void {
        this.language = this.route.snapshot.params.language;
        this.getLocation();
    }

    ngAfterViewInit(): void {
        this.route.fragment.pipe(
          first()
        ).subscribe(fragment => this.viewportScroller.scrollToAnchor(fragment));
      }

    getLocation() {
        this.a22service.getLocation(this.route.snapshot.params.location, this.language).subscribe(location => {
            this.region = location;
            if(!this.region.areas) {
              this.error = true;
            }
            else {
                for(let g of this.region.areas[0].gatherdata) {
                  if(g.tool == 'Dig' ) {
                    this.dig = true;
                    break;
                  }
                  this.dig = false;
                }
              this.seoService.createCanonicalURL(`ryza2/${this.region.slugname}/${this.language}`);
              this.titleService.setTitle(`${this.region.name} - Atelier Ryza 2 - Barrel Wisdom`);
              this.metaService.updateTag({ name: `robots`, content: `index, archive` },`name="robots"`);
              this.metaService.updateTag({ name: `description`, content: `All gathering info about ${this.region.name}.` }, `name="description"`);
              this.metaService.updateTag({ property: `og:title`, content: `${this.region.name}` }, `property="og:title"`);
              this.metaService.updateTag({ property: `og:description`, content: `All gathering info about ${this.region.name}.` },`property="og:description"`);
              this.metaService.updateTag({ property: `og:type`, content: `webpage` }, `property="og:type"`);
              this.metaService.updateTag({ property: `og:image`, content: `https://media.barrelwisdom.com/file/barrelwisdom/main/barrel.png` }, `property="og:image"`);
            }
        },
        error => {
            this.error = true,
            this.errorCode = error.status.toString(),
            this.errorVars = this.errorService.getCodes(this.errorCode)
        });
    }

    scrollTo(fragment): void {
        this.router.navigate([], { fragment: fragment }).then(res => {
          const element = document.getElementById(fragment);
          if (element != undefined) element.scrollIntoView();
        });
      }

}