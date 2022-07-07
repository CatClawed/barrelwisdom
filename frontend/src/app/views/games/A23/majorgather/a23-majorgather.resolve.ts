import { MajorGather } from "@app/views/games/A23/_services/a23.interface";
import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, ActivatedRoute } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { A23Service } from "@app/views/games/A23/_services/a23.service";


@Injectable({ 
    providedIn: 'root'
  })
export class A23MajorGatherResolver implements Resolve<MajorGather> {

  constructor(private a23service: A23Service,
    public router: Router,
    public route: ActivatedRoute) {
    }

    resolve(route: ActivatedRouteSnapshot): Observable<MajorGather> {
      return this.a23service.getMajorGather(route.params.language).pipe(
          catchError(() => {
              this.router.navigateByUrl('/ryza2/error', { skipLocationChange: true });
              return EMPTY;
          }));
      }
  }