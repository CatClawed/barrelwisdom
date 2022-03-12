import { Location } from '@angular/common';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Effect } from '@app/interfaces/a22';
import { A22Service } from '@app/services/a22.service';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';

@Component({
    templateUrl: 'a22-effectlist.component.html',
    providers: [DestroyService]
  })

  export class A22EffectlistComponent implements OnInit {
    modalRef: BsModalRef;
    pageForm: FormGroup;
    effectControl: FormControl;
    error: string = '';
    effect: string = "effect";
    effects: Effect[];
    filteredEffects: Observable<Effect[]>;
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
      private readonly destroy$: DestroyService,
      private router: Router,
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private location: Location,
      private a22service: A22Service,
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

      this.route.data
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
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

      let modalLink = this.router.events
      .subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.modalService.setDismissReason('link');
          this.modalService.hide();
          modalLink.unsubscribe();
        }
      });
    }
  
    getEffects() {
      this.a22service.getEffectList(this.language, this.ev, this.forge)
      .pipe(takeUntil(this.destroy$))
      .subscribe({next: effects => {
        this.effects = effects;
        this.filteredEffects = this.pageForm.valueChanges.pipe(
          startWith(null as Observable<Effect[]>),
          map((search: any) => search ? this.filterT(search.filtertext, search.type) : this.effects.slice())
        );
      },
      error: error => {
        this.error =`${error.status}`;
      }});
    }
  
    openModal(template: TemplateRef<any>, slug: string, event?) {
      if (event) {
        if(event.ctrlKey) {
          return;
        }
        else {
          event.preventDefault()
        }
      }
      this.effect = slug;
      this.location.go(`${this.gameURL}/effects/` + slug + "/" + this.language);
      this.modalRef = this.modalService.show(template);
      this.modalRef.onHide
      .pipe(takeUntil(this.destroy$))
      .subscribe((reason: string | any) => {
        if(reason != "link") {
          if(this.normal) this.location.go(`${this.gameURL}/effects/` + this.language);
          if(this.forge) this.location.go(`${this.gameURL}/forge-effects/` + this.language);
          if(this.ev) this.location.go(`${this.gameURL}/ev-effects/` + this.language);
          this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
        }})
    }
  
    private filterT(value: string, type: string): Effect[] {
      let effectlist: Effect[];
      switch(type) {
        case "2":
          effectlist = this.effects.filter(effect => effect.effsub == 'Weapon');
          break;
        case "3":
          effectlist = this.effects.filter(effect => effect.effsub == "Armor");
          break;
        case "4":
          effectlist = this.effects.filter(effect => effect.effsub == "Accessory");
          break;
        case "5":
          effectlist = this.effects.filter(effect => effect.effsub == "Attack");
          break;
        case "6":
          effectlist = this.effects.filter(effect => effect.effsub == "Material");
          break;
        case "7":
          effectlist = this.effects.filter(effect => effect.effsub == "Heal");
          break;
        default:
          effectlist = this.effects; 
          break;
      }

      if(!value) {
        return effectlist;
      }
      const filterValue = value.toLowerCase();
      return effectlist.filter(effect => { 
          return (effect.desc) ? effect.name.toLowerCase().includes(filterValue) ||  effect.desc.toLowerCase().includes(filterValue) : effect.name.toLowerCase().includes(filterValue)
        });
    } 
  
    get f() { return this.pageForm.controls; }

    identify(index, item){
      return item.slug; 
   }
  }