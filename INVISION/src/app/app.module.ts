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
import { LoginPageComponent } from './login-page/login-page.component';
import { InvisionService } from './invision.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routers } from './app-routing.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    HeaderSectionComponent,
    FooterSectionComponent,
    ButtonHomeScreenComponent,
    SuperAdminComponent,
    LoginPageComponent,
    routers,
    ForgotPasswordComponent,
    ChangePasswordComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
   
    
  ],
  providers: [InvisionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
