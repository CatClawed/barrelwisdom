import { Location } from '@angular/common';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ItemList, NameOnly } from '@app/interfaces/brsl';
import { BRSLService } from '@app/services/brsl.service';
import { SeoService } from '@app/services/seo.service';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
    templateUrl: 'brsl-itemlist.component.html',
  })

  export class BRSLItemlistComponent implements OnInit {
    modalRef: BsModalRef;
    pageForm: FormGroup;
    itemControl: FormControl;
    error: string = '';
    item: string = "items";
    items: ItemList[];
    categories: NameOnly[];
    filteredItems: Observable<ItemList[]>;
    currentType: string = "Any";
    currentCategory: string = "Any";
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
      private router: Router,
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private location: Location,
      private brslservice: BRSLService,
      private seoService: SeoService
    ) { 
      this.itemControl = new FormControl();

      this.pageForm = this.formBuilder.group({
        filtertext: this.itemControl,
        category: ['Any'],
        type: ['Any']
      })
    }
  
    ngOnInit(): void {
  
      this.language = this.route.snapshot.params.language;
  
      this.getItems();
      this.getCategories();
      this.gameTitle = this.brslservice.gameTitle[this.language];
      this.gameURL = this.brslservice.gameURL;
      this.imgURL = this.brslservice.imgURL;

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
      this.brslservice.getItemList(this.language)
      .subscribe({next: items => {
        this.items = items;
        this.filteredItems = this.pageForm.valueChanges.pipe(
          startWith(null as Observable<ItemList[]>),
          map((search: any) => search ? this.filterT(search.filtertext, search.type, search.category) : this.items.slice())
        );
      },
      error: error => {
        this.error =`${error.status}`;
      }});
    }

    getCategories() {
      this.brslservice.getCategoryList(this.language)
      .subscribe({next: categories  => {
          this.categories = categories;
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
      this.item = slug;
      this.location.go(`${this.gameURL}/items/` + slug + "/" + this.language);
      this.modalRef = this.modalService.show(template);
      this.modalRef.onHide.subscribe((reason: string | any) => {
        if(reason != "link") {
          this.location.go(`${this.gameURL}/items/` + this.language);
          this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
        }})
    }

    private filterT(value: string, type: string, category: string): ItemList[] {
      let list: ItemList[] = this.items;
      if(type != 'Any') {
        list = list.filter(item => item.itemtype == type);
      }
      if(category != 'Any') {
        list = list.filter(item => item.category.some(c => c.name == category) );
      }
      if(!value) {
        return list;
      }
      const filterValue = value.toLowerCase();
      return list.filter(mon => { 
          return mon.name.toLowerCase().includes(filterValue);
        });
    } 
  
    get f() { return this.pageForm.controls; }

    identify(index, item){
      return item.slug; 
   }
  }