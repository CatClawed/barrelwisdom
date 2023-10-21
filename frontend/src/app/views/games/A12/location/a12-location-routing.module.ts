import { NgModule, inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, Router, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { LanguageGuard } from '@app/_helpers/language.guard';
import { AreaData } from '@app/views/games/A12/_services/a12.interface';
import { A12Service } from '@app/views/games/A12/_services/a12.service';
import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { A12LocationComponent } from './a12-location.component';

const resolver: ResolveFn<AreaData> =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const router = inject(Router);
    return inject(A12Service)
      .getRegion(route.params.subject, route.params.language).pipe(
        catchError(() => {
          router.navigateByUrl('/totori/error', { skipLocationChange: true });
          return EMPTY;
        })
      )
  }

const routes: Routes = [
  {
    path: ':subject/:language',
    canActivate: [LanguageGuard],
    component: A12LocationComponent,
    resolve: {
      loc: resolver
    }
  },
  {
    path: ':subject',
    canActivate: [LanguageGuard],
    component: A12LocationComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A12LocationRoutingModule {}