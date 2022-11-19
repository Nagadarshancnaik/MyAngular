import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { CharacterPageComponent } from './character-page/character-page.component';
import { FilmsDetailsComponent } from './films-details/films-details.component';
import { FilmsPageComponent } from './films-page/films-page.component';
import { HomeComponent } from './home/home.component';
import { PlanetsDetailsComponent } from './planets-details/planets-details.component';
import { PlanetsPageComponent } from './planets-page/planets-page.component';
import { SpeciesDetailsComponent } from './species-details/species-details.component';
import { SpeciesPageComponent } from './species-page/species-page.component';
import { StarshipDetailsComponent } from './starship-details/starship-details.component';
import { StarshipPageComponent } from './starship-page/starship-page.component';
import { VehiclesDetailsComponent } from './vehicles-details/vehicles-details.component';
import { VehiclesPageComponent } from './vehicles-page/vehicles-page.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},

  {path:'characterDetails',component:CharacterDetailsComponent},
  {path:'characterPage',component:CharacterPageComponent},

  {path:'filmsDetails',component:FilmsDetailsComponent},
  {path:'filmsPage',component:FilmsPageComponent},

  {path:'speciesDetails',component:SpeciesDetailsComponent},
  {path:'speciesPage',component:SpeciesPageComponent},

  {path:'planetsDetails',component:PlanetsDetailsComponent},
  {path:'planetsPage',component:PlanetsPageComponent},

  {path:'starshipsDetails',component:StarshipDetailsComponent},
  {path:'starshipPage',component:StarshipPageComponent},

  {path:'vehiclesDetails',component:VehiclesDetailsComponent},
  {path:'vehiclesPage',component:VehiclesPageComponent},

  {path:'',component:HomeComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
