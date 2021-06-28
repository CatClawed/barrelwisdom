import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { ItemList, Category } from '@app/interfaces/a12';
import { A12Service } from '@app/services/a12.service';
import { ErrorCodeService } from "@app/services/errorcode.service";
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { SeoService } from '@app/services/seo.service';

@Component({
    templateUrl: 'a12-itemlist.component.html',
    selector: 'a12-itemlist',
  })

  export class A12ItemlistComponent implements OnInit {
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
    currentLevel: number = 0;
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
      private a12service: A12Service,
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

      this.gameTitle = this.a12service.gameTitle;
      this.gameURL = this.a12service.gameURL;
      this.imgURL = this.a12service.imgURL;

      this.seoURL = `${this.gameURL}/items/${this.language}`;
      this.seoTitle = `Items - ${this.gameTitle}`;
      this.seoDesc = `The list of items in ${this.gameTitle}.`
      this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
  
      this.pageForm = this.formBuilder.group({
        filtertext: this.itemControl,
        filtering: this.ingControl,
        type: ['Any'],
        level: [0],
      })
  
      this.pageForm.get('type').valueChanges
        .subscribe(type => {
          this.currentType = type;
        });
  
      this.pageForm.get('level').valueChanges
        .subscribe(val => {
          this.currentLevel = val;
      });
  
      this.itemControl.valueChanges.subscribe(search => {
        this.searchstring = search;
      });

      this.ingControl.valueChanges.subscribe(search => {
        this.ingstring = search;
      });
  
    }
  
    getItems() {
      this.a12service.getItemList(this.language)
      .subscribe(items => {
        this.items = items;
        this.filteredItems = this.pageForm.valueChanges.pipe(
          startWith(null as Observable<ItemList[]>),
          map((search: string | null) => search ? this.filterT(this.searchstring, this.currentType, this.currentLevel, this.ingstring) : this.items.slice())
        );
      },
      error => {
        this.error = true,
        this.errorCode = error.status.toString(),
        this.errorVars = this.errorService.getCodes(this.errorCode)
      });
    }

    getCategories() {
      this.a12service.getCategories(this.language)
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
      this.location.go(`this/items/` + slugname + "/" + this.language);
      this.modalRef = this.modalService.show(template);
      this.modalRef.onHide.subscribe((reason: string | any) => {
          this.location.go(`${this.gameURL}/items/` + this.language);
          this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
        })
    }
  
    private filterT(value: string, type: string, level: number, ing: string): ItemList[] {
  
      const filterValue = value.toLowerCase();
      let list: ItemList[] = this.items;

      if(type != 'Any') {
          list = list.filter(item => item.item_type != 'Equipment' );
          list = list.filter(item => item.categories.some(c => c.name == type) );
      }

      if(level > 0) {
          list = list.filter(item => item.level >= level);
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