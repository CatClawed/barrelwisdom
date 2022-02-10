import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { Book } from '@app/interfaces/a16';
import { A16Service } from '@app/services/a16.service';
import { HistoryService} from '@app/services/history.service';
import { ErrorCodeService } from "@app/services/errorcode.service";
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { SeoService } from '@app/services/seo.service';

@Component({
    templateUrl: 'a16-booklist.component.html',
    selector: 'a16-booklist',
  })

  export class A16BooklistComponent implements OnInit {
    modalRef: BsModalRef;
    pageForm: FormGroup;
    bookControl: FormControl;
    error: boolean = false;
    errorCode: string;
    errorVars: any[];
    errorMsg: string;
    book: string = "books";
    books: Book[];
    filteredBooks: Observable<Book[]>;
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
      private a16service: A16Service,
  
      private seoService: SeoService
    ) { 
      this.bookControl = new FormControl();

      this.pageForm = this.formBuilder.group({
        filtertext: this.bookControl,
      })
    }
  
    ngOnInit(): void {
  
      this.language = this.route.snapshot.params.language;
  
      this.getBooks();
      this.gameTitle = this.a16service.gameTitle[this.language];
      this.gameURL = this.a16service.gameURL;
      this.imgURL = this.a16service.imgURL;

      this.seoURL = `${this.gameURL}/recipe-books/${this.language}`;
      this.seoTitle = `Recipe Books - ${this.gameTitle}`;
      this.seoDesc = `The list of recipe books in ${this.gameTitle}.`
      this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
  
      this.bookControl.valueChanges.subscribe(search => {
        search.filtertext = search;
      });

      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.modalService.setDismissReason('link');
          this.modalService.hide();
        }
      });
    }
  
    getBooks() {
      this.a16service.getBookList(this.language)
      .subscribe(books => {
        this.books = books;
        this.filteredBooks = this.pageForm.valueChanges.pipe(
          startWith(null as Observable<Book[]>),
          map((search: any) => search ? this.filterT(search.filtertext) : this.books.slice())
        );
      },
      error => {
        this.error = true;
        this.errorCode = `${error.status}`;
        
      });
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
      this.book = slug;
      this.location.go(`${this.gameURL}/recipe-books/` + slug + "/" + this.language);
      this.modalRef = this.modalService.show(template);
      this.modalRef.onHide.subscribe((reason: string | any) => {
        if(reason != "link") {
          this.location.go(`${this.gameURL}/recipe-books/` + this.language);
          this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
        }})
    }

    private filterT(value: string): Book[] {
  
      const filterValue = value.toLowerCase();
      let list: Book[] = this.books;

      if(value.length == 0) {
        return list;
      }

      return list.filter(book => { 
          return book.name.toLowerCase().includes(filterValue);
        });
    } 
  
    get f() { return this.pageForm.controls; }

    identify(index, item){
      return item.slug; 
   }
  }