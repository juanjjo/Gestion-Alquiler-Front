import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { PublicComponent } from './public/public.component';
import { Public_ROUTES } from './shared/routes/public-routing';
import { Admin_ROUTES } from './shared/routes/admin-routing';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'alquiler',
    pathMatch: 'full',
  },
  { path: '', component: PublicComponent, data: { title: 'public Views' },children:Public_ROUTES},
  { path: '', component: AdminComponent, data: { title: 'admin Views' }, children: Admin_ROUTES},
  // { path: '**', redirectTo: 'error', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


