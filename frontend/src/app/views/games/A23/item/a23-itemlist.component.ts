import { Location } from '@angular/common';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Item, NameLink } from '@app/interfaces/a23';
import { A23Service } from '@app/services/a23.service';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';

@Component({
    templateUrl: 'a23-itemlist.component.html',
    providers: [DestroyService]
  })

  export class A23ItemlistComponent implements OnInit {
    modalRef: BsModalRef;
    pageForm: FormGroup;
    itemControl: FormControl;
    ingControl: FormControl;
    error: string = '';
    item: string = "items";
    items: Item[];
    filteredItems: Observable<Item[]>;
    language = "";
    config: ModalOptions = { class: "col-md-5 mx-auto" };
    categories: NameLink[];
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
      private readonly destroy$: DestroyService,
      private router: Router,
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private location: Location,
      private a23service: A23Service,
      private seoService: SeoService
    ) { 
      this.itemControl = new FormControl();
      this.ingControl = new FormControl();

      this.pageForm = this.formBuilder.group({
        filtertext: this.itemControl,
        filtering: this.ingControl,
        kind: ['Any'],
      })
    }
  
    ngOnInit(): void {
  
      this.language = this.route.snapshot.params.language;
  
      this.getItems();
      this.getCategories();
      this.gameTitle = this.a23service.gameTitle[this.language];
      this.gameURL = this.a23service.gameURL;
      this.imgURL = this.a23service.imgURL;

      this.seoURL = `${this.gameURL}/items/${this.language}`;
      this.seoTitle = `Items - ${this.gameTitle}`;
      this.seoDesc = `The list of items in ${this.gameTitle}.`
      this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);

      let modalLink = this.router.events
      .subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.modalService.setDismissReason('link');
          this.modalService.hide();
          modalLink.unsubscribe()
        }
      });
    }
  
    getItems() {
      this.a23service.getItemList(this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({next: items => {
          this.items = items;
          this.filteredItems = this.pageForm.valueChanges.pipe(
            startWith(null as Observable<Item[]>),
            map((search: any) => search ? this.filterT(search.filtertext, search.kind, search.filtering) : this.items.slice())
          );
        },
        error: error => {
          this.error =`${error.status}`;
        }});
    }

    getCategories() {
        this.a23service.getCategoryList(this.language)
        .pipe(takeUntil(this.destroy$))
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
      this.modalRef.onHide
      .pipe(takeUntil(this.destroy$))
      .subscribe((reason: string | any) => {
        if(reason != "link") {
          this.location.go(`${this.gameURL}/items/` + this.language);
          this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
        }})
    }

    private filterT(value: string, kind: string, ingt: string): Item[] {  
      let list: Item[] = this.items;

      if(kind != 'Any') {
          list = list.filter(item => item.categories.some(c => c.name == kind) || (item.add ? item.add.some(c => c.name == kind) : false ));
      }

      if(ingt) {
          const filterValue = ingt.toLowerCase();
          list = list.filter(item => (item.ing) ? item.ing.some(i => i.name.toLowerCase().includes(filterValue)) : false)
      }

      if(value) {
        const filterValue = (this.language == 'en') ? value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "") : value;
        list = list.filter(item => { 
            return ((this.language == 'en') ?
              (item.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(filterValue) )
              : item.name.includes(filterValue));
          });
      }
      return list;
    } 
  
    get f() { return this.pageForm.controls; }

    identify(index, item){
      return item.slug; 
   }
  }