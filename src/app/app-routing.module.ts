import {
  NgModule
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import {
  LoginComponent
} from './shared/login/login.component';
import {
  HomeComponent
} from './shared/home/home.component';
import { AuthGuard } from './shared/auth.guard';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { SignOutComponent } from './shared/sign-out/sign-out.component';


const routes: Routes = [{
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    component: HomeComponent,
    path: 'dashboard',
    canActivate : [AuthGuard]
  },
  {
    component: LoginComponent,
    path: 'login'
  },
  {
    component: SignOutComponent,
    path: 'signout'
  },
  {
    component: NotFoundComponent,
    path: '**'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
