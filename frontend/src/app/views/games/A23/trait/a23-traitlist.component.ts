import { Location } from '@angular/common';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Trait } from '@app/interfaces/a23';
import { A23Service } from '@app/services/a23.service';
import { SeoService } from '@app/services/seo.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { takeUntil } from 'rxjs/operators';
import { DestroyService } from '@app/services/destroy.service';

@Component({
  templateUrl: 'a23-traitlist.component.html',
  providers: [DestroyService]
})
export class A23TraitlistComponent implements OnInit {
  modalRef: BsModalRef;
  pageForm: FormGroup;
  traitControl: FormControl;
  error: string = '';
  trait: string = "trait";
  traits: Trait[];
  filteredTraits: Observable<Trait[]>;
  language = "";

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
    private seoService: SeoService) { 
    this.traitControl = new FormControl();

    this.pageForm = this.formBuilder.group({
      filtertext: this.traitControl,
      transfers: ['']
    })
  }

  ngOnInit(): void {

    this.language = this.route.snapshot.params.language;

    this.getTraits();
    this.gameTitle = this.a23service.gameTitle[this.language];
    this.gameURL = this.a23service.gameURL;
    this.imgURL = this.a23service.imgURL;
    
    this.seoURL = `${this.gameURL}/traits/${this.language}`;
    this.seoTitle = `Traits - ${this.gameTitle}`;
    this.seoDesc = `The list of traits in ${this.gameTitle}.`
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

  getTraits() {
    this.a23service.getTraitList(this.language)
    .pipe(takeUntil(this.destroy$))
    .subscribe({next: traits => {
      this.traits = traits;
      this.filteredTraits = this.pageForm.valueChanges.pipe(
        startWith(null as Observable<Trait[]>),
        map((search: any) => search ? this.filterT(search.filtertext, search.transfers) : this.traits.slice())
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
    this.trait = slug;
    this.location.go(`${this.gameURL}/traits/` + slug + "/" + this.language);
    this.modalRef = this.modalService.show(template);
    this.modalRef.onHide
    .pipe(takeUntil(this.destroy$))
    .subscribe((reason: string | any) => {
      if (reason != 'link') {
        this.location.go(`${this.gameURL}/traits/` + this.language);
        this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
     }})
  }

  private filterT(value: string, transfer: string): Trait[] {
    let traitlist: Trait[] = this.traits;
    switch(transfer) {
      case "2":
        traitlist = this.traits.filter(trait => trait.trans_atk == true);
        break;
      case "3":
        traitlist = this.traits.filter(trait => trait.trans_heal == true);
        break;
      case "4":
        traitlist = this.traits.filter(trait => trait.trans_dbf == true);
        break;
      case "5":
        traitlist = this.traits.filter(trait => trait.trans_buff == true);
        break;
      case "6":
        traitlist = this.traits.filter(trait => trait.trans_wpn == true);
        break;
      case "7":
        traitlist = this.traits.filter(trait => trait.trans_arm == true);
        break;
      case "8":
        traitlist = this.traits.filter(trait => trait.trans_acc == true);
        break;
      case "9":
        traitlist = this.traits.filter(trait => trait.trans_tal == true);
        break;
      case "10":
        traitlist = this.traits.filter(trait => trait.trans_exp == true);
        break;
    }
    if(!value) {
      return traitlist;
    }
    const filterValue = value.toLowerCase();
    return traitlist.filter(trait => {
      if(trait.combo1) {
      return trait.name.toLowerCase().includes(filterValue) || trait.desc.toLowerCase().includes(filterValue) || trait.combo1.name.toLowerCase().includes(filterValue) || trait.combo2.name.toLowerCase().includes(filterValue)
      }
      return trait.name.toLowerCase().includes(filterValue) || trait.desc.toLowerCase().includes(filterValue)
    });
  } 

  get f() { return this.pageForm.controls; }

    identify(index, item){
      return item.slug; 
   }
  }