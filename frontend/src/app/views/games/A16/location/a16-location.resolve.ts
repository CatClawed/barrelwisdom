import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { AreaData } from '@app/views/games/A16/_services/a16.interface';
import { A16Service } from '@app/views/games/A16/_services/a16.service';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class A16LocationResolver implements Resolve<AreaData> {

  constructor(private a16service: A16Service,
    public router: Router,
    public route: ActivatedRoute) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<AreaData> {
    return this.a16service.getRegion(route.params.subject, route.params.language).pipe(
      catchError(() => {
        this.router.navigateByUrl('/escha/error', { skipLocationChange: true });
        return EMPTY;
      }));
  }
}