import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { EffectFull } from '@app/interfaces/a22';
import { A22Service } from '@app/services/a22.service';
import { ErrorCodeService } from '@app/services/errorcode.service';
import { SeoService } from '@app/services/seo.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  templateUrl: 'a22-effect.component.html',
  selector: 'a22-effect',
})
export class A22EffectComponent implements OnInit {

  loading = false;
  submitted = false;
  returnUrl: string;
  error: boolean = false;
  errorCode: string;
  errorVars: any[];
  errorMsg: string;
  effect: EffectFull;
  colset: string;

  @Input()
  slugname: string = "";

  @Input()
  showNav: boolean = true;

  language = "";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private a22service: A22Service,
    private errorService: ErrorCodeService,
    private seoService: SeoService,
    private metaService: Meta,
    private titleService: Title) {
      if(this.route.snapshot.params.effect != null) {
      this.slugname = this.route.snapshot.params.effect;
    }
  }
  ngOnInit(): void {
    this.language = this.route.snapshot.params.language;
    if(this.showNav) {
      this.colset = "col-md-5 mx-auto "
    }
    this.a22service.getEffect(this.slugname, this.language)
    .subscribe(effect => {
      if(effect.efftype == "Hidden" || effect.efftype == "unused") {
          this.error = true;
          this.errorCode = "404";
          this.errorVars = this.errorService.getCodes(this.errorCode)
      }
      else {
          this.error = false;
          this.effect = effect;
          this.seoService.createCanonicalURL(`ryza2/effects/${this.effect.slugname}/${this.language}`);
          this.titleService.setTitle(`${this.effect.name} - Atelier Ryza 2 - Barrel Wisdom`);
          this.metaService.updateTag({ name: `robots`, content: `index, archive` },`name="robots"`);
          this.metaService.updateTag({ name: `description`, content: `${this.effect.description}` }, `name="description"`);
          this.metaService.updateTag({ property: `og:title`, content: `${this.effect.name}` }, `property="og:title"`);
          this.metaService.updateTag({ property: `og:description`, content: `${this.effect.description}` },`property="og:description"`);
          this.metaService.updateTag({ property: `og:type`, content: `webpage` }, `property="og:type"`);
          this.metaService.updateTag({ property: `og:image`, content: `media/main/barrel.png` }, `property="og:image"`);
      }
    },
    error => {
      this.error = true,
      this.errorCode = error.status.toString(),
      this.errorVars = this.errorService.getCodes(this.errorCode)
    });
  }
} 