import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { Effect } from '@app/interfaces/a22';
import { A22Service } from '@app/services/a22.service';
import { HistoryService } from '@app/services/history.service';
import { ErrorCodeService } from "@app/services/errorcode.service";
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { SeoService } from '@app/services/seo.service';

@Component({
    templateUrl: 'a22-effectlist.component.html',
    selector: 'a22-effectlist',
  })

  export class A22EffectlistComponent implements OnInit {
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
    normal = false;
    ev = false;
    forge = false;
  
    seoTitle: string;
    seoDesc: string;
    seoImage: string;
    seoURL: string;

    gameTitle: string;
    gameURL: string;
    imgURL: string;
  
    constructor(
      private modalService: BsModalService,
      private router: Router,
      public historyService: HistoryService,
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private location: Location,
      private a22service: A22Service,
      private errorService: ErrorCodeService,
      private seoService: SeoService
    ) {

      this.effectControl = new FormControl();

      this.pageForm = this.formBuilder.group({
        filtertext: this.effectControl,
        type: ['']
      })
    }
  
    ngOnInit(): void {
      this.language = this.route.snapshot.params.language;

      this.gameTitle = this.a22service.gameTitle[this.language];
      this.gameURL = this.a22service.gameURL;
      this.imgURL = this.a22service.imgURL;

      this.route.data.subscribe(data => {
        if(data.type == "normal") {
          this.normal = true;
          this.seoURL = `${this.gameURL}/effects/${this.language}`;
          this.seoTitle = `Effects - ${this.gameTitle}`;
          this.seoDesc = `The list of effects in ${this.gameTitle}.`
        }
        if(data.type == "forge") {
          this.forge = true;
          this.seoURL = `${this.gameURL}/forge-effects/${this.language}`;
          this.seoTitle = `Forge Effects - ${this.gameTitle}`;
          this.seoDesc = `The list of forge effects in ${this.gameTitle}.`
        }
        if(data.type == "ev") {
          this.ev = true;
          this.seoURL = `${this.gameURL}/ev-effects/${this.language}`;
          this.seoTitle = `Effects - ${this.gameTitle}`;
          this.seoDesc = `The list of EV effects in ${this.gameTitle}.`
        }
        this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
        this.getEffects();
      });  
      this.pageForm.get('type').valueChanges
        .subscribe(type => {
          this.currentType = type;
        });
  
      this.effectControl.valueChanges.subscribe(search => {
        this.searchstring = search;
      });

      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.modalService.setDismissReason('link');
          this.modalService.hide();
        }
      });
    }
  
    getEffects() {
      this.a22service.getEffectList(this.language, this.ev, this.forge)
      .subscribe(effects => {
        this.effects = effects;
        this.filteredEffects = this.pageForm.valueChanges.pipe(
          startWith(null as Observable<Effect[]>),
          map((search: string | null) => search ? this.filterT(this.searchstring, this.currentType) : this.effects.slice())
        );
      },
      error => {
        this.error = true;
        this.errorCode = `${error.status}`;
        this.errorVars = this.errorService.getCodes(this.errorCode);
      });
    }
  
    openModal(template: TemplateRef<any>, slug: string) {
      this.effect = slug;
      this.location.go(`${this.gameURL}/effects/` + slug + "/" + this.language);
      this.modalRef = this.modalService.show(template);
      this.modalRef.onHide.subscribe((reason: string | any) => {
        if(reason != "link") {
          if(this.normal) this.location.go(`${this.gameURL}/effects/` + this.language);
          if(this.forge) this.location.go(`${this.gameURL}/forge-effects/` + this.language);
          if(this.ev) this.location.go(`${this.gameURL}/ev-effects/` + this.language);
          this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
        }})
    }
  
    private filterT(value: string, type: string): Effect[] {
  
      const filterValue = value.toLowerCase();
      let effectlist: Effect[];
      switch(type) {
        case "2": {
          effectlist = this.effects.filter(effect => effect.effsub == 'Weapon');
          break;
        }
        case "3": {
          effectlist = this.effects.filter(effect => effect.effsub == "Armor");
          break;
        }
        case "4": {
          effectlist = this.effects.filter(effect => effect.effsub == "Accessory");
          break;
        }
        case "5": {
          effectlist = this.effects.filter(effect => effect.effsub == "Attack");
          break;
        }
        case "6": {
          effectlist = this.effects.filter(effect => effect.effsub == "Material");
          break;
        }
        case "7": {
          effectlist = this.effects.filter(effect => effect.effsub == "Heal");
          break;
        }
        default: {
          effectlist = this.effects; 
          break;
        }
      }

      if(value.length == 0) {
        return effectlist;
      }

      return effectlist.filter(effect => { 
          return (effect.desc) ? effect.name.toLowerCase().includes(filterValue) ||  effect.desc.toLowerCase().includes(filterValue) : effect.name.toLowerCase().includes(filterValue)
        });
    } 
  
    get f() { return this.pageForm.controls; }

  
  }