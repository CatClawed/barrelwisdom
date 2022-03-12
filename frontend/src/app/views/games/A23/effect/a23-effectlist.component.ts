import { Location } from '@angular/common';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Effect } from '@app/interfaces/a23';
import { A23Service } from '@app/services/a23.service';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';

@Component({
    templateUrl: 'a23-effectlist.component.html',
    providers: [DestroyService]
  })

  export class A23EffectlistComponent implements OnInit {
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
      private a23service: A23Service,
      private seoService: SeoService
    ) {

      this.effectControl = new FormControl();

      this.pageForm = this.formBuilder.group({
        filtertext: this.effectControl,
      })
    }
  
    ngOnInit(): void {
      this.language = this.route.snapshot.params.language;

      this.gameTitle = this.a23service.gameTitle[this.language];
      this.gameURL = this.a23service.gameURL;
      this.imgURL = this.a23service.imgURL;

      this.seoURL = `${this.gameURL}/effects/${this.language}`;
      this.seoTitle = `Effects - ${this.gameTitle}`;
      this.seoDesc = `The list of effects in ${this.gameTitle}.`
      this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
      this.getEffects();

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
      this.a23service.getEffectList(this.language)
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
      this.modalRef.onHide
      .pipe(takeUntil(this.destroy$))
      .subscribe((reason: string | any) => {
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
      return item.slug; 
   }
  }