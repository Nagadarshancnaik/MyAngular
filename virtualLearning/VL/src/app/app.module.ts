import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MyCourseComponent } from './my-course/my-course.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterDialogComponent } from './filter-dialog/filter-dialog.component';
import { MobileSearchComponent } from './mobile-search/mobile-search.component';
import { MobileHeaderComponent } from './mobile-header/mobile-header.component';
import { MobileFilterDialogComponent } from './mobile-filter-dialog/mobile-filter-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { OnGoingCoursesComponent } from './on-going-courses/on-going-courses.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    MyCourseComponent,
    LoginComponent,
    FilterDialogComponent,
    MobileSearchComponent,
    MobileHeaderComponent,
    MobileFilterDialogComponent,
    OnGoingCoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
    
    providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 
