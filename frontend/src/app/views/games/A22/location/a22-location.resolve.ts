import { Region } from '@app/views/games/A22/_services/a22.interface';
import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, ActivatedRoute } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { A22Service } from '@app/views/games/A22/_services/a22.service';


@Injectable({
    providedIn: 'root'
  })
export class A22LocationResolver implements Resolve<Region> {

  constructor(private a22service: A22Service,
    public router: Router,
    public route: ActivatedRoute) {
    }

  resolve(route: ActivatedRouteSnapshot): Observable<Region> {
    return this.a22service.getLocation(route.params.subject, route.params.language).pipe(
        catchError(() => {
            this.router.navigateByUrl('/ryza2/error', { skipLocationChange: true });
            return EMPTY;
        }));
    }
}