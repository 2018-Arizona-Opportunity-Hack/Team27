import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {FormsComponent} from './forms/forms.component';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ViewFormsComponent} from './view-forms/view-forms.component';
import {CreateFormComponent} from './create-form/create-form.component';
import {UploadCSVComponent} from './upload-csv/upload-csv.component';

const routes: Routes = [
  // Fallback when no prior route is matched
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'forms', component: FormsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'view-forms', component: ViewFormsComponent},
  {path: 'upload-csv', component: UploadCSVComponent},
  {path: 'create-form', component: CreateFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
