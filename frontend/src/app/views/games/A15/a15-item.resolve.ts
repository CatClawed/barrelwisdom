import { ItemFull } from "@app/interfaces/a15";
import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable, from } from 'rxjs';
import { A15Service } from "@app/services/a15.service";
import { SeoService } from "@app/services/seo.service";
import {AppComponent} from '@app/app.component';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })
export class A15ItemResolver implements Resolve<ItemFull> {

  seoTitle: string;
  seoDesc: string;
  seoImage: string;
  seoURL: string;

  gameTitle: string;
  gameURL: string;
  imgURL: string;
  item: Observable<ItemFull>;

  constructor(private a15service: A15Service,
    private seoService: SeoService) {
    }

  resolve(route: ActivatedRouteSnapshot): Promise<ItemFull> {

    return this.a15service.getItem(route.params.item, route.params.language).toPromise().then(
        item => {
            this.gameTitle = this.a15service.gameTitle[this.language];
          this.gameURL = this.a15service.gameURL;
          this.imgURL = this.a15service.imgURL;

          this.seoURL = `${this.gameURL}/items/${item.slugname}/${route.params.language}`;
          this.seoTitle = `${item.name} - ${this.gameTitle}`;
          this.seoDesc = `${item.desc}`
          this.seoImage = `${this.imgURL}items/${item.slugname}.png`
          this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
          return item;
        }
    );
  }
}