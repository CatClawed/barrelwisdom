import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { Trait } from '@app/interfaces/a12';
import { A12Service } from '@app/services/a12.service';
import { ErrorCodeService } from "@app/services/errorcode.service";
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { SeoService } from '@app/services/seo.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  templateUrl: 'a12-traitlist.component.html',
  selector: 'a12-traitlist',
})
export class A12TraitlistComponent implements OnInit {
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
    private modalService: BsModalService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private location: Location,
    private a12service: A12Service,
    private errorService: ErrorCodeService,
    private seoService: SeoService) { 
    this.traitControl = new FormControl();
  }

  ngOnInit(): void {

    this.language = this.route.snapshot.params.language;

    this.getTraits();
    this.gameTitle = this.a12service.gameTitle;
    this.gameURL = this.a12service.gameURL;
    this.imgURL = this.a12service.imgURL;
    
    this.seoURL = `${this.gameURL}/traits/${this.language}`;
    this.seoTitle = `Traits - ${this.gameTitle}`;
    this.seoDesc = `The list of traits in ${this.gameTitle}.`
    this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);

    this.pageForm = this.formBuilder.group({
      filtertext: this.traitControl,
      transfers: ['']
    })

    this.pageForm.get('transfers').valueChanges
      .subscribe(trans => {
        this.currentTransfer = trans;
      });

    this.traitControl.valueChanges.subscribe(search => {
      this.searchstring = search;
    });
  }

  getTraits() {
    this.a12service.getTraitList(this.language)
    .subscribe(traits => {
      this.traits = traits;
      this.filteredTraits = this.pageForm.valueChanges.pipe(
        startWith(null as Observable<Trait[]>),
        map((search: string | null) => search ? this.filterT(this.searchstring, this.currentTransfer) : this.traits.slice())
      );
    },
    error => {
      this.error = true,
      this.errorCode = error.status.toString(),
      this.errorVars = this.errorService.getCodes(this.errorCode)
    });
  }

  openModal(template: TemplateRef<any>, slugname: string) {
    this.trait = slugname;
    this.location.go(`${this.gameURL}/traits/` + slugname + "/" + this.language);
    this.modalRef = this.modalService.show(template);
    this.modalRef.onHide.subscribe((reason: string | any) => {
        this.location.go(`${this.gameURL}/traits/` + this.language);
        this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
      })
  }

  private filterT(value: string, transfer: string): Trait[] {

    const filterValue = value.toLowerCase();
    let traitlist: Trait[] = this.traits;
    switch(transfer) {
      case "3": {
        traitlist = this.traits.filter(trait => trait.usable == true);
        break;
      }
      case "5": {
        traitlist = this.traits.filter(trait => trait.ingot == true);
        break;
      }
      case "6": {
        traitlist = this.traits.filter(trait => trait.cloth == true);
        break;
      }
      case "7": {
        traitlist = this.traits.filter(trait => trait.accessory == true);
        break;
      }
    }
    return traitlist.filter(trait => {
      return trait.name.toLowerCase().includes(filterValue) || trait.desc.toLowerCase().includes(filterValue)
    });
  } 

  get f() { return this.pageForm.controls; }

}