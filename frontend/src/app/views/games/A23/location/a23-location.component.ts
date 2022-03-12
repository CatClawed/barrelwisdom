import { Location, ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Area, GatherNode, Region } from '@app/interfaces/a23';
import { A23Service } from '@app/services/a23.service';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { first, takeUntil } from 'rxjs/operators';

@Component({
    templateUrl: 'a23-location.component.html',
    providers: [DestroyService]
  })

  export class A23LocationComponent implements OnInit {
    pageForm: FormGroup;
    locationControl: FormControl;
    error: string = '';
    errorVars: any[];
    errorMsg: string;
    region: Region;
    filteredRegion: Area[];
    filteredNodes: GatherNode[];
    language: string;
    search: string = "";
    query: string = "";

    seoTitle: string;
    seoDesc: string;
    seoImage: string;
    seoURL: string;
  
    gameTitle: string;
    gameURL: string;
    imgURL: string;
  
    constructor(
      private route: ActivatedRoute,
      private readonly destroy$: DestroyService,
      private loc: Location,
      private router: Router,
      private a23service: A23Service,
      private seoService: SeoService,
      private viewportScroller: ViewportScroller,
      private formBuilder: FormBuilder,
    ) {
      this.locationControl = new FormControl();

      this.pageForm = this.formBuilder.group({
        filtertext: this.locationControl,
      })
    }

    ngOnInit(): void {
        this.language = this.route.snapshot.params.language;
        this.region = this.route.snapshot.data.loc;
        this.filteredRegion = this.region.areas;
        this.query = this.route.snapshot.queryParamMap.get('item');
        

          if(this.region.areas.length == 0 || !this.region) {
            this.error =`404`;
          }
          else {

            this.pageForm.get("filtertext").valueChanges
            .pipe(takeUntil(this.destroy$))
            .subscribe(filter => {
              this.filteredNodes = this.filterT(filter)
              this.search = filter;
            }
            );
            if (this.query) { this.pageForm.controls['filtertext'].patchValue(this.query); }

              this.gameTitle = this.a23service.gameTitle[this.language];
              this.gameURL = this.a23service.gameURL;
              this.imgURL = this.a23service.imgURL;
      
              this.seoURL = `${this.gameURL}/locations/${this.region.slug}/${this.language}`;
              this.seoTitle = `${this.region.name} - ${this.gameTitle}`;
              this.seoDesc = `All items in ${this.region.name}`
              this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, '');
          }

    }

    ngAfterViewInit(): void {
        this.route.fragment.pipe(
          first(), takeUntil(this.destroy$)
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

      private filterT(value: string): GatherNode[] {
        let nodeList: GatherNode[] = [];

        if(!value) {
          return nodeList;
        }
        const filterValue = value.toLowerCase();
        for (let area of this.region.areas) {
          for (let climate of area.climate) {
            for (let node of climate.nodes) {
              if (node.items.some(item => item.name.toLowerCase().includes(filterValue))) {
                nodeList.push(node)
              }
            }
          }
        }
        return nodeList;
      } 
    
      get f() { return this.pageForm.controls; }

      validNode(node: GatherNode): boolean {
        if (this.search.length === 0) return true;
        if (this.filteredNodes.indexOf(node) > -1) return true;
        return false;
      }
}