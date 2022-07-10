import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { AreaData } from '@app/views/games/A12/_services/a12.interface';
import { A12Service } from '@app/views/games/A12/_services/a12.service';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
  })
export class A12LocationResolver implements Resolve<AreaData> {

  constructor(private a12service: A12Service,
    public router: Router,
    public route: ActivatedRoute) {
    }

  resolve(route: ActivatedRouteSnapshot): Observable<AreaData> {
    return this.a12service.getRegion(route.params.subject, route.params.language).pipe(
        catchError(() => {
            this.router.navigateByUrl('/totori/error', { skipLocationChange: true });
            return EMPTY;
        }));
    }
}