import {Routes, RouterModule} from '@angular/router';

import {NotFoundComponent} from './not-found/not-found.component';
import {LoginComponent} from './views/user/login/login.component';
import {ProductComponent} from './views/product/product.component';

const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'products', component: ProductComponent},
  {path: 'login', component: LoginComponent},
  {path: '404', component: NotFoundComponent},
  // otherwise redirect to homes
  {path: '**', redirectTo: '404'}
];

export const routing = RouterModule.forRoot(appRoutes);
