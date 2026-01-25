import { Routes } from '@angular/router';
import { inicioRoute } from './routes/inicio';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  ...inicioRoute,
];
