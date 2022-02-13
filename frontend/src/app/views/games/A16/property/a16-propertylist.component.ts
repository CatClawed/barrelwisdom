import { Location } from '@angular/common';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Property } from '@app/interfaces/a16';
import { A16Service } from '@app/services/a16.service';
import { SeoService } from '@app/services/seo.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  templateUrl: 'a16-propertylist.component.html',
})
export class A16PropertylistComponent implements OnInit {
  modalRef: BsModalRef;
  pageForm: FormGroup;
  propertyControl: FormControl;
  error: string = '';
  property: string = "property";
  properties: Property[];
  filteredProperties: Observable<Property[]>;
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
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private location: Location,
    private a16service: A16Service,
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
    this.gameTitle = this.a16service.gameTitle[this.language];
    this.gameURL = this.a16service.gameURL;
    this.imgURL = this.a16service.imgURL;
    
    this.seoURL = `${this.gameURL}/properties/${this.language}`;
    this.seoTitle = `Properties - ${this.gameTitle}`;
    this.seoDesc = `The list of properties in ${this.gameTitle}.`
    this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.modalService.setDismissReason('link');
        this.modalService.hide();
      }
    });
  }

  getProperties() {
    this.a16service.getPropertyList(this.language)
    .subscribe({next: properties => {
      this.properties = properties;
      this.filteredProperties = this.pageForm.valueChanges.pipe(
        startWith(null as Observable<Property[]>),
        map((search: any) => search ? this.filterT(search.filtertext, search.transfers) : this.properties.slice())
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
    this.property = slug;
    this.location.go(`${this.gameURL}/properties/` + slug + "/" + this.language);
    this.modalRef = this.modalService.show(template);
    this.modalRef.onHide.subscribe((reason: string | any) => {
      if(reason != "link") {
        this.location.go(`${this.gameURL}/properties/` + this.language);
        this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
      }})
  }

  private filterT(value: string, transfer: string): Property[] {
    let propertylist: Property[] = this.properties;
    switch(transfer) {
      case "2":
        propertylist = this.properties.filter(property => property.bomb == true);
        break;
      case "3":
        propertylist = this.properties.filter(property => property.heal == true);
        break;
      case "5":
        propertylist = this.properties.filter(property => property.weapon == true);
        break;
      case "6":
        propertylist = this.properties.filter(property => property.armor == true);
        break;
      case "7":
        propertylist = this.properties.filter(property => property.accessory == true);
        break;
    }
    if(value) {
      const filterValue = value.toLowerCase();
      return propertylist.filter(property => {
        return property.name.toLowerCase().includes(filterValue) || property.desc.toLowerCase().includes(filterValue)
      });
    }
    return propertylist;
  } 

  get f() { return this.pageForm.controls; }

    identify(index, item){
      return item.slugname;
   }
  }