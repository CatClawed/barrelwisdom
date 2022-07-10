import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { Effect } from '@app/interfaces/a12';
import { A12Service } from '@app/services/a12.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { SeoService } from '@app/services/seo.service';
import { takeUntil } from 'rxjs/operators';
import { DestroyService } from '@app/services/destroy.service';

@Component({
    templateUrl: 'a12-effectlist.component.html',
    providers: [DestroyService]
  })

  export class A12EffectlistComponent implements OnInit {
    modalRef: BsModalRef;
    pageForm: FormGroup;
    effectControl: FormControl;
    error: string = '';
    effect: string = "effect";
    effects: Effect[];
    filteredEffects: Observable<Effect[]>;
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
      private readonly destroy$: DestroyService,
      private router: Router,
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private location: Location,
      private a12service: A12Service,
      protected seoService: SeoService
    ) { 
      this.effectControl = new FormControl();

      this.pageForm = this.formBuilder.group({
        filtertext: this.effectControl,
      })
    }
  
    ngOnInit(): void {
      this.language = this.route.snapshot.params.language;
  
      this.getEffects();
      
      this.gameTitle = this.a12service.gameTitle[this.language];
      this.gameURL = this.a12service.gameURL;
      this.imgURL = this.a12service.imgURL;

      this.seoURL = `${this.gameURL}/effects/${this.language}`;
      this.seoTitle = `Effects - ${this.gameTitle}`;
      this.seoDesc = `The list of effects in ${this.gameTitle}.`
      this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);

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
      this.a12service.getEffectList(this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({next: effects => {
        this.effects = effects;
        this.filteredEffects = this.pageForm.valueChanges.pipe(
          startWith(null as Observable<Effect[]>),
          map((search: any) => search ? this.filterT(search.filtertext) : this.effects.slice())
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
      this.modalRef.onHide.pipe(takeUntil(this.destroy$)).subscribe((reason: string | any) => {
        if(reason != "link") {
          this.location.go(`${this.gameURL}/effects/` + this.language);
          this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
        }})
    }
  
    private filterT(value: string): Effect[] {
      let effectlist: Effect[] = this.effects;
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
      return item.slugname;
   }
  }