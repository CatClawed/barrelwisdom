import { Region } from "@app/interfaces/brsl";
import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, ActivatedRoute } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BRSLService } from "@app/services/brsl.service";


@Injectable({
    providedIn: 'root'
  })
export class BRSLLocationResolver implements Resolve<Region> {

  constructor(private brslservice: BRSLService,
    public router: Router,
    public route: ActivatedRoute) {
    }

  resolve(route: ActivatedRouteSnapshot): Observable<Region> {
    return this.brslservice.getRegion(route.params.location, route.params.language).pipe(
        catchError(() => {
            this.router.navigateByUrl('/second-light/error');
            return EMPTY;
        }));
    }
}