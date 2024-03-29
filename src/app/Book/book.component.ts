import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from "../Models/book.model";
import { BookService } from "../Services/Books/book.service";
import {NgForOf, NgIf} from "@angular/common";
import {UserService} from "../Services/Users/user.service";
import {FormsModule} from "@angular/forms";
import {User} from "../Models/user.model";

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [
    NgIf,
    FormsModule,
    NgForOf,
    /* autres imports nécessaires ici */],
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  book: Book | undefined; // Indiquez que book peut être undefined

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
  private userService: UserService,

) {}



  searchQuery = '';
  foundUsers: User[] = [];
  selectedUserId: number | null = null;
  selectedUserName: string = ''; // Ajoutez
  message: string = '';
  formSubmitted = false; // Contrôle l'affichage du formulaire




  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.bookService.getBookById(+id).subscribe(books => {
          // Prendre seulement le premier livre si l'API retourne un tableau
          this.book = books[0]; // Ou vous pouvez décider de fusionner les emprunts si nécessaire
        });
      }
    });
  }

  emprunterLivre() {
    if (this.selectedUserId === null) {
      console.error("Aucun utilisateur n'est sélectionné.");
      return;
    }

    const livreId = this.book?.livreId;
    if (livreId !== undefined) {
      this.bookService.emprunterLivre(this.selectedUserId, livreId).subscribe({
        next: (response) => {


          console.log('Emprunt réussi', response);
          this.formSubmitted = true;
          setTimeout(() => {
            this.redirectToHome();
          }, 3000);
          // Mettez à jour l'interface utilisateur ou naviguez vers une autre vue si nécessaire
        },
        error: (error) => {
          this.message = "L\'utilisateur a déjà emprunté 3 livres.";
          console.error('Erreur lors de l’emprunt', error);
        }
      });
    }
  }
  redirectToHome() {
    window.location.href = '/home'; // Redirige vers la page d'accueil, ajustez si nécessaire
  }



  searchUser() {
    if (this.searchQuery.trim()) {
      this.userService.searchUsersByName(this.searchQuery.trim()).subscribe({
        next: (users) => {
          this.foundUsers = users;
        },
        error: (error) => {
          console.error('Erreur lors de la recherche d’utilisateurs', error);
        }
      });
    }
  }

  selectUser(userId: number | undefined) {
    if (userId !== undefined) {
      const user = this.foundUsers.find(u => u.utilisateurId === userId);
      if (user) {
        this.selectedUserId = userId;
        this.selectedUserName = user.nom; // Assurez-vous que 'nom' est une propriété définie pour un utilisateur
      } else {
        // Gestion d'erreur ou réinitialisation des valeurs si l'utilisateur n'est pas trouvé
        this.selectedUserId = null;
        this.selectedUserName = '';
      }
    } else {
      // Gestion d'erreur ou réinitialisation des valeurs si userId est undefined
      this.selectedUserId = null;
      this.selectedUserName = '';
    }
  }


}
