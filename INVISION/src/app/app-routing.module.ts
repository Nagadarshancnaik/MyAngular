import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  {path:'forgotPassword',component:ForgotPasswordComponent},
  {path: '' , component:LoginPageComponent},
  {path: 'login',component:LoginPageComponent},
  {path:'home',component:HomeScreenComponent},
  {path:'changePassword',component:ChangePasswordComponent},
  // {path: '' , component:LoginPageComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routers=[HomeScreenComponent,LoginPageComponent]