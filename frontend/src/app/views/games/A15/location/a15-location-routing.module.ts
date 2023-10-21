import { NgModule, inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, Router, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { LanguageGuard } from '@app/_helpers/language.guard';
import { RegionData } from '@app/views/games/A15/_services/a15.interface';
import { A15Service } from '@app/views/games/A15/_services/a15.service';
import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { A15LocationComponent } from './a15-location.component';

const resolver: ResolveFn<RegionData> =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const router = inject(Router);
    return inject(A15Service)
      .getRegion(route.params.subject, route.params.language).pipe(
        catchError(() => {
          router.navigateByUrl('/escha/error', { skipLocationChange: true });
          return EMPTY;
        })
      )
  }

const routes: Routes = [
  {
    path: ':subject/:language',
    canActivate: [LanguageGuard],
    component: A15LocationComponent,
    resolve: {
      loc: resolver
    }
  },
  {
    path: ':subject',
    canActivate: [LanguageGuard],
    component: A15LocationComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A15LocationRoutingModule {}