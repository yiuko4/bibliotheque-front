import { Component } from '@angular/core';
import {User} from "../Models/user.model";
import {UserService} from "../Services/Users/user.service";
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './createUser.component.html',
  styleUrl: './createUser.component.css'
})
export class CreateUserComponent {
  user: User = {
    nom: '',
    prenom: '',
    email: '',
    motDePasse: '',
    adresse: '',
    ville: '',
    codePostal: '',
    nbEmprunts: 0,
    nbRetard: 0
  };

  constructor(
    private userService: UserService,
  ) { }

  message: string = '';
  formSubmitted = false; // Contrôle l'affichage du formulaire

  onSubmit() {
    console.log(this.user);
    this.userService.createUser(this.user).subscribe({
      next: (user: any) => {
        console.log('Utilisateur créé :', user);
        this.formSubmitted = true;
        // Attendre quelques secondes avant de rediriger
        setTimeout(() => {
          this.redirectToHome();
        }, 3000); // Redirige après 3 secondes
      },
      error: (error: any) => {
        console.error('Erreur lors de la création de l’utilisateur :', error);
        this.message = "Erreur lors de la création de l’utilisateur.";
      }
    });
  }

  redirectToHome() {
    window.location.href = '/home'; // Redirige vers la page d'accueil, ajustez si nécessaire
  }
}
