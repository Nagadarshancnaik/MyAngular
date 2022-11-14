import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavouriteComponent } from './favourite/favourite.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RecentComponent } from './recent/recent.component';

const routes: Routes = [
  {path:'home',component:HomePageComponent},
  {path:'favourite',component:FavouriteComponent},
  {path:'recent',component:RecentComponent},
  {path:'',component:HomePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routings=[HomePageComponent,FavouriteComponent,]

