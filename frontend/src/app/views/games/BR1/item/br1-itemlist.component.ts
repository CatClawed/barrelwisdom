import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { Item } from '@app/interfaces/br1';
import { BR1Service } from '@app/services/br1.service';
import { HistoryService} from '@app/services/history.service';
import { ErrorCodeService } from "@app/services/errorcode.service";
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { SeoService } from '@app/services/seo.service';

@Component({
    templateUrl: 'br1-itemlist.component.html',
    selector: 'br1-itemlist',
  })

  export class BR1ItemlistComponent implements OnInit {
    modalRef: BsModalRef;
    pageForm: FormGroup;
    itemControl: FormControl;
    error: boolean = false;
    errorCode: string;
    errorVars: any[];
    errorMsg: string;
    item: string = "items";
    items: Item[];
    filteredItems: Observable<Item[]>;
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
      private modalService: BsModalService, private router: Router, public historyService: HistoryService,
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private location: Location,
      private br1service: BR1Service,
      private errorService: ErrorCodeService,
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
      this.br1service.getItemList(this.language)
      .subscribe(items => {
        this.items = items;
        this.filteredItems = this.pageForm.valueChanges.pipe(
          startWith(null as Observable<Item[]>),
          map((search: string | null) => search ? this.filterT(this.searchstring) : this.items.slice())
        );
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
  
    private filterT(value: string): Item[] {
  
      const filterValue = value.toLowerCase();
      let list: Item[] = this.items;

      if(value.length > 0) {
        list = list.filter(item => { 
            return item.name.toLowerCase().includes(filterValue);
          });
      }

      return list;
    } 
  
    get f() { return this.pageForm.controls; }
  
  }