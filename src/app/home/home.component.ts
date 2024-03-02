import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {BookService} from "../services/books/book.service";
import {Book} from "../models/book.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [
    NgForOf,
    FormsModule,
    NgIf
  ],
  standalone: true
})
export class HomeComponent implements OnInit {
  books: Book[] = [];
  filteredBooks: Book[] = [];
  selectedAuteurId: number | '' = '';
  selectedCategorieId: number | '' = '';
  selectedEmplacement: string = '';
  selectedEtatId: number | '' = '';
  selectedDisponibleId: number | '' = '';

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    this.loadBooks();
  }

  loadBooks() {
    this.bookService.getAllBooks().subscribe({
      next: (data) => {
        this.books = data;
        this.filteredBooks = data;
      },
      error: (error) => console.error('Erreur lors de la récupération des livres:', error)
    });
  }

  applyFilters() {
    this.filteredBooks = this.books.filter(book => {
      return (this.selectedAuteurId ? book.auteurId == +this.selectedAuteurId : true) &&
        (this.selectedCategorieId ? book.categorieId == +this.selectedCategorieId : true) &&
        (this.selectedEmplacement ? book.emplacement === this.selectedEmplacement : true) &&
        (this.selectedEtatId ? book.etatId === +this.selectedEtatId : true) &&
        (this.selectedDisponibleId ? book.disponibleId === +this.selectedDisponibleId : true);
    });
  }

  setFilter(filterType: string, value: any) {
    switch (filterType) {
      case 'auteur':
        this.selectedAuteurId = this.selectedAuteurId === value ? '' : value;
        break;
      case 'categorie':
        this.selectedCategorieId = this.selectedCategorieId === value ? '' : value;
        break;
      case 'emplacement':
        this.selectedEmplacement = this.selectedEmplacement === value ? '' : value;
        break;
      case 'etat':
        this.selectedEtatId = this.selectedEtatId === value ? '' : value;
        break;
      case 'disponible':
        this.selectedDisponibleId = this.selectedDisponibleId === value ? '' : value;
        break;
      default:
        console.warn(`Filter type ${filterType} not recognized.`);
    }
    this.applyFilters();
  }


  resetFilters() {
    this.selectedAuteurId = '';
    this.selectedCategorieId = '';
    this.selectedEmplacement = '';
    this.selectedEtatId = '';
    this.selectedDisponibleId = '';
    this.applyFilters();
  }


  protected readonly dispatchEvent = dispatchEvent;
}

