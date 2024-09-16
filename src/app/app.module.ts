import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsModule } from './layouts/layouts.module';
import { SharedModule } from './shared/shared.module';
import { AppsComponent } from './pages/apps/apps.component';
import { SessionsComponent } from './pages/sessions/sessions.component';
import { PrimeNgModule } from './shared/prime-ng.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent, AppsComponent, SessionsComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    PrimeNgModule,
    LayoutsModule,
    SharedModule,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
