import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '@app/interfaces/a16';
import { A16Service } from '@app/services/a16.service';
import { ErrorCodeService } from '@app/services/errorcode.service';
import { SeoService } from '@app/services/seo.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  templateUrl: 'a16-book.component.html',
  selector: 'a16-book',
})
export class A16BookComponent implements OnInit {

  loading = false;
  submitted = false;
  returnUrl: string;
  error: boolean = false;
  errorCode: string;
  errorVars: any[];
  errorMsg: string;
  book: Book;
  colset: string;

  @Input()
  slugname: string = "";

  @Input()
  showNav: boolean = true;

  language = "";

  constructor(
    private route: ActivatedRoute,
    private a16service: A16Service,
    private errorService: ErrorCodeService,
    private seoService: SeoService,
    private metaService: Meta,
    private titleService: Title) {
      if(this.route.snapshot.params.book != null) {
      this.slugname = this.route.snapshot.params.book;
    }
  }
  ngOnInit(): void {
    this.language = this.route.snapshot.params.language;
    if(this.showNav) {
      this.colset = "col-md-9 mx-auto "
    }
    this.a16service.getBook(this.slugname, this.language)
    .subscribe(book => {
        this.error = false;
        this.book = book;

        this.seoService.createCanonicalURL(`shallie/books/${this.book.slugname}/${this.language}`);
        this.titleService.setTitle(`${this.book.name} - Atelier Shallie - Barrel Wisdom`);
        this.metaService.updateTag({ name: `robots`, content: `index, archive` },`name="robots"`);
        this.metaService.updateTag({ name: `description`, content: `${this.book.desc}` }, `name="description"`);
        this.metaService.updateTag({ property: `og:title`, content: `${this.book.name}` }, `property="og:title"`);
        this.metaService.updateTag({ property: `og:description`, content: `${this.book.desc}` },`property="og:description"`);
        this.metaService.updateTag({ property: `og:type`, content: `webpage` }, `property="og:type"`);
        this.metaService.updateTag({ property: `og:image`, content: `/media/games/shallie/recipe-books/${this.book.slugname}.png` }, `property="og:image"`);
    },
    error => {
      this.error = true;
      this.errorCode = error.status.toString();
      this.errorVars = this.errorService.getCodes(this.errorCode);
    });
  }
} 