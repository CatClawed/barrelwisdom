import { Location } from '@angular/common';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Item, NameLink } from '@app/interfaces/a22';
import { A22Service } from '@app/services/a22.service';
import { SeoService } from '@app/services/seo.service';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
    templateUrl: 'a22-itemlist.component.html',
  })

  export class A22ItemlistComponent implements OnInit {
    modalRef: BsModalRef;
    pageForm: FormGroup;
    itemControl: FormControl;
    ingControl: FormControl;
    error: boolean = false;
    errorCode: string;
    item: string = "items";
    items: Item[];
    filteredItems: Observable<Item[]>;
    language = "";
    config: ModalOptions = { class: "col-md-5 mx-auto" };
    categories: NameLink[];
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
      private router: Router,
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private location: Location,
      private a22service: A22Service,
      private seoService: SeoService
    ) { 
      this.itemControl = new FormControl();
      this.ingControl = new FormControl();

      this.pageForm = this.formBuilder.group({
        filtertext: this.itemControl,
        filtering: this.ingControl,
        type: ['Any'],
        elementval: [1],
        element: ["Any"]
      })
    }
  
    ngOnInit(): void {
  
      this.language = this.route.snapshot.params.language;
  
      this.getItems();
      this.getCategories();
      this.gameTitle = this.a22service.gameTitle[this.language];
      this.gameURL = this.a22service.gameURL;
      this.imgURL = this.a22service.imgURL;

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
      this.a22service.getItemList(this.language)
      .subscribe({next: items => {
          this.items = items;
          this.filteredItems = this.pageForm.valueChanges.pipe(
            startWith(null as Observable<Item[]>),
            map((search: any) => search ? this.filterT(search.filtertext, search.type, search.elementval, search.element, search.filtering) : this.items.slice())
          );
        },
        error: error => {
          this.error = true;
          this.errorCode = `${error.status}`;
        }});
    }

    getCategories() {
        this.a22service.getCategoryList(this.language)
        .subscribe({next: categories  => {
            this.categories = categories;
        },
        error: error => {
            this.error = true;
            this.errorCode = `${error.status}`;
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
      this.item = slug;
      this.location.go(`${this.gameURL}/items/` + slug + "/" + this.language);
      this.modalRef = this.modalService.show(template);
      this.modalRef.onHide.subscribe((reason: string | any) => {
        if(reason != "link") {
          this.location.go(`${this.gameURL}/items/` + this.language);
          this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
        }})
    }

    private filterT(value: string, type: string, elementV: number, element: string, ingt: string): Item[] {  
      let list: Item[] = this.items;

      if(type != 'Any') {
          list = list.filter(item => item.category.some(c => c.name == type) );
      }

      if(elementV > 1) {
          list = list.filter(item => item.elementvalue >= elementV);
      }
      switch(element) {
          case "Fire": {
              list = list.filter(item => item.fire)
              break;
          }
          case "Ice": {
            list = list.filter(item => item.ice)
            break;
          }
          case "Lightning": {
              list = list.filter(item => item.lightning)
              break;
          }
          case "Wind": {
              list = list.filter(item => item.wind)
              break;
          }
      }

      if(ingt) {
          const filterValue = ingt.toLowerCase();
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
      return item.slug; 
   }
  }