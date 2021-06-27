import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemFull } from '@app/interfaces/a16';
import { A16Service } from '@app/services/a16.service';
import { ErrorCodeService } from '@app/services/errorcode.service';
import { SeoService } from '@app/services/seo.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  templateUrl: 'a16-item.component.html',
  selector: 'a16-item',
})
export class A16ItemComponent implements OnInit {

  loading = false;
  submitted = false;
  returnUrl: string;
  error: boolean = false;
  errorCode: string;
  errorVars: any[];
  errorMsg: string;
  item: ItemFull;
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
      if(this.route.snapshot.params.item != null) {
      this.slugname = this.route.snapshot.params.item;
    }
  }
  ngOnInit(): void {
    this.language = this.route.snapshot.params.language;
    if(this.showNav) {
      this.colset = "col-md-9 mx-auto "
    }
    this.a16service.getItem(this.slugname, this.language)
    .subscribe(item => {
        this.error = false;
        this.item = item;

        this.seoService.createCanonicalURL(`shallie/items/${this.item.slugname}/${this.language}`);
        this.titleService.setTitle(`${this.item.name} - Atelier Shallie - Barrel Wisdom`);
        this.metaService.updateTag({ name: `robots`, content: `index, archive` },`name="robots"`);
        this.metaService.updateTag({ name: `description`, content: `${this.item.desc}` }, `name="description"`);
        this.metaService.updateTag({ property: `og:title`, content: `${this.item.name}` }, `property="og:title"`);
        this.metaService.updateTag({ property: `og:description`, content: `${this.item.desc}` },`property="og:description"`);
        this.metaService.updateTag({ property: `og:type`, content: `webpage` }, `property="og:type"`);
        this.metaService.updateTag({ property: `og:image`, content: `/media/games/shallie/items/${this.item.slugname}.png` }, `property="og:image"`);
    },
    error => {
      this.error = true;
      this.errorCode = error.status.toString();
      this.errorVars = this.errorService.getCodes(this.errorCode);
    });
  }
} 