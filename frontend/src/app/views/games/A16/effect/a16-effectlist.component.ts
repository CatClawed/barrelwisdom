import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { Effect } from '@app/interfaces/a16';
import { A16Service } from '@app/services/a16.service';
import { ErrorCodeService } from "@app/services/errorcode.service";
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { SeoService } from '@app/services/seo.service';

@Component({
    templateUrl: 'a16-effectlist.component.html',
    selector: 'a16-effectlist',
  })

  export class A16EffectlistComponent implements OnInit {
    modalRef: BsModalRef;
    pageForm: FormGroup;
    effectControl: FormControl;
    error: boolean = false;
    errorCode: string;
    errorVars: any[];
    errorMsg: string;
    effect: string = "effect";
    effects: Effect[];
    filteredEffects: Observable<Effect[]>;
    currentType: string = "1";
    searchstring = "";
    language = "";
    config: ModalOptions = { class: "col-md-5 mx-auto" };
  
    seoTitle: string;
    seoDesc: string;
    seoImage: string;
    seoURL: string;

    gameTitle: string;
    gameURL: string;
    imgURL: string;
  
    constructor(
      private modalService: BsModalService,
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private location: Location,
      private a16service: A16Service,
      private errorService: ErrorCodeService,
      private seoService: SeoService
    ) { 
      this.effectControl = new FormControl();
    }
  
    ngOnInit(): void {
  
      this.language = this.route.snapshot.params.language;
  
      this.getEffects();
      
      
      this.gameTitle = this.a16service.gameTitle;
      this.gameURL = this.a16service.gameURL;
      this.imgURL = this.a16service.imgURL;

      this.seoURL = `${this.gameURL}/effects/${this.language}`;
      this.seoTitle = `Effects - ${this.gameTitle}`;
      this.seoDesc = `The list of effects in ${this.gameTitle}.`
      this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
      this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
  
      this.pageForm = this.formBuilder.group({
        filtertext: this.effectControl,
        type: ['']
      })
  
      this.pageForm.get('type').valueChanges
        .subscribe(type => {
          this.currentType = type;
        });
  
      this.effectControl.valueChanges.subscribe(search => {
        this.searchstring = search;
      });
    }
  
    getEffects() {
      this.a16service.getEffectList(this.language)
      .subscribe(effects => {
        this.effects = effects;
        this.filteredEffects = this.pageForm.valueChanges.pipe(
          startWith(null as Observable<Effect[]>),
          map((search: string | null) => search ? this.filterT(this.searchstring, this.currentType) : this.effects.slice())
        );
      },
      error => {
        this.error = true,
        this.errorCode = error.status.toString(),
        this.errorVars = this.errorService.getCodes(this.errorCode)
      });
    }
  
    openModal(template: TemplateRef<any>, slugname: string) {
      this.effect = slugname;
      this.location.go(`${this.gameURL}/effects/` + slugname + "/" + this.language);
      this.modalRef = this.modalService.show(template);
      this.modalRef.onHide.subscribe((reason: string | any) => {
          this.location.go(`${this.gameURL}/effects/` + this.language);
          this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
        })
    }
    private filterT(value: string, type: string): Effect[] {
  
      const filterValue = value.toLowerCase();
      let effectlist: Effect[] = this.effects;

      if(value.length == 0) {
        return effectlist;
      }

      return effectlist.filter(effect => { 
          return (effect.desc) ? effect.name.toLowerCase().includes(filterValue) ||  effect.desc.toLowerCase().includes(filterValue) : effect.name.toLowerCase().includes(filterValue)
        });
    } 
  
    get f() { return this.pageForm.controls; }
  
  }