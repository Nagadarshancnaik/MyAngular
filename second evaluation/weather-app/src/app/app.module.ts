import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routings } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HomePageComponent } from './home-page/home-page.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { RecentComponent } from './recent/recent.component';
import { RemoveFavComponent } from './remove-fav/remove-fav.component';
import { ClearRecentComponent } from './clear-recent/clear-recent.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    FavouriteComponent,
    routings,
    RecentComponent,
    RemoveFavComponent,
    ClearRecentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
