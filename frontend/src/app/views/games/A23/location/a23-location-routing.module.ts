import { NgModule, inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, Router, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { LanguageGuard } from '@app/_helpers/language.guard';
import { Region } from "@app/views/games/A23/_services/a23.interface";
import { A23Service } from "@app/views/games/A23/_services/a23.service";
import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { A23LocationComponent } from './a23-location.component';


const resolver: ResolveFn<Region> =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const router = inject(Router);
    return inject(A23Service)
      .getLocation(route.params.subject, route.params.language).pipe(
        catchError(() => {
          router.navigateByUrl('/sophie2/error', { skipLocationChange: true });
          return EMPTY;
        })
      )
  }

const routes: Routes = [
  {
    path: ':subject/:language',
    canActivate: [LanguageGuard],
    component: A23LocationComponent,
    resolve: {
      loc: resolver
    }
  },
  {
    path: ':subject',
    canActivate: [LanguageGuard],
    component: A23LocationComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A23LocationRoutingModule {}