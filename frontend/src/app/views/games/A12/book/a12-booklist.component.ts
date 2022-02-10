import { Location } from '@angular/common';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Book } from '@app/interfaces/a12';
import { A12Service } from '@app/services/a12.service';
import { SeoService } from '@app/services/seo.service';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
    templateUrl: 'a12-booklist.component.html',
  })

  export class A12BooklistComponent implements OnInit {
    modalRef: BsModalRef;
    pageForm: FormGroup;
    bookControl: FormControl;
    error: boolean = false;
    errorCode: string;
    book: string = "books";
    books: Book[];
    filteredBooks: Observable<Book[]>;
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
      private a12service: A12Service,
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

      this.gameTitle = this.a12service.gameTitle[this.language];
      this.gameURL = this.a12service.gameURL;
      this.imgURL = this.a12service.imgURL;

      this.seoURL = `${this.gameURL}/recipe-books/${this.language}`;
      this.seoTitle = `Recipe Books - ${this.gameTitle}`;
      this.seoDesc = `The list of recipe books in ${this.gameTitle}.`
      this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);

      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.modalService.setDismissReason('link');
          this.modalService.hide();
        }
      });
    }
  
    getBooks() {
      this.a12service.getBookList(this.language)
      .subscribe({next: books => {
        this.books = books;
        this.filteredBooks = this.pageForm.valueChanges.pipe(
          startWith(null as Observable<Book[]>),
          map((search: any) => search ? this.filterT(search.filtertext) : this.books.slice())
        );
      },
      error: error => {
        this.error = true;
        this.errorCode = `${error.status}`;
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
      this.book = slugname;
      this.location.go(`${this.gameURL}/recipe-books/` + slugname + "/" + this.language);
      this.modalRef = this.modalService.show(template);
      this.modalRef.onHide.subscribe((reason: string | any) => {
        if(reason != "link") {
          this.location.go(`${this.gameURL}/recipe-books/` + this.language);
          this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
        }})
    }
  
    private filterT(value: string): Book[] {
      let list: Book[] = this.books;
      if(!value) {
        return list;
      }
      const filterValue = value.toLowerCase();
      return list.filter(book => { 
          return book.name.toLowerCase().includes(filterValue);
        });
    } 
  
    get f() { return this.pageForm.controls; }
    
    identify(index, item){
      return item.slugname; 
   }
  }