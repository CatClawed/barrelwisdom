import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { ItemList, Category } from '@app/interfaces/a15';
import { A15Service } from '@app/services/a15.service';
import { ErrorCodeService } from "@app/services/errorcode.service";
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { SeoService } from '@app/services/seo.service';

@Component({
    templateUrl: 'a15-itemlist.component.html',
    selector: 'a15-itemlist',
  })

  export class A15ItemlistComponent implements OnInit {
    modalRef: BsModalRef;
    pageForm: FormGroup;
    itemControl: FormControl;
    ingControl: FormControl;
    error: boolean = false;
    errorCode: string;
    errorVars: any[];
    errorMsg: string;
    item: string = "items";
    items: ItemList[];
    filteredItems: Observable<ItemList[]>;
    currentType: string = "Any";
    currentElem: string = "Any";
    currentElemVal: number = 1;
    searchstring = "";
    ingstring = "";
    language = "";
    config: ModalOptions = { class: "col-md-5 mx-auto" };
    categories: Category[];
    selectedCat = "Any";
    selectedElem = "Any";
    selectedElemV = 0;
  
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
      private a15service: A15Service,
      private errorService: ErrorCodeService,
      private seoService: SeoService
    ) { 
      this.itemControl = new FormControl();
      this.ingControl = new FormControl();
    }
  
    ngOnInit(): void {
  
      this.language = this.route.snapshot.params.language;
  
      this.getItems();
      this.getCategories();

      this.gameTitle = this.a15service.gameTitle;
      this.gameURL = this.a15service.gameURL;
      this.imgURL = this.a15service.imgURL;

      this.seoURL = `${this.gameURL}/items/${this.language}`;
      this.seoTitle = `Items - ${this.gameTitle}`;
      this.seoDesc = `The list of items in ${this.gameTitle}.`
      this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
  
      this.pageForm = this.formBuilder.group({
        filtertext: this.itemControl,
        filtering: this.ingControl,
        type: ['Any'],
        elementval: [0],
        element: ["Any"]
      })
  
      this.pageForm.get('type').valueChanges
        .subscribe(type => {
          this.currentType = type;
        });
  
      this.pageForm.get('elementval').valueChanges
        .subscribe(val => {
          this.currentElemVal = val;
      });

      this.pageForm.get('element').valueChanges
        .subscribe(val => {
          this.currentElem = val;
      });
  
      this.itemControl.valueChanges.subscribe(search => {
        this.searchstring = search;
      });

      this.ingControl.valueChanges.subscribe(search => {
        this.ingstring = search;
      });
  
    }
  
    getItems() {
      this.a15service.getItemList(this.language)
      .subscribe(items => {
        this.items = items;
        this.filteredItems = this.pageForm.valueChanges.pipe(
          startWith(null as Observable<ItemList[]>),
          map((search: string | null) => search ? this.filterT(this.searchstring, this.currentType, this.currentElemVal, this.currentElem, this.ingstring) : this.items.slice())
        );
      },
      error => {
        this.error = true,
        this.errorCode = error.status.toString(),
        this.errorVars = this.errorService.getCodes(this.errorCode)
      });
    }

    getCategories() {
      this.a15service.getCategories(this.language)
      .subscribe(categories  => {
          this.categories = categories;
      },
      error => {
          this.error = true,
          this.errorCode = error.status.toString(),
          this.errorVars = this.errorService.getCodes(this.errorCode)
      });
  }
  
    openModal(template: TemplateRef<any>, slugname: string) {
      this.item = slugname;
      this.location.go(`${this.gameURL}/items/` + slugname + "/" + this.language);
      this.modalRef = this.modalService.show(template);
      this.modalRef.onHide.subscribe((reason: string | any) => {
          this.location.go(`${this.gameURL}/items/` + this.language);
          this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
        })
    }
  
    private filterT(value: string, type: string, elementV: number, element: string, ing: string): ItemList[] {
  
      const filterValue = value.toLowerCase();
      let list: ItemList[] = this.items;

      if(type != 'Any') {
          list = list.filter(item => item.categories.some(c => c.name == type) );
      }

      if(elementV > 1) {
          list = list.filter(item => item.evalue >= elementV);
      }

      switch(element) {
          case "Fire": {
              list = list.filter(item => item.fire)
              break;
          }
          case "Water": {
            list = list.filter(item => item.water)
            break;
          }
          case "Wind": {
              list = list.filter(item => item.wind)
              break;
          }
          case "Earth": {
              list = list.filter(item => item.earth)
              break;
          }
      }

      if(ing.length > 0) {
          list = list.filter(item => (item.ingredient_set) ? item.ingredient_set.some(i => i.ing.toLowerCase().includes(ing.toLowerCase())) : false)
      }

      if(value.length > 0) {
        list = list.filter(item => { 
            return item.name.toLowerCase().includes(filterValue);
          });
      }

      return list;
    } 
  
    get f() { return this.pageForm.controls; }
  
  }