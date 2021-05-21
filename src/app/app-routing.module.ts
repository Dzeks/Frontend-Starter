import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRoleGuard } from './user-role.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [UserRoleGuard],
    children: [
      {
        path: 'shopping',
        loadChildren: () =>
          import('./shopping-page/shopping-page.module').then(
            (m) => m.ShoppingPageModule
          ),
      },
      {
        path: 'admin',
        loadChildren: () =>
          import('./admin-page/admin-page.module').then(
            (m) => m.AdminPageModule
          ),
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
