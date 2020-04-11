import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { HomeComponent } from './home/home.component';
import { LeftbarComponent } from './leftbar/leftbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    HomeComponent,
    LeftbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
