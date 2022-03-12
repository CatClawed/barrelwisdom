import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FragmentEffect } from '@app/interfaces/br1';
import { BR1Service } from '@app/services/br1.service';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Observable } from 'rxjs';
import { first, map, startWith, takeUntil } from 'rxjs/operators';

@Component({
    templateUrl: 'br1-fragmentlist.component.html',
    providers: [DestroyService]
  })

  export class BR1FragmentEffectlistComponent implements OnInit {
    pageForm: FormGroup;
    fragmenteffectControl: FormControl;
    error: string = '';
    errorVars: any[];
    errorMsg: string;
    fragmenteffect: string = "fragmenteffects";
    fragmenteffects: FragmentEffect[];
    filteredFragmentEffects: Observable<FragmentEffect[]>;
    language = "";    

    seoTitle: string;
    seoDesc: string;
    seoImage: string;
    seoURL: string;

    gameTitle: string;
    gameURL: string;
    imgURL: string;
  
    constructor(
      private formBuilder: FormBuilder,
      private readonly destroy$: DestroyService,
      private route: ActivatedRoute,
      private br1service: BR1Service,
      private seoService: SeoService,
      private viewportScroller: ViewportScroller
    ) { 
      this.fragmenteffectControl = new FormControl();

      this.pageForm = this.formBuilder.group({
        filtertext: this.fragmenteffectControl
      })
    }
  
    ngOnInit(): void {
  
      this.language = this.route.snapshot.params.language;
  
      this.getFragmentEffects();

      this.gameTitle = this.br1service.gameTitle;
      this.gameURL = this.br1service.gameURL;
      this.imgURL = this.br1service.imgURL;

      this.seoURL = `${this.gameURL}/fragment-effects/${this.language}`;
      this.seoTitle = `Fragment Effects - ${this.gameTitle}`;
      this.seoDesc = `The list of fragment effects in ${this.gameTitle}.`
      this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
    }

    ngAfterViewInit(): void {
      this.route.fragment.pipe(
        first(), takeUntil(this.destroy$)
      ).subscribe(fragment => this.viewportScroller.scrollToAnchor(fragment));
    }
  
    getFragmentEffects() {
      this.br1service.getFragmentEffectList(this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({next: fragmenteffects => {
        this.fragmenteffects = fragmenteffects;
        this.filteredFragmentEffects = this.pageForm.valueChanges.pipe(
          startWith(null as Observable<FragmentEffect[]>),
          map((search: any) => search ? this.filterT(search.filtertext) : this.fragmenteffects.slice())
        );
      },
      error: error => {
        this.error =`${error.status}`;
        
      }});
    }
  
    private filterT(value: string): FragmentEffect[] {
      let list: FragmentEffect[] = this.fragmenteffects;
      if(value) {
        const filterValue = value.toLowerCase();
        return list.filter(fragmenteffect => { 
            return fragmenteffect.name.toLowerCase().includes(filterValue);
          });
      }
      return list;
    } 
  
    get f() { return this.pageForm.controls; }

    identify(index, item){
      return item.slugname;
   }
  }