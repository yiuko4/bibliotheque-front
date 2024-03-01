import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from "../models/user.model";
import { UserService } from "../services/users/user.service";
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  standalone: true,
  imports: [NgIf],
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user?: User;

  constructor(private route: ActivatedRoute, private userService: UserService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const userId = +params['id']; // Le signe '+' convertit la chaîne en nombre
      this.userService.getUserById(userId).subscribe((data: User) => { // Supposant que l'API retourne un seul utilisateur et non un tableau
        this.user = data;
      }, error => {
        console.error('Erreur lors de la récupération de lutilisateur:', error);
      });
    });
  }
}
