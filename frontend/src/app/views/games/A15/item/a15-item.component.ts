import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemFull } from '@app/interfaces/a15';
import { A15Service } from '@app/services/a15.service';
import { ErrorCodeService } from '@app/services/errorcode.service';
import { SeoService } from '@app/services/seo.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  templateUrl: 'a15-item.component.html',
  selector: 'a15-item',
})
export class A15ItemComponent implements OnInit {

  loading = false;
  submitted = false;
  returnUrl: string;
  error: boolean = false;
  errorCode: string;
  errorVars: any[];
  errorMsg: string;
  item: ItemFull;
  colset: string;
  fire = false;
  water = false;
  wind = false;
  earth = false;

  @Input()
  slugname: string = "";

  @Input()
  showNav: boolean = true;

  language = "";

  constructor(
    private route: ActivatedRoute,
    private a15service: A15Service,
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
    this.a15service.getItem(this.slugname, this.language)
    .subscribe(item => {
        this.error = false;
        this.item = item;

        if(this.item.effectline_set) {
          for (let eff of this.item.effectline_set) {
            if(eff.elem == "fire") {
              this.fire = true;
            }
            if(eff.elem == "water") {
              this.water = true;
            }
            if(eff.elem == "wind") {
              this.wind = true;
            }
            if(eff.elem == "earth") {
              this.earth = true;
            }
          }
        }

        this.seoService.createCanonicalURL(`escha/items/${this.item.slugname}/${this.language}`);
        this.titleService.setTitle(`${this.item.name} - Atelier Escha & Logy - Barrel Wisdom`);
        this.metaService.updateTag({ name: `robots`, content: `index, archive` },`name="robots"`);
        this.metaService.updateTag({ name: `description`, content: `${this.item.desc}` }, `name="description"`);
        this.metaService.updateTag({ property: `og:title`, content: `${this.item.name}` }, `property="og:title"`);
        this.metaService.updateTag({ property: `og:description`, content: `${this.item.desc}` },`property="og:description"`);
        this.metaService.updateTag({ property: `og:type`, content: `webpage` }, `property="og:type"`);
        this.metaService.updateTag({ property: `og:image`, content: `/media/games/escha/items/${this.item.slugname}.png` }, `property="og:image"`);
    },
    error => {
      this.error = true;
      this.errorCode = error.status.toString();
      this.errorVars = this.errorService.getCodes(this.errorCode);
    });
  }
} 