import { AreaData } from '@app/interfaces/a12';
import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, ActivatedRoute } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { A12Service } from '@app/services/a12.service';


@Injectable({
    providedIn: 'root'
  })
export class A12LocationResolver implements Resolve<AreaData> {

  constructor(private a12service: A12Service,
    public router: Router,
    public route: ActivatedRoute) {
    }

  resolve(route: ActivatedRouteSnapshot): Observable<AreaData> {
    return this.a12service.getRegion(route.params.location, route.params.language).pipe(
        catchError(() => {
            this.router.navigateByUrl('/totori/error', { skipLocationChange: true });
            return EMPTY;
        }));
    }
}