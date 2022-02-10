import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { FacilitySet, NameOnly } from '@app/interfaces/brsl';
import { BRSLService } from '@app/services/brsl.service';
import { HistoryService} from '@app/services/history.service';
import { ErrorCodeService } from "@app/services/errorcode.service";
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { SeoService } from '@app/services/seo.service';

@Component({
    templateUrl: 'brsl-facilityset.component.html',
    selector: 'brsl-facilityset',
  })

  export class BRSLFacilitySetComponent implements OnInit {
    modalRef: BsModalRef;
    pageForm: FormGroup;
    facilityControl: FormControl;
    error: boolean = false;
    errorCode: string;
    errorVars: any[];
    errorMsg: string;
    facility: string = "facilities";
    facilities: FacilitySet[];
    categories: NameOnly[];
    filteredSets: Observable<FacilitySet[]>;
    searchstring = "";
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
      public historyService: HistoryService,
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private location: Location,
      private brslservice: BRSLService,
  
      private seoService: SeoService
    ) { 
      this.facilityControl = new FormControl();

      this.pageForm = this.formBuilder.group({
        filtertext: this.facilityControl
      })
    }
  
    ngOnInit(): void {
  
      this.language = this.route.snapshot.params.language;
  
      this.getFacilities();
      this.getCategories();
      this.gameTitle = this.brslservice.gameTitle[this.language];
      this.gameURL = this.brslservice.gameURL;
      this.imgURL = this.brslservice.imgURL;

      this.seoURL = `${this.gameURL}/facilities/sets/${this.language}`;
      this.seoTitle = `Facility Sets - ${this.gameTitle}`;
      this.seoDesc = `The list of facility sets in ${this.gameTitle}.`
      this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
  
      this.facilityControl.valueChanges.subscribe(search => {
        search.filtertext = search;
      });
    }
  
    getFacilities() {
      this.brslservice.getFacilitySetList(this.language)
      .subscribe(facilities => {
        this.facilities = facilities;
        this.filteredSets = this.pageForm.valueChanges.pipe(
          startWith(null as Observable<FacilitySet[]>),
          map((search: any) => search ? this.filterT(search.filtertext) : this.facilities.slice())
        );
      },
      error => {
        this.error = true;
        this.errorCode = `${error.status}`;
        
      });
    }

    getCategories() {
      this.brslservice.getCategoryList(this.language)
      .subscribe(categories  => {
          this.categories = categories;
      },
      error => {
          this.error = true;
          this.errorCode = `${error.status}`;
          
      });
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
      this.facility = slug;
      this.location.go(`${this.gameURL}/facilities/` + slug + "/" + this.language);
      this.modalRef = this.modalService.show(template);
      this.modalRef.onHide.subscribe((reason: string | any) => {
        if(reason != "link") {
          this.location.go(`${this.gameURL}/facilities/` + this.language);
          this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
        }})
    }

    private filterT(value: string): FacilitySet[] {
  
      const filterValue = value.toLowerCase();
      let list: FacilitySet[] = this.facilities;

      if(value.length == 0) {
        return list;
      }

      return list.filter(set => { 
          return set.effect.name.toLowerCase().includes(filterValue) || set.effect.desc.toLowerCase().includes(filterValue)
          || set.facilities.some(f => f.name.toLowerCase().includes(filterValue));
        });
    } 
  
    get f() { return this.pageForm.controls; }

    identify(index, item){
      return item.slug; 
   }
  }