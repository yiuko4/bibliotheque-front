import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./Header/header.component";
import {HttpClientModule} from "@angular/common/http";
import {UserService} from "./Services/Users/user.service";
import {BookService} from "./Services/Books/book.service";
import {AppRoutingModule} from "./app.routes";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HttpClientModule, CommonModule],
  providers: [UserService, BookService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Projects';


}
