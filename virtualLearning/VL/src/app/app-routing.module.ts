import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MobileSearchComponent } from './mobile-search/mobile-search.component';
import { MyCourseComponent } from './my-course/my-course.component';
import { OnGoingCoursesComponent } from './on-going-courses/on-going-courses.component';

const routes: Routes = [
  { path: 'mblSearch', component: MobileSearchComponent },
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'courseDetails',component:MyCourseComponent},
  {path:'allOngoingCourse',component:OnGoingCoursesComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
