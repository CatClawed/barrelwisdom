import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { Property } from '@app/interfaces/a15';
import { A15Service } from '@app/services/a15.service';
import { ErrorCodeService } from "@app/services/errorcode.service";
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { SeoService } from '@app/services/seo.service';
import { Meta, Title } from '@angular/platform-browser';

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

  constructor(
    private modalService: BsModalService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private location: Location,
    private a15service: A15Service,
    private errorService: ErrorCodeService,
    private seoService: SeoService,
    private metaService: Meta,
    private titleService: Title) { 
    this.propertyControl = new FormControl();
  }

  ngOnInit(): void {

    this.language = this.route.snapshot.params.language;

    this.getProperties();
    this.seoService.createCanonicalURL(`escha/properties/${this.language}`);
    this.titleService.setTitle(`Properties - Atelier Escha & Logy - Barrel Wisdom`);
    this.metaService.updateTag({ name: `robots`, content: `index, archive` },`name="robots"`);
    this.metaService.updateTag({ name: `description`, content: `The list of properties in Atelier Escha & Logy.` }, `name="description"`);
    this.metaService.updateTag({ property: `og:title`, content: `Properties` }, `property="og:title"`);
    this.metaService.updateTag({ property: `og:description`, content: `The list of properties in Atelier Escha & Logy.` },`property="og:description"`);
    this.metaService.updateTag({ property: `og:type`, content: `webpage` }, `property="og:type"`);
    this.metaService.updateTag({ property: `og:image`, content: `/media/main/barrel.png` }, `property="og:image"`);

    this.pageForm = this.formBuilder.group({
      filtertext: this.propertyControl,
      transfers: ['']
    })

    this.pageForm.get('transfers').valueChanges
      .subscribe(trans => {
        this.currentTransfer = trans;
      });

    this.propertyControl.valueChanges.subscribe(search => {
      this.searchstring = search;
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
      this.error = true,
      this.errorCode = error.status.toString(),
      this.errorVars = this.errorService.getCodes(this.errorCode)
    });
  }

  openModal(template: TemplateRef<any>, slugname: string) {
    this.property = slugname;
    this.location.go('escha/properties/' + slugname + "/" + this.language);
    this.modalRef = this.modalService.show(template);
    this.modalRef.onHide.subscribe((reason: string | any) => {
        this.location.go('escha/properties/' + this.language);
      })
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