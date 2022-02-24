import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
<<<<<<< HEAD
=======
// import { CreateAdComponent } from './create-ad/create-ad.component';
// import { EditAdComponent } from './edit-ad/edit-ad.component';
// import { ListAdComponent } from './list-ad/list-ad.component';
>>>>>>> d3bb0afa9808918fa2987b3cb6c02ffad83e374c
import { AngularFireModule } from '@angular/fire/compat';
// import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
<<<<<<< HEAD
=======
    // CreateAdComponent,
    // EditAdComponent,
    // ListAdComponent,
>>>>>>> d3bb0afa9808918fa2987b3cb6c02ffad83e374c
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    // AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireModule.initializeApp(environment.firebaseConfig),    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
