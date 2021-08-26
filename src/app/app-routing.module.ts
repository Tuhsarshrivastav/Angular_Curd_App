import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ProductsCreateComponent } from './admin/products-create/products-create.component';
import { ProductsEditComponent } from './admin/products-edit/products-edit.component';
import { ProductsComponent } from './admin/products/products.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'products',
        component: ProductsComponent,
      },
      {
        path: 'products/create',
        component: ProductsCreateComponent,
      },
      {
        path: 'products/:id/edit',
        component: ProductsEditComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
