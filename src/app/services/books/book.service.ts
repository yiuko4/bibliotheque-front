// book.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from "../../models/book.model";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl = 'http://localhost:3000/api/livres'; // URL de base de l'API

  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiUrl}/recupListeLivres`);
  }

  getBooksById(id: number): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiUrl}/recupListeLivres`);
  }
}
