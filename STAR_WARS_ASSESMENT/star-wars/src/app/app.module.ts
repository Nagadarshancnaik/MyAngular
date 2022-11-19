import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CharacterPageComponent } from './character-page/character-page.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StarwarsService } from './starwars.service';
import { CacheInterceptor } from './interceptor/cache.interceptor';
import { FilmsPageComponent } from './films-page/films-page.component';
import { FilmsDetailsComponent } from './films-details/films-details.component';
import { SpeciesPageComponent } from './species-page/species-page.component';
import { SpeciesDetailsComponent } from './species-details/species-details.component';
import { PlanetsPageComponent } from './planets-page/planets-page.component';
import { PlanetsDetailsComponent } from './planets-details/planets-details.component';
import { StarshipPageComponent } from './starship-page/starship-page.component';
import { StarshipDetailsComponent } from './starship-details/starship-details.component';
import { VehiclesDetailsComponent } from './vehicles-details/vehicles-details.component';
import { VehiclesPageComponent } from './vehicles-page/vehicles-page.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    CharacterPageComponent,
    CharacterDetailsComponent,
    FilmsPageComponent,
    FilmsDetailsComponent,
    SpeciesPageComponent,
    SpeciesDetailsComponent,
    PlanetsPageComponent,
    PlanetsDetailsComponent,
    StarshipPageComponent,
    StarshipDetailsComponent,
    VehiclesDetailsComponent,
    VehiclesPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [StarwarsService,

    {
      provide : HTTP_INTERCEPTORS,
      useClass : CacheInterceptor,
      multi : true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
