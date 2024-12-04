import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [ {
    path: '',
    component: AppComponent,
    children: [
        {
            path: '',
            redirectTo: 'home',
            pathMatch: 'full',
          },
    
      {
        path: '',
        loadChildren: () =>
          import('./layout/main/main.module').then((m) => m.MainModule),

      },

    ],
     title: 'ATM Management System',

  },
];
