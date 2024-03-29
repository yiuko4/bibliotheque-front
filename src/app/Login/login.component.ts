import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user = {
    email: '',
    password: ''
  };

  onFormSubmit(form: any): void {
    console.log('Email:', this.user.email);
    console.log('Password:', this.user.password);
  }
}
