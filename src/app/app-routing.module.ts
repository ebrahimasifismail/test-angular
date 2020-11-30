import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/authentication/login/login.component';
import { PageNotFoundComponent } from './components/dashboard/page-not-found/page-not-found.component';
import { DashbiardComponent } from './components/dashboard/dashbiard/dashbiard.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, data: { title: 'PPAT - Login' }  },
  { path: 'home', component: DashbiardComponent, canActivate: [AuthGuard] },
  { path: '404', component: PageNotFoundComponent, data: { title: 'Page Not Found' }  },
  { path: '**', redirectTo: '404' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
