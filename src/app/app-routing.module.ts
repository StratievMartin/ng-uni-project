import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddJobAdComponent } from './components/add-job-ad/add-job-ad.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { JobAdDetailsComponent } from './components/job-ad-details/job-ad-details.component';
import { JobAdsListComponent } from './components/job-ads-list/job-ads-list.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'ads', component: JobAdsListComponent },
  { path: 'addAd', component: AddJobAdComponent },
  { path: 'details/:id', component: JobAdDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
