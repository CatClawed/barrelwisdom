import { CanMatchFn, Route, Routes, UrlSegment } from '@angular/router';

const canMatchNumber: CanMatchFn = (route: Route, segments: UrlSegment[]) => {
  return !isNaN(Number(segments[segments.length - 1].path));
}

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'tag/:tagname',
        loadComponent: ()=> import('@app/views/main/home/home.component').then(m=>m.HomeComponent),
      },
      {
        path: 'tag/:tagname/:number',
        loadComponent: ()=> import('@app/views/main/home/home.component').then(m=>m.HomeComponent),
        canMatch: [canMatchNumber]
      },
      {
        path: '',
        loadComponent: ()=> import('@app/views/main/home/home.component').then(m=>m.HomeComponent),
      },
      {
        path: ':number',
        loadComponent: ()=> import('@app/views/main/home/home.component').then(m=>m.HomeComponent),
        canMatch: [canMatchNumber]
      }
    ]
  },
  {
    path: ':section/:title',
    children: [
      {
        path: '',
        loadComponent: ()=> import('@app/views/main/blog/blog.component').then(m=>m.BlogComponent),
      },
    ]
  },
  {
    path: '**',
    children: [
      {
        path: '',
        loadComponent: () => import('@app/views/_components/error/error.component').then(m=>m.ErrorComponent)
      },
    ]
  }
];
