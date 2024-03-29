// header.component.ts

import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import {FormsModule} from "@angular/forms";
import {Book} from "../Models/book.model";
import {BookService} from "../Services/Books/book.service";
import {NgForOf, NgIf} from "@angular/common"; // Assurez-vous que le chemin est correct

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, FormsModule, NgIf, NgForOf],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  searchQuery: string = '';
  books: Book[] = []; // Pour stocker les résultats de recherche

  constructor(private bookService: BookService) {}

  searchBooks() {
    if (this.searchQuery) {
      this.bookService.getBooksByName(this.searchQuery).subscribe({
        next: (books) => {
          this.books = books.slice(0, 5); // Limite à 5 résultats
        },
        error: (error) => {
          console.error('Erreur lors de la récupération des livres', error);
        }
      });
    }
  }


}
