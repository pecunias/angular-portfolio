import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular material
import { MatCardModule } from '@angular/material/card';
import { CardQuoteComponent } from './components/card-quote/card-quote.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { NewQuoteComponent } from './components/new-quote/new-quote/new-quote.component';
import { DialogComponent } from './components/dialog/dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ProfileComponent } from './components/profile/profile/profile.component'
import { MatToolbarModule } from '@angular/material/toolbar';

import { 
  AuthGuardService as AuthGuard 
} from './../app/services/auth/auth-guard/auth-guard.service';
import { AuthService } from './services/auth/auth.service';
import { LoginComponent } from './components/login/login/login.component';
import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';
import { RegisterComponent } from './components/register/register.component';
import { RegisterService } from './services/auth/register/register.service';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CardQuoteComponent,
    NewQuoteComponent,
    DialogComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule
  ],
  providers: [AuthGuard, AuthService, JwtHelperService,  { provide: JWT_OPTIONS, useValue: JWT_OPTIONS }, RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
