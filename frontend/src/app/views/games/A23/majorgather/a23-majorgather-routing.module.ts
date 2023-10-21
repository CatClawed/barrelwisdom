import { NgModule, inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, Router, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { LanguageGuard } from '@app/_helpers/language.guard';
import { MajorGather } from "@app/views/games/A23/_services/a23.interface";
import { A23Service } from "@app/views/games/A23/_services/a23.service";
import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { A23MajorGatherComponent } from './a23-majorgather.component';

const resolver: ResolveFn<MajorGather> =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const router = inject(Router);
    return inject(A23Service)
      .getMajorGather(route.params.language).pipe(
        catchError(() => {
          router.navigateByUrl('/sophie2/error', { skipLocationChange: true });
          return EMPTY;
        })
      )
  }

const routes: Routes = [
  {
    path: ':language',
    canActivate: [LanguageGuard],
    component: A23MajorGatherComponent,
    resolve: {
      gather: resolver
    }
  },
  {
    path: '',
    canActivate: [LanguageGuard],
    component: A23MajorGatherComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A23MajorGatherRoutingModule {}