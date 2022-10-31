import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { HeaderSectionComponent } from './header-section/header-section.component';
import { FooterSectionComponent } from './footer-section/footer-section.component';
import { ButtonHomeScreenComponent } from './button-home-screen/button-home-screen.component';
import { SuperAdminComponent } from './super-admin/super-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    HeaderSectionComponent,
    FooterSectionComponent,
    ButtonHomeScreenComponent,
    SuperAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
