import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Trait, ItemName } from '@app/interfaces/a22';
import { A22Service } from '@app/services/a22.service';
import { ErrorCodeService } from "@app/services/errorcode.service";
import { Observable } from 'rxjs';
import { concatMap, map, startWith } from 'rxjs/operators';

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

  constructor(
    private modalService: BsModalService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private a22service: A22Service,
    private errorService: ErrorCodeService,
  ) { 
    this.traitControl = new FormControl();
  }

  ngOnInit(): void {

    this.language = this.route.snapshot.params.language;

    this.getTraits();

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
    this.a22service.getTraitList(this.language)
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
    this.location.go('ryza2/traits/' + slugname + "/" + this.language);
    this.modalRef = this.modalService.show(template);
    this.modalRef.onHide.subscribe((reason: string | any) => {
        this.location.go('ryza2/traits/' + this.language);
      })
  }

  private filterT(value: string, transfer: string): Trait[] {

    console.log(transfer + "\t" + value);
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
    return traitlist.filter(trait => trait.name.toLowerCase().includes(filterValue))
    && traitlist.filter(trait => trait.description.toLowerCase().includes(filterValue));
  } 

  get f() { return this.pageForm.controls; }

}