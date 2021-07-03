import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FragmentEffect } from '@app/interfaces/br1';
import { BR1Service } from '@app/services/br1.service';
import { HistoryService} from '@app/services/history.service';
import { ErrorCodeService } from "@app/services/errorcode.service";
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { SeoService } from '@app/services/seo.service';
import { ViewportScroller } from '@angular/common';
import { first } from 'rxjs/operators';

@Component({
    templateUrl: 'br1-fragmentlist.component.html',
    selector: 'br1-fragmentlist',
  })

  export class BR1FragmentEffectlistComponent implements OnInit {
    pageForm: FormGroup;
    fragmenteffectControl: FormControl;
    error: boolean = false;
    errorCode: string;
    errorVars: any[];
    errorMsg: string;
    fragmenteffect: string = "fragmenteffects";
    fragmenteffects: FragmentEffect[];
    filteredFragmentEffects: Observable<FragmentEffect[]>;
    searchstring = "";
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
      private route: ActivatedRoute,
      private br1service: BR1Service,
      public historyService: HistoryService,
      private errorService: ErrorCodeService,
      private seoService: SeoService,
      private viewportScroller: ViewportScroller
    ) { 
      this.fragmenteffectControl = new FormControl();
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
  
      this.pageForm = this.formBuilder.group({
        filtertext: this.fragmenteffectControl
      })
  
      this.fragmenteffectControl.valueChanges.subscribe(search => {
        this.searchstring = search; 
      });  
    }

    ngAfterViewInit(): void {
      this.route.fragment.pipe(
        first()
      ).subscribe(fragment => this.viewportScroller.scrollToAnchor(fragment));
    }
  
    getFragmentEffects() {
      this.br1service.getFragmentEffectList(this.language)
      .subscribe(fragmenteffects => {
        this.fragmenteffects = fragmenteffects;
        this.filteredFragmentEffects = this.pageForm.valueChanges.pipe(
          startWith(null as Observable<FragmentEffect[]>),
          map((search: string | null) => search ? this.filterT(this.searchstring) : this.fragmenteffects.slice())
        );
      },
      error => {
        this.error = true;
        this.errorCode = `${error.status}`;
        this.errorVars = this.errorService.getCodes(this.errorCode);
      });
    }
  
    private filterT(value: string): FragmentEffect[] {
  
      const filterValue = value.toLowerCase();
      let list: FragmentEffect[] = this.fragmenteffects;

      if(value.length > 0) {
        list = list.filter(fragmenteffect => { 
            return fragmenteffect.name.toLowerCase().includes(filterValue);
          });
      }

      return list;
    } 
  
    get f() { return this.pageForm.controls; }
  
  }