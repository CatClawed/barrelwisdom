import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { Property } from '@app/interfaces/a15';
import { A15Service } from '@app/services/a15.service';
import { HistoryService} from '@app/services/history.service';
import { ErrorCodeService } from "@app/services/errorcode.service";
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { SeoService } from '@app/services/seo.service';

@Component({
  templateUrl: 'a15-propertylist.component.html',
  selector: 'a15-propertylist',
})
export class A15PropertylistComponent implements OnInit {
  modalRef: BsModalRef;
  pageForm: FormGroup;
  propertyControl: FormControl;
  error: boolean = false;
  errorCode: string;
  errorVars: any[];
  errorMsg: string;
  property: string = "property";
  properties: Property[];
  filteredProperties: Observable<Property[]>;
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
    private a15service: A15Service,
    private errorService: ErrorCodeService,
    private seoService: SeoService) { 
    this.propertyControl = new FormControl();

    this.pageForm = this.formBuilder.group({
      filtertext: this.propertyControl,
      transfers: ['']
    })
  }

  ngOnInit(): void {

    this.language = this.route.snapshot.params.language;

    this.getProperties();
    this.gameTitle = this.a15service.gameTitle[this.language];
    this.gameURL = this.a15service.gameURL;
    this.imgURL = this.a15service.imgURL;
    
    this.seoURL = `${this.gameURL}/properties/${this.language}`;
    this.seoTitle = `Properties - ${this.gameTitle}`;
    this.seoDesc = `The list of properties in ${this.gameTitle}.`
    this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);

    this.pageForm.get('transfers').valueChanges
      .subscribe(trans => {
        this.currentTransfer = trans;
      });

    this.propertyControl.valueChanges.subscribe(search => {
      this.searchstring = search;
    });

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.modalService.setDismissReason('link');
        this.modalService.hide();
      }
    });
  }

  getProperties() {
    this.a15service.getPropertyList(this.language)
    .subscribe(properties => {
      this.properties = properties;
      this.filteredProperties = this.pageForm.valueChanges.pipe(
        startWith(null as Observable<Property[]>),
        map((search: string | null) => search ? this.filterT(this.searchstring, this.currentTransfer) : this.properties.slice())
      );
    },
    error => {
      this.error = true;
      this.errorCode = `${error.status}`;
      this.errorVars = this.errorService.getCodes(this.errorCode);
    });
  }

  openModal(template: TemplateRef<any>, slugname: string) {
    this.property = slugname;
    this.location.go(`${this.gameURL}/properties/` + slugname + "/" + this.language);
    this.modalRef = this.modalService.show(template);
    this.modalRef.onHide.subscribe((reason: string | any) => {
      if(reason != "link") {
        this.location.go(`${this.gameURL}/properties/` + this.language);
        this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
    }})
  }

  private filterT(value: string, transfer: string): Property[] {

    const filterValue = value.toLowerCase();
    let propertylist: Property[] = this.properties;
    switch(transfer) {
      case "2": {
        propertylist = this.properties.filter(property => property.bomb == true);
        break;
      }
      case "3": {
        propertylist = this.properties.filter(property => property.heal == true);
        break;
      }
      case "4": {
        propertylist = this.properties.filter(property => property.buff == true);
        break;
      }
      case "5": {
        propertylist = this.properties.filter(property => property.weapon == true);
        break;
      }
      case "6": {
        propertylist = this.properties.filter(property => property.armor == true);
        break;
      }
      case "7": {
        propertylist = this.properties.filter(property => property.accessory == true);
        break;
      }
    }
    return propertylist.filter(property => {
      return property.name.toLowerCase().includes(filterValue) || property.desc.toLowerCase().includes(filterValue)
    });
  } 

  get f() { return this.pageForm.controls; }

}