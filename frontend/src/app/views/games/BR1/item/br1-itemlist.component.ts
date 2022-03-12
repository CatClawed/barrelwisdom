import { Location } from '@angular/common';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Item } from '@app/interfaces/br1';
import { BR1Service } from '@app/services/br1.service';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';

@Component({
    templateUrl: 'br1-itemlist.component.html',
    providers: [DestroyService]
  })

  export class BR1ItemlistComponent implements OnInit {
    modalRef: BsModalRef;
    pageForm: FormGroup;
    itemControl: FormControl;
    error: string = '';
    item: string = "items";
    items: Item[];
    filteredItems: Observable<Item[]>;
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
      private readonly destroy$: DestroyService,
      private router: Router,
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private location: Location,
      private br1service: BR1Service,
      private seoService: SeoService
    ) { 
      this.itemControl = new FormControl();

      this.pageForm = this.formBuilder.group({
        filtertext: this.itemControl
      })
    }
  
    ngOnInit(): void {
  
      this.language = this.route.snapshot.params.language;
  
      this.getItems();

      this.gameTitle = this.br1service.gameTitle;
      this.gameURL = this.br1service.gameURL;
      this.imgURL = this.br1service.imgURL;

      this.seoURL = `${this.gameURL}/items/${this.language}`;
      this.seoTitle = `Items - ${this.gameTitle}`;
      this.seoDesc = `The list of items in ${this.gameTitle}.`
      this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);

      let modalLink = this.router.events
      .subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.modalService.setDismissReason('link');
          this.modalService.hide();
          modalLink.unsubscribe();
        }
      });
    }
  
    getItems() {
      this.br1service.getItemList(this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({next: items => {
        this.items = items;
        this.filteredItems = this.pageForm.valueChanges.pipe(
          startWith(null as Observable<Item[]>),
          map((search: any) => search ? this.filterT(search.filtertext) : this.items.slice())
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
  
    private filterT(value: string): Item[] {
      let list: Item[] = this.items;
      if(value) {
        const filterValue = value.toLowerCase();
        return list.filter(item => { 
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