import { AreaData } from "@app/interfaces/a16";
import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, ActivatedRoute } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { A16Service } from "@app/services/a16.service";


@Injectable({
    providedIn: 'root'
  })
export class A16LocationResolver implements Resolve<AreaData> {

  constructor(private a16service: A16Service,
    public router: Router,
    public route: ActivatedRoute) {
    }

  resolve(route: ActivatedRouteSnapshot): Observable<AreaData> {
    return this.a16service.getRegion(route.params.location, route.params.language).pipe(
        catchError(() => {
            this.router.navigateByUrl('/escha/error', { skipLocationChange: true });
            return EMPTY;
        }));
    }
}