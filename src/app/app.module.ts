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

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CardQuoteComponent,
    NewQuoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
