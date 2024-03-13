// user.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map, Observable} from 'rxjs';
import { User } from "../../models/user.model";
import {Book} from "../../models/book.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/api/utilisateurs';

  constructor(private http: HttpClient) {}

  getAllUser(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/recupUtilisateurs`);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User[]>(`${this.apiUrl}/recupInfoUtilisateur?utilisateurId=${id}`).pipe(
      map(users => users[0]) // Prenez le premier utilisateur du tableau
    );
  }


  getUserEmprunts(id: number): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiUrl}/recupInfoUtilisateur/${id}/emprunts`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/creerUtilisateur`, user);
  }


  // Recherche des utilisateurs par nom
  searchUsersByName(name: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/rechercherUtilisateurParNom?nom=${name}`);
  }


  retournerLivre(empruntId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/retournerLivre`, { empruntId });
  }



}
