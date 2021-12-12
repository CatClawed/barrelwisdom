import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { ItemList, NameOnly } from '@app/interfaces/brsl';
import { BRSLService } from '@app/services/brsl.service';
import { HistoryService} from '@app/services/history.service';
import { ErrorCodeService } from "@app/services/errorcode.service";
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { SeoService } from '@app/services/seo.service';

@Component({
    templateUrl: 'brsl-itemlist.component.html',
    selector: 'brsl-itemlist',
  })

  export class BRSLItemlistComponent implements OnInit {
    modalRef: BsModalRef;
    pageForm: FormGroup;
    itemControl: FormControl;
    error: boolean = false;
    errorCode: string;
    errorVars: any[];
    errorMsg: string;
    item: string = "items";
    items: ItemList[];
    categories: NameOnly[];
    filteredItems: Observable<ItemList[]>;
    currentType: string = "Any";
    currentCategory: string = "Any";
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
      private router: Router,
      public historyService: HistoryService,
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private location: Location,
      private brslservice: BRSLService,
      private errorService: ErrorCodeService,
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
      this.gameTitle = this.brslservice.gameTitle;
      this.gameURL = this.brslservice.gameURL;
      this.imgURL = this.brslservice.imgURL;

      this.seoURL = `${this.gameURL}/items/${this.language}`;
      this.seoTitle = `Items - ${this.gameTitle}`;
      this.seoDesc = `The list of items in ${this.gameTitle}.`
      this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
  
      this.pageForm.get('type').valueChanges
        .subscribe(type => {
          this.currentType = type;
        });

      this.pageForm.get('category').valueChanges
        .subscribe(cat => {
          this.currentCategory = cat;
        });
  
      this.itemControl.valueChanges.subscribe(search => {
        this.searchstring = search;
      });

      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.modalService.setDismissReason('link');
          this.modalService.hide();
        }
      });
    }
  
    getItems() {
      this.brslservice.getItemList(this.language)
      .subscribe(items => {
        this.items = items;
        this.filteredItems = this.pageForm.valueChanges.pipe(
          startWith(null as Observable<ItemList[]>),
          map((search: string | null) => search ? this.filterT(this.searchstring, this.currentType, this.currentCategory) : this.items.slice())
        );
      },
      error => {
        this.error = true;
        this.errorCode = `${error.status}`;
        this.errorVars = this.errorService.getCodes(this.errorCode);
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
          this.errorVars = this.errorService.getCodes(this.errorCode);
      });
  }
  
    openModal(template: TemplateRef<any>, slugname: string) {
      this.item = slugname;
      this.location.go(`${this.gameURL}/items/` + slugname + "/" + this.language);
      this.modalRef = this.modalService.show(template);
      this.modalRef.onHide.subscribe((reason: string | any) => {
        if(reason != "link") {
          this.location.go(`${this.gameURL}/items/` + this.language);
          this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
        }})
    }

    private filterT(value: string, type: string, category: string): ItemList[] {
  
      const filterValue = value.toLowerCase();
      let list: ItemList[] = this.items;

      if(type != 'Any') {
        list = list.filter(item => item.itemtype == type);
      }

      if(category != 'Any') {
        list = list.filter(item => item.category.some(c => c.name == category) );
      }

      if(value.length == 0) {
        return list;
      }

      return list.filter(mon => { 
          return mon.name.toLowerCase().includes(filterValue);
        });
    } 
  
    get f() { return this.pageForm.controls; }
  
  }