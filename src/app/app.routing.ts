import {Routes, RouterModule} from '@angular/router';


import {UserComponent} from './user/user.component';
import {AppComponent} from './app.component';
import {NotFoundComponent} from './not-found/not-found.component';

const appRoutes: Routes = [
  {path: '', component: UserComponent},
  {path: 'login', component: UserComponent},
  {path: '404', component: NotFoundComponent},
  // otherwise redirect to homes
  {path: '**', redirectTo: '404'}
];

export const routing = RouterModule.forRoot(appRoutes);
