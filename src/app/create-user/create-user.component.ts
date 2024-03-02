import { Component } from '@angular/core';
import { UserService } from "../services/users/user.service";
import {User} from "../models/user.model";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],

})
export class CreateUserComponent {
  newUser: User = {
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

  constructor(private userService: UserService) {}

  onSubmit() {
    this.userService.createUser(this.newUser).subscribe({
      next: (user) => console.log('Utilisateur créé', user),
      error: (error) => console.error('Erreur lors de la création de l’utilisateur', error)
    });
  }
}
