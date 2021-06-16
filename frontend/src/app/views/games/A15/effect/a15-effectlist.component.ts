import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { Effect } from '@app/interfaces/a15';
import { A15Service } from '@app/services/a15.service';
import { ErrorCodeService } from "@app/services/errorcode.service";
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { SeoService } from '@app/services/seo.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
    templateUrl: 'a15-effectlist.component.html',
    selector: 'a15-effectlist',
  })

  export class A15EffectlistComponent implements OnInit {
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
  
    constructor(
      private modalService: BsModalService,
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private location: Location,
      private a15service: A15Service,
      private errorService: ErrorCodeService,
      private seoService: SeoService,
      private metaService: Meta,
      private titleService: Title
    ) { 
      this.effectControl = new FormControl();
    }
  
    ngOnInit(): void {
  
      this.language = this.route.snapshot.params.language;
  
      this.getEffects();
      this.seoService.createCanonicalURL(`escha/effects/${this.language}`);
      this.titleService.setTitle(`Effects - Atelier Escha & Logy - Barrel Wisdom`);
      this.metaService.updateTag({ name: `robots`, content: `index, archive` },`name="robots"`);
      this.metaService.updateTag({ name: `description`, content: `The list of effects in Atelier Escha & Logy.` }, `name="description"`);
      this.metaService.updateTag({ property: `og:title`, content: `Effects` }, `property="og:title"`);
      this.metaService.updateTag({ property: `og:description`, content: `The list of effects in Atelier Escha & Logy.` },`property="og:description"`);
      this.metaService.updateTag({ property: `og:type`, content: `webpage` }, `property="og:type"`);
      this.metaService.updateTag({ property: `og:image`, content: `/media/main/barrel.png` }, `property="og:image"`);
  
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
      this.a15service.getEffectList(this.language)
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
      this.location.go('escha/effects/' + slugname + "/" + this.language);
      this.modalRef = this.modalService.show(template);
      this.modalRef.onHide.subscribe((reason: string | any) => {
          this.location.go('escha/effects/' + this.language);
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