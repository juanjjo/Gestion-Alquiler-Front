import { Routes, RouterModule } from '@angular/router';

//Route for content layout with sidebar, navbar and footer.

export const Admin_ROUTES: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('../../admin/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'alquiler',
    loadChildren: () => import('../../admin/alquiler/alquiler.module').then(m => m.AlquilerModule)
  },
  {
    path: 'local',
    loadChildren: () => import('../../admin/local/local.module').then(m => m.LocalModule)
  },

];
