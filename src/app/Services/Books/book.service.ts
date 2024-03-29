// book.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from "../../Models/book.model";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl = 'http://localhost:3000/api/livres'; // URL de base de l'API

  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiUrl}/recupListeLivres`);
  }

  getBooksByName(title: string): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiUrl}/rechercherLivres?titre=${title}`);
  }
  getBookById(id: number): Observable<Book> {
    // Notez que nous attendons un seul livre ici, donc le type retourné est Book et non Book[]
    return this.http.get<Book>(`${this.apiUrl}/recupInfoLivre?livreId=${id}`);
  }
  getBooksById(id: number): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiUrl}/recupListeLivres`);
  }

  emprunterLivre(utilisateurId: number | null, livreId: number): Observable<any> {
    const body = { utilisateurId: utilisateurId, livreId: livreId };
    return this.http.post(`${this.apiUrl}/empruntLivre`, body);
  }


}
