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
import { EntityListComponent } from './entity/entity-list/entity-list.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { EntityAccessCreateComponent } from './entity/entity-access-create/entity-access-create.component';
import { EntityCreateComponent } from './entity/entity-create/entity-create.component';


const routes: Routes = [{
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    component: HomeComponent,
    path: 'home',
    canActivate : [AuthGuard],
    children:[
      { path:'',component:DashboardComponent},
      { path:'dashboard',component:DashboardComponent},
      { path:'entities/:entity_code',component:EntityListComponent},
      // { path:'not-found',component:NotFoundComponent},
      { path:'not-found',component:EntityCreateComponent/*EntityAccessCreateComponent*/},
      { path:'**',component:NotFoundComponent},
    ]
  }, 
  {
    component: EntityAccessCreateComponent,
    path: 'demo'
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
