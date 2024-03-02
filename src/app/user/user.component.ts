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

  constructor(private route: ActivatedRoute, private userService: UserService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const userId = params.get('id'); // Assure-toi que 'id' correspond au nom de ton paramètre défini dans les routes

      if (userId) {
        this.userService.getUserById(+userId).subscribe((data: User[]) => { // Note que j'ai changé le type à User[]
          if (data.length > 0) {
            this.user = data[0]; // Prends le premier utilisateur du tableau
            console.log(this.user);
          }
        }, error => {
          console.error('Erreur lors de la récupération de lutilisateur:', error);
        });
      }
    });
  }

}
