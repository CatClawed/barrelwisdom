import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { Trait } from '@app/interfaces/a22';
import { A22Service } from '@app/services/a22.service';
import { HistoryService } from '@app/services/history.service';
import { ErrorCodeService } from "@app/services/errorcode.service";
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { SeoService } from '@app/services/seo.service';

@Component({
  templateUrl: 'a22-traitlist.component.html',
  selector: 'a22-traitlist',
})
export class A22TraitlistComponent implements OnInit {
  modalRef: BsModalRef;
  pageForm: FormGroup;
  traitControl: FormControl;
  error: boolean = false;
  errorCode: string;
  errorVars: any[];
  errorMsg: string;
  trait: string = "trait";
  traits: Trait[];
  filteredTraits: Observable<Trait[]>;
  currentTransfer: string = "1";
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
    private modalService: BsModalService, private router: Router, public historyService: HistoryService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private location: Location,
    private a22service: A22Service,
    private errorService: ErrorCodeService,
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
    this.gameTitle = this.a22service.gameTitle[this.language];
    this.gameURL = this.a22service.gameURL;
    this.imgURL = this.a22service.imgURL;
    
    this.seoURL = `${this.gameURL}/traits/${this.language}`;
    this.seoTitle = `Traits - ${this.gameTitle}`;
    this.seoDesc = `The list of traits in ${this.gameTitle}.`
    this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);

    this.pageForm.get('transfers').valueChanges
      .subscribe(trans => {
        this.currentTransfer = trans;
      });

    this.traitControl.valueChanges.subscribe(search => {
      this.searchstring = search;
    });

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.modalService.setDismissReason('link');
        this.modalService.hide();
      }
    });
  }

  getTraits() {
    this.a22service.getTraitList(this.language)
    .subscribe(traits => {
      this.traits = traits;
      this.filteredTraits = this.pageForm.valueChanges.pipe(
        startWith(null as Observable<Trait[]>),
        map((search: string | null) => search ? this.filterT(this.searchstring, this.currentTransfer) : this.traits.slice())
      );
    },
    error => {
      this.error = true;
      this.errorCode = `${error.status}`;
      this.errorVars = this.errorService.getCodes(this.errorCode);
    });
  }

  openModal(template: TemplateRef<any>, slug: string) {
    this.trait = slug;
    this.location.go(`${this.gameURL}/traits/` + slug + "/" + this.language);
    this.modalRef = this.modalService.show(template);
    this.modalRef.onHide.subscribe((reason: string | any) => {
      if (reason != 'link') {
        this.location.go(`${this.gameURL}/traits/` + this.language);
        this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
     }})
  }

  private filterT(value: string, transfer: string): Trait[] {

    const filterValue = value.toLowerCase();
    let traitlist: Trait[] = this.traits;
    switch(transfer) {
      case "2": {
        traitlist = this.traits.filter(trait => trait.trans_atk == true);
        break;
      }
      case "3": {
        traitlist = this.traits.filter(trait => trait.trans_heal == true);
        break;
      }
      case "4": {
        traitlist = this.traits.filter(trait => trait.trans_dbf == true);
        break;
      }
      case "5": {
        traitlist = this.traits.filter(trait => trait.trans_buff == true);
        break;
      }
      case "6": {
        traitlist = this.traits.filter(trait => trait.trans_wpn == true);
        break;
      }
      case "7": {
        traitlist = this.traits.filter(trait => trait.trans_arm == true);
        break;
      }
      case "8": {
        traitlist = this.traits.filter(trait => trait.trans_acc == true);
        break;
      }
    }
    return traitlist.filter(trait => {
      return trait.name.toLowerCase().includes(filterValue) || trait.desc.toLowerCase().includes(filterValue)
    });
  } 

  get f() { return this.pageForm.controls; }

}