import { Routes, RouterModule } from '@angular/router';

//Route for content layout with sidebar, navbar and footer.

export const Admin_ROUTES: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('../../admin/home/home.module').then(m => m.HomeModule)
  },
  // {
  //   path: 'corporativos',
  //   loadChildren: () => import('../../corporativos/corporativos.module').then(m => m.CorporativosModule)
  // },

];
