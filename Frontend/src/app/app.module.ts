import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FileUploadModule } from 'ng2-file-upload';
// import { ToastModule } from 'ng2-toastr/ng2-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { FormsComponent } from './forms/forms.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { ViewFormsComponent } from './view-forms/view-forms.component';
import { UploadCSVComponent } from './upload-csv/upload-csv.component';
import { CreateFormComponent } from './create-form/create-form.component';
import { QuestionComponent } from './create-form/question/question.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database-deprecated';
import { AngularFireAuth } from '@angular/fire/auth';
import {environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';




@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    ViewFormsComponent,
    UploadCSVComponent,
    CreateFormComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FileUploadModule,
    // ToastModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    // AngularFireAuth,
    AngularFireAuthModule

  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
