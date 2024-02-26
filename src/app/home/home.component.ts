import { Component } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";

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
export class HomeComponent {
  books: Livre[] = [
    { livreId: 1, auteurId: 1, categorieId: 1, titre: "Le Petit Prince", emplacement: "Étagère A", etatId : 1 , disponibleId: 1},
    { livreId: 2, auteurId: 2, categorieId: 2, titre: "1984", emplacement: "Étagère B" , etatId : 1 , disponibleId: 1},
    { livreId: 3, auteurId: 3, categorieId: 1, titre: "L'Étranger", emplacement: "Étagère A" , etatId : 3 , disponibleId: 0},
    { livreId: 4, auteurId: 1, categorieId: 2, titre: "Les Misérables", emplacement: "Étagère B" , etatId : 2 , disponibleId: 0},
    { livreId: 5, auteurId: 4, categorieId: 3, titre: "La Peste", emplacement: "Étagère C" , etatId : 3 , disponibleId: 1},
  ];
  filteredBooks: Livre[] = [];
  selectedAuteurId: number | '' = '';
  selectedCategorieId: number | '' = '';
  selectedEmplacement: string  = '';
  selectedEtatId: number | '' = '';
  selectedDisponibleId: number | '' = '';

  constructor() {
    this.filteredBooks = this.books; // Au début, afficher tous les livres
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



interface Livre {
  livreId: number;
  auteurId: number;
  categorieId: number;
  titre: string;
  emplacement: string;
  etatId: number;
  disponibleId : number;
}
