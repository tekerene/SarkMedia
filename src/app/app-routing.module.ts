import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './module/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { HomeComponent } from './resgis/home';
import { AuthGuard } from './resgis/_helpers';
import { LoginComponent } from './resgis/login';
import { RegisterComponent } from './resgis/register';


const routes: Routes = [
 { path: '**', redirectTo: 'resgis' },
 { path: '', component: DefaultComponent,
  children: [{
    path: '',
    component: DashboardComponent
  }, 
  {
    path: 'posts',
    component:PostsComponent 
  }
  
  //  {
  //   path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  //   { path: 'login', component: LoginComponent },
  //   { path: 'register', component: RegisterComponent },
  //   { path: '**', redirectTo: '' }
]
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{};
