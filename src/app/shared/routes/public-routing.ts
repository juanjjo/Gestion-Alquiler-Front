import { Routes, RouterModule } from '@angular/router';

export const Public_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => import('../../public/public.module').then(m=> m.PublicModule)
}
];

