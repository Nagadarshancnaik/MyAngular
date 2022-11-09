import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavouriteComponent } from './favourite/favourite.component';
import { HomeComponent } from './home/home.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { RecentComponent } from './recent/recent.component';

const routes: Routes = [
  {path:'home',component:MainComponentComponent},
  {path:'favourite',component:FavouriteComponent},
  {path:'recent',component:RecentComponent},
  {path:'',component:MainComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routings=[MainComponentComponent,FavouriteComponent,RecentComponent]