import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from "../models/user.model";
import { UserService } from "../services/users/user.service";
import {DatePipe, NgForOf, NgIf} from "@angular/common";
import {Book} from "../models/book.model";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  standalone: true,
  imports: [NgIf, NgForOf, DatePipe],
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User | null = null;
  emprunts: Book[] = [];

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
  ) {}
  confirmationMessage: string = '';

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const userId = params.get('id');
      if (userId) {
        this.userService.getUserById(+userId).subscribe({
          next: (user) => {
            this.user = user;
            this.loadUserEmprunts(+userId);
          },
          error: (error) => {
            console.error('Erreur lors de la récupération des informations de l’utilisateur', error);
          }
        });
      }
    });
  }

  loadUserEmprunts(id: number): void {

    this.userService.getUserEmprunts(id).subscribe({
      next: (books) => {
        this.emprunts = books;
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des emprunts de l’utilisateur', error);
        // Traitez ici les erreurs, par exemple, en affichant un message d'erreur à l'utilisateur
      }
    });
  }


  retournerLivre(empruntId: number): void {
    this.userService.retournerLivre(empruntId).subscribe({
      next: (response) => {
        console.log(response.message);
        // Mettre à jour le message de confirmation
        this.confirmationMessage = 'Le livre a été retourné avec succès.';
        this.loadUserEmprunts(<number>this.user?.utilisateurId);
      },
      error: (error) => {
        console.error('Erreur lors du retour du livre', error);
        // Optionnellement, vous pouvez également gérer les erreurs en affichant un message
        this.confirmationMessage = 'Erreur lors du retour du livre.';
      }
    });
  }


}
