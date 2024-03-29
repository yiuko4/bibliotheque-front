// app.routes.ts

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Home/home.component';
import { UserComponent } from './User/user.component';
import {LoginComponent} from "./Login/login.component";
import {BookComponent} from "./Book/book.component";
import {CreateUserComponent} from "./CreateUser/createUser.component";

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirigez la racine vers /home
  { path: 'user/:id', component: UserComponent }, // Route pour Home
  { path: 'home', component: HomeComponent }, // Route pour Home
  { path: 'create-user', component: CreateUserComponent }, // Route pour Home
  { path: 'book/:id', component: BookComponent }, // Route pour Home
 // { path: 'user', component: UserComponent }, // Route pour User
  { path: 'login', component: LoginComponent }, // Route pour login

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
