import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { Effect } from '@app/interfaces/a22';
import { A22Service } from '@app/services/a22.service';
import { ErrorCodeService } from "@app/services/errorcode.service";
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { SeoService } from '@app/services/seo.service';
import { Meta, Title } from '@angular/platform-browser';

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
  
    constructor(
      private modalService: BsModalService,
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private location: Location,
      private a22service: A22Service,
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
      this.seoService.createCanonicalURL(`ryza2/effects/${this.language}`);
      this.titleService.setTitle(`Effects - Atelier Ryza 2 - Barrel Wisdom`);
      this.metaService.updateTag({ name: `robots`, content: `index, archive` },`name="robots"`);
      this.metaService.updateTag({ name: `description`, content: `The list of effects in Atelier Ryza 2.` }, `name="description"`);
      this.metaService.updateTag({ property: `og:title`, content: `Effects` }, `property="og:title"`);
      this.metaService.updateTag({ property: `og:description`, content: `The list of effects in Atelier Ryza 2.` },`property="og:description"`);
      this.metaService.updateTag({ property: `og:type`, content: `webpage` }, `property="og:type"`);
      this.metaService.updateTag({ property: `og:image`, content: `https://media.barrelwisdom.com/file/barrelwisdom/main/barrel.png` }, `property="og:image"`);
  
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
      this.a22service.getEffectList(this.language)
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
      this.location.go('ryza2/effects/' + slugname + "/" + this.language);
      this.modalRef = this.modalService.show(template);
      this.modalRef.onHide.subscribe((reason: string | any) => {
          this.location.go('ryza2/effects/' + this.language);
        })
    }
  
    private filterT(value: string, type: string): Effect[] {
  
      const filterValue = value.toLowerCase();
      let effectlist: Effect[];
      switch(type) {
        case "2": {
          effectlist = this.effects.filter(effect => effect.efftype == 'Weapon Forge');
          break;
        }
        case "3": {
          effectlist = this.effects.filter(effect => effect.efftype == "Armor Forge");
          break;
        }
        case "4": {
          effectlist = this.effects.filter(effect => effect.efftype == "Accessory Forge");
          break;
        }
        case "5": {
          effectlist = this.effects.filter(effect => effect.efftype == "EV");
          break;
        }
        case "6": {
          effectlist = this.effects.filter(effect => effect.efftype == "Material");
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
          return (effect.description) ? effect.name.toLowerCase().includes(filterValue) ||  effect.description.toLowerCase().includes(filterValue) : effect.name.toLowerCase().includes(filterValue)
        });
    } 
  
    get f() { return this.pageForm.controls; }
  
  }