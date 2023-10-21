import { NgModule, inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, Router, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { LanguageGuard } from '@app/_helpers/language.guard';
import { Region } from '@app/views/games/BRSL/_services/brsl.interface';
import { BRSLService } from "@app/views/games/BRSL/_services/brsl.service";
import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BRSLLocationComponent } from './brsl-location.component';

const resolver: ResolveFn<Region> =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const router = inject(Router);
    return inject(BRSLService)
      .getRegion(route.params.subject, route.params.language).pipe(
        catchError(() => {
          router.navigateByUrl('/second-light/error', { skipLocationChange: true });
          return EMPTY;
        })
      )
  }

const routes: Routes = [
  {
    path: ':subject/:language',
    canActivate: [LanguageGuard],
    component: BRSLLocationComponent,
    resolve: {
      loc: resolver
    }
  },
  {
    path: ':subject',
    canActivate: [LanguageGuard],
    component: BRSLLocationComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BRSLLocationRoutingModule {}