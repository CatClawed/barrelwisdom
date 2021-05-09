import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemFull } from '@app/interfaces/a22';
import { A22Service } from '@app/services/a22.service';
import { ErrorCodeService } from '@app/services/errorcode.service';
import { SeoService } from '@app/services/seo.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  templateUrl: 'a22-item.component.html',
  selector: 'a22-item',
})
export class A22ItemComponent implements OnInit {

  loading = false;
  submitted = false;
  returnUrl: string;
  error: boolean = false;
  errorCode: string;
  errorVars: any[];
  errorMsg: string;
  item: ItemFull;
  colset: string;
  default: any[] = [];
  eff1: any[] = [];
  eff2: any[] = [];
  eff3: any[] = [];
  eff4: any[] = [];

  @Input()
  slugname: string = "";

  @Input()
  showNav: boolean = true;

  language = "";

  constructor(
    private route: ActivatedRoute,
    private a22service: A22Service,
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
    this.a22service.getItem(this.slugname, this.language)
    .subscribe(item => {
        this.error = false;
        this.item = item;

        if(this.item.effectline_set) {
            if(this.item.effectline_set.length > 1) {
                let line = 0;
                for(let e of this.item.effectline_set) {
                    if(e.number == 0) {
                        this.default.push([e.effname, e.effslug]);
                        line = line+1;
                    }
                    if(line < e.line) {
                        line = line+1;
                        this.default.push([]);
                    }
                    if(e.number > 0) {
                        if(e.line == 1) { this.eff1.push([e.effname, e.effslug]); }
                        if(e.line == 2) { this.eff2.push([e.effname, e.effslug]); }
                        if(e.line == 3) { this.eff3.push([e.effname, e.effslug]); }
                        if(e.line == 4) { this.eff4.push([e.effname, e.effslug]); }
                    }
                }
            }
        }

        this.seoService.createCanonicalURL(`ryza2/items/${this.item.slugname}/${this.language}`);
        this.titleService.setTitle(`${this.item.name} - Atelier Ryza 2 - Barrel Wisdom`);
        this.metaService.updateTag({ name: `robots`, content: `index, archive` },`name="robots"`);
        this.metaService.updateTag({ name: `description`, content: `${this.item.description}` }, `name="description"`);
        this.metaService.updateTag({ property: `og:title`, content: `${this.item.name}` }, `property="og:title"`);
        this.metaService.updateTag({ property: `og:description`, content: `${this.item.description}` },`property="og:description"`);
        this.metaService.updateTag({ property: `og:type`, content: `webpage` }, `property="og:type"`);
        this.metaService.updateTag({ property: `og:image`, content: `/media/games/ryza2/items/${this.item.slugname}.png` }, `property="og:image"`);
    },
    error => {
      this.error = true,
      this.errorCode = error.status.toString(),
      this.errorVars = this.errorService.getCodes(this.errorCode)
    });
  }
} 