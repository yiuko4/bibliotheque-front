// app.routes.ts

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Importez votre composant Home
import { UserComponent } from './user/user.component';
import {LoginComponent} from "./login/login.component";

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirigez la racine vers /home
  { path: 'user/:id', component: UserComponent }, // Route pour Home
  { path: 'home', component: HomeComponent }, // Route pour Home
 // { path: 'user', component: UserComponent }, // Route pour User
  { path: 'login', component: LoginComponent }, // Route pour login

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
