import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddJobAdComponent } from './components/job-components/add-job-ad/add-job-ad.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { JobAdDetailsComponent } from './components/job-components/job-ad-details/job-ad-details.component';
import { JobAdsListComponent } from './components/job-components/job-ads-list/job-ads-list.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent,canActivate: [AuthGuard]}, 
  { path: 'ads', component: JobAdsListComponent },
  { path: 'addAd', component: AddJobAdComponent,canActivate: [AuthGuard]  },
  { path: 'details/:id', component: JobAdDetailsComponent,canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
