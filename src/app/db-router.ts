import { Injectable } from '@angular/core';
import { Main } from './main/main';
import { Router, Routes } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DbRouter {
  constructor(private router: Router) {}
  db_router: any = {
    path: '',
    component: Main,
    children: [
      {
        path: 'main1',

        loadComponent: () =>
          new Date().getTime() % 2 == 0
            ? import('./main/main1/main1').then((m) => m.Main1)
            : import('./main/main2/main2').then((m) => m.Main2),
      },
      {
        path: 'main2',
        loadComponent: () => import('./main/main2/main2').then((m) => m.Main2),
      },
      {
        path: 'main3',
        loadComponent: () => import('./main/main3/main3').then((m) => m.Main3),
      },
      {
        path: 'main4',
        loadComponent: () => import('./main/main4/main4').then((m) => m.Main4),
      },
      {
        path: 'main5',
        loadComponent: () => import('./main/main5/main5').then((m) => m.Main5),
      },
      {
        path: 'main6',
        loadComponent: () => import('./main/main6/main6').then((m) => m.Main6),
      },
      {
        path: 'main7',
        loadComponent: () => import('./main/main7/main7').then((m) => m.Main7),
      },
      {
        path: 'main8',
        loadComponent: () => import('./main/main8/main8').then((m) => m.Main8),
      },
      {
        path: 'main9',
        loadComponent: () => import('./main/main9/main9').then((m) => m.Main9),
      },
      {
        path: 'main10',
        loadComponent: () => import('./main/main10/main10').then((m) => m.Main10),
      },
    ],
  };

  loadRoutes() {
    const newConfig = [...this.router.config, ...this.db_router];
    this.router.resetConfig(newConfig);
  }
}
