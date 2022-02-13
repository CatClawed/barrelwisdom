import { Location } from '@angular/common';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Category, ItemList } from '@app/interfaces/a12';
import { A12Service } from '@app/services/a12.service';
import { SeoService } from '@app/services/seo.service';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
    templateUrl: 'a12-itemlist.component.html',
  })

  export class A12ItemlistComponent implements OnInit {
    modalRef: BsModalRef;
    pageForm: FormGroup;
    itemControl: FormControl;
    ingControl: FormControl;
    error: string = '';
    errorMsg: string;
    item: string = "items";
    items: ItemList[];
    filteredItems: Observable<ItemList[]>;
    language = "";
    config: ModalOptions = { class: "col-md-5 mx-auto" };
    categories: Category[];
    selectedCat = "Any";

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
      private a12service: A12Service,
      private seoService: SeoService
    ) { 
      this.itemControl = new FormControl();
      this.ingControl = new FormControl();

      this.pageForm = this.formBuilder.group({
        filtertext: this.itemControl,
        filtering: this.ingControl,
        type: ['Any'],
        level: [0],
      })
    }
  
    ngOnInit(): void {
      this.language = this.route.snapshot.params.language;
  
      this.getItems();
      this.getCategories();

      this.gameTitle = this.a12service.gameTitle[this.language];
      this.gameURL = this.a12service.gameURL;
      this.imgURL = this.a12service.imgURL;

      this.seoURL = `${this.gameURL}/items/${this.language}`;
      this.seoTitle = `Items - ${this.gameTitle}`;
      this.seoDesc = `The list of items in ${this.gameTitle}.`
      this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);

      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.modalService.setDismissReason('link');
          this.modalService.hide();
        }
      });
    }
  
    getItems() {
      this.a12service.getItemList(this.language)
      .subscribe({next: items => {
        this.items = items;
        this.filteredItems = this.pageForm.valueChanges.pipe(
          startWith(null as Observable<ItemList[]>),
          map((search: any) => search ? this.filterT(search.filtertext, search.type, search.level, search.filtering) : this.items.slice())
        );
      },
      error: error => {
        this.error =`${error.status}`;
      }});
    }

    getCategories() {
      this.a12service.getCategories(this.language)
      .subscribe({next: categories  => {
          this.categories = categories;
      },
      error: error => {
          this.error =`${error.status}`;
      }});
  }
  
    openModal(template: TemplateRef<any>, slugname: string, event?) {
      if (event) {
        if(event.ctrlKey) {
          return;
        }
        else {
          event.preventDefault()
        }
      }
      this.item = slugname;
      this.location.go(`${this.gameURL}/items/` + slugname + "/" + this.language);
      this.modalRef = this.modalService.show(template);
      this.modalRef.onHide.subscribe((reason: string | any) => {
        if(reason != "link") {
          this.location.go(`${this.gameURL}/items/` + this.language);
          this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
        }})
    }
  
    private filterT(value: string, type: string, level: number, ing: string): ItemList[] {
      let list: ItemList[] = this.items;

      if(type != 'Any') {
          list = list.filter(item => item.item_type != 'Equipment' );
          list = list.filter(item => item.categories.some(c => c.name == type) );
      }

      if(level > 0) {
          list = list.filter(item => item.level >= level);
      }

      if(ing) {
        const filterValue = ing.toLowerCase();
        list = list.filter(item => (item.ingredient_set) ? item.ingredient_set.some(i => i.ing.toLowerCase().includes(filterValue)) : false)
      }

      if(value) {
        const filterValue = value.toLowerCase();
        list = list.filter(item => { 
            return item.name.toLowerCase().includes(filterValue);
          });
      }

      return list;
    } 
  
    get f() { return this.pageForm.controls; }

    identify(index, item){
      return item.slugname;
   }

  }