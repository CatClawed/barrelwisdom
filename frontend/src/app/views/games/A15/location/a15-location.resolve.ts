import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { RegionData } from "@app/interfaces/a15";
import { A15Service } from "@app/services/a15.service";
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })
export class A15LocationResolver implements Resolve<RegionData> {

  constructor(private a15service: A15Service,
    public router: Router,
    public route: ActivatedRoute) {
    }

  resolve(route: ActivatedRouteSnapshot): Observable<RegionData> {
    return this.a15service.getRegion(route.params.location, route.params.language).pipe(
        catchError(() => {
            this.router.navigateByUrl('/escha/error', { skipLocationChange: true });
            return EMPTY;
        }));
    }
}