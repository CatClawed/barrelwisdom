import { NgModule, inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, Router, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { LanguageGuard } from '@app/_helpers/language.guard';
import { Region } from '@app/views/games/A22/_services/a22.interface';
import { A22Service } from '@app/views/games/A22/_services/a22.service';
import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { A22LocationComponent } from './a22-location.component';

const resolver: ResolveFn<Region> =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const router = inject(Router);
    return inject(A22Service)
      .getLocation(route.params.subject, route.params.language).pipe(
        catchError(() => {
          router.navigateByUrl('/ryza2/error', { skipLocationChange: true });
          return EMPTY;
        })
      )
  }

const routes: Routes = [
  {
    path: ':subject/:language',
    canActivate: [LanguageGuard],
    component: A22LocationComponent,
    resolve: {
      loc: resolver
    }
  },
  {
    path: ':subject',
    canActivate: [LanguageGuard],
    component: A22LocationComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A22LocationRoutingModule {}