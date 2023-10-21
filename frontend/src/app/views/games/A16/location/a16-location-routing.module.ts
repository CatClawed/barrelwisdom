import { NgModule, inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, Router, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { LanguageGuard } from '@app/_helpers/language.guard';
import { AreaData } from '@app/views/games/A16/_services/a16.interface';
import { A16Service } from '@app/views/games/A16/_services/a16.service';
import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { A16LocationComponent } from './a16-location.component';


const resolver: ResolveFn<AreaData> =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const router = inject(Router);
    return inject(A16Service)
      .getRegion(route.params.subject, route.params.language).pipe(
        catchError(() => {
          router.navigateByUrl('/shallie/error', { skipLocationChange: true });
          return EMPTY;
        })
      )
  }

const routes: Routes = [
  {
    path: ':subject/:language',
    canActivate: [LanguageGuard],
    component: A16LocationComponent,
    resolve: {
      loc: resolver
    }
  },
  {
    path: ':subject',
    canActivate: [LanguageGuard],
    component: A16LocationComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A16LocationRoutingModule {}