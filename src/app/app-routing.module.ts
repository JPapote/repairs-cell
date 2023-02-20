import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClientComponent } from './components/add-client/add-client.component';
import { AddPhoneComponent } from './components/add-phone/add-phone.component';
import { AddReparationComponent } from './components/add-reparation/add-reparation.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { ReparationComponent } from './components/reparation/reparation.component';
import { SignInComponent } from './components/signin/signin.component';
import { AuthGuard } from './utils/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signIn', component: SignInComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path: "addPhone/:id", component:AddPhoneComponent, canActivate:[AuthGuard]},
  { path: 'addClient', component: AddClientComponent, canActivate:[AuthGuard]},
  { path: 'reparation', component: ReparationComponent, canActivate:[AuthGuard]},
  { path: 'reparation/:id', component: AddReparationComponent, canActivate:[AuthGuard]},

  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
